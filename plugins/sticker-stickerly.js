/* Codigo Hecho Por WillZek 
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    const stickerUrl = text.trim();
    const apiUrl = `https://delirius-apiofc.vercel.app/download/stickerly?url=${encodeURIComponent(stickerUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const json = await response.json();

        for (let sticker of json.stickers) {
            if (sticker.url) {
                await conn.sendFile(m.chat, sticker.url, 'sticker.webp', m);
            }
        }

    } catch (error) {
        console.error(error.message);
        m.reply(`🎩 Ocurrió un error: ${error.message}`);
    }
}

handler.help = ['stickerly <url>'];
handler.tags = ['sticker'];
handler.command = ['stickerly', 'stlydl'];
handler.estrellas = 4;

export default handler;