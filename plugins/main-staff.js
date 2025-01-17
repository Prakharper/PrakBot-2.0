let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚀 *EQUIPO DE AYUDANTES*
🧿 *Bot:* ${global.botname}
🌠 *Versión:* ${global.vs}

• *AAMŌN* 
🩸 *Rol:* EDITOR PROFESIONAL Y PUTITA FAVORITA DE PRAK HARPER
🩸 *Número:* Wa.me/529983694618

• *MATTEUS*  
🧿 *Rol:* COLABORADOR DEL VIDEO DEL MENÚ Y SOBRINO FAVORITO DE PRAK
🧿 *Número:* Wa.me/573185444099
`
await conn.sendFile(m.chat, 'https://files.catbox.moe/sx42eg.jpg', 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🚀 STAFF OFICIAL🚀`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler