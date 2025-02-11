let handler = async (m, { args, conn }) => {

if (args[0] == 'off') {
global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `✅ *El Bot Ha Sido Desactivado En Este Chat*`, m, rcanal)
}

if (args[0] == 'on') {
 if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🎌 *¡Este chat no está registrado!*', m, fake)

let chat = global.db.data.chats[m.chat]

if (!chat.isBanned) return conn.reply(m.chat, '[🌠] *El bot no está baneado en este chat*', m, fake)
chat.isBanned = false

await conn.reply(m.chat, `${emojis} *CrowBot-ST ya fué desbaneado en este chat*`, m, fake)
}

handler.command = ['test']


export default handler