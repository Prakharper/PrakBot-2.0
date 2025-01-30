/* Codigo Hecho Por WillZek 
- https://github.com/WillZek 
*/

import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`🎩 Ingresa un link de Stickerly.`);

    const stickerUrl = text.trim();
    const apiUrl = `https://delirius-apiofc.vercel.app/download/stickerly?url=${encodeURIComponent(stickerUrl)}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error('💥 Error al descargar el pack de stickers');

        const json = await response.json();
        
        if (!json.stickers || json.stickers.length === 0) {
            return m.reply(`🍭 No se encontraron stickers en la URL proporcionada.`);
        }

        for (let sticker of json.stickers) {

            conn.sendFile(m.chat, sticker.url, 'sticker.webp', 'Aquí tienes tu sticker!', m);
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