/* Codigo Hecho Por WillZek 
- https://github.com/WillZek
*/

import fetch from 'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, '🍭 Ingrese un texto para hablar con Llama AI', m)
    try {
        let api = await fetch(`https://delirius-apiofc.vercel.app/ia/llamaia?query=${text}`)
        let json = await api.json()
        let responseMessage = json.data;

        await conn.sendMessage(m.chat, {
text: responseMessage,
contextInfo: {
externalAdReply: {
title: 'ᥣᥣᥲmᥲ - ᥲі ⍴᥆ᥕᥱr ᑲᥡ mᥱ𝗍ᥲ',
body: dev,
thumbnailUrl: 'https://files.catbox.moe/8nf88e.jpg.jpeg',
sourceUrl: channel,
mediaType: 1,
renderLargerThumbnail: true
}}},
{ quoted: m})
    } catch (error) { 
        console.error(error)
    }
}

handler.command = ['llamaai', 'llama']

export default handler