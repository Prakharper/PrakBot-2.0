import { webp2png } from '../lib/webp2mp4.js'

var handler = async (m, { conn, usedPrefix, command }) => {

const notStickerMessage = `*🌳 Responda a una imagen*`
if (!m.quoted) return m.reply(notStickerMessage);
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) return m.reply(notStickerMessage)
conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m, m)

}
handler.help = ['toimg']
handler.tags = ['tools']
handler.command = ['toimg', 'jpg', 'jpge', 'png']

handler.estrellas = 9;

export default handler