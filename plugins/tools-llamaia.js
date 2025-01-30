/* Llama Al By WillZek 
- Powered By Free Codes Titan
- https://whatsapp.com/channel/0029ValMlRS6buMFL9d0iQ0S
*/

// [🧠] 𝗟𝗟𝗔𝗠𝗔 𝗔𝗜

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
title: '𝐋𝐥𝐚𝐦𝐚 𝐀𝐢 - 𝐈𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐀𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥',
body: dev,
thumbnailUrl: 'https://cloud.dorratz.com/files/3bc739df5766a9de8e7dfef65d6961f6',
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