import db from '../lib/database.js'
import { cpus as _cpus, totalmem, freemem, platform, hostname, version, release, arch } from 'os'
import speed from 'performance-now'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
std: 'JEDEC',
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix }) => {
let bot = global.db.data.settings[conn.user.jid]
let _uptime = process.uptime() * 1000
let uptime = (_uptime).toTimeString()
let totalreg = Object.keys(global.db.data.users).length
let totalbots = Object.keys(global.db.data.settings).length
let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => total + stat.total, 0)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
let totalchats = Object.keys(global.db.data.chats).length
let totalf = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let timestamp = speed()
let latensi = speed() - timestamp
let PrakBot = `╭─⬣「 *Info De 𝗣⃪᪼ۖ⃖𝐑𝗔̷̷͠𝐊 𝖡̶⃨͠𝐎𝗧ۚ𖬲็̹͛* 」⬣\n`
PrakBot += `│ 👑 *Creador* : @${owner[0][0].split('@s.whatsapp.net')[0]}\n`
PrakBot += `│ 🍭 *Prefijo* : [  ${usedPrefix}  ]\n`
PrakBot += `│ 📦 *Total Plugins* : ${totalf}\n`
PrakBot += `│ 💫 *Plataforma* : ${platform()}\n`
PrakBot += `│ 🧿 *Servidor* : ${hostname()}\n`
PrakBot += `│ 🚀 *RAM* : ${format(totalmem() - freemem())} / ${format(totalmem())}\n`
PrakBot += `│ 🌟 *FreeRAM* : ${format(freemem())}\n`
PrakBot += `│ ✨️ *Speed* : ${latensi.toFixed(4)} ms\n`
PrakBot += `│ 🕗 *Uptime* : ${uptime}\n`
PrakBot += `│ 💛 *Modo* : ${bot.public ? 'Privado' : 'Publico'}\n`
PrakBot += `│ 💛 *Comandos Ejecutados* : ${toNum(totalStats)} ( *${totalStats}* )\n`
PrakBot += `│ 💛 *Grupos Registrados* : ${toNum(totalchats)} ( *${totalchats}* )\n`
PrakBot += `│ 🍧 *Registrados* : ${toNum(totalreg)} ( *${totalreg}* ) Usuarios\n`
PrakBot += `╰─⬣\n\n`
PrakBot += `╭─⬣「 *Chats De PrakBot* 」⬣\n`
PrakBot += `│ 🧃 *${groupsIn.length}* Chats en Grupos\n`
PrakBot += `│ 💛 *${groupsIn.length}* Grupos Unidos\n`
PrakBot += `│ 💛 *${groupsIn.length - groupsIn.length}* Grupos Salidos\n`
PrakBot += `│ 💬 *${chats.length - groupsIn.length}* Chats Privados\n`
PrakBot += `│ 💭 *${chats.length}* Chats Totales\n`
PrakBot += `╰─⬣\n\n`
PrakBot += `╭─⬣「 *NodeJS Uso de memoria* 」⬣\n`
PrakBot += `${'```' + Object.keys(used).map((key, _, arr) => `│ ${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}\n`
PrakBot += `╰─⬣`

await conn.reply(m.chat, PrakBot, fkontak, { contextInfo: { mentionedJid: [owner[0][0] + '@s.whatsapp.net'], externalAdReply: { mediaUrl: false, mediaType: 1, description: false, title: '↷✦╎Info - Bot╎🚩˖ ⸙',body: packname, previewType: 0, thumbnail: icons, sourceUrl: redes}}})
// await conn.sendFile(m.chat, imagen1, 'Menu.jpg', Menu, fkontak, null, rcanal)
}
handler.help = ['infobot']
handler.tags = ['main']
handler.command = ['info', 'infobot']
handler.estrellas = 5;

export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else if (number <= -1000 && number > -1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number <= -1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()
}}
