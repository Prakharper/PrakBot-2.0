// Twitterdl By WillZek 

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return m.reply('⬇️ Ingresa Un Link De Twitter Para Poder Mandar Su Video o Imagen');

    try {
        let api = `https://delirius-apiofc.vercel.app/download/twitterdl?url=${args[0]}`;
        let response = await fetch(api);
        let json = await response.json();

        if (!json.found) {
            return m.reply('✖️ No se encontró ningún medio en el enlace proporcionado.');
        }

        let media = json.media;

        // Enviar el video
        if (json.type === 'video') {
            let videoUrl = media[0].url; // URL del video
            let txt = `> *¡Descargado con éxito!*`;

            await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: txt }, { quoted: fkontak });
            m.react('✅');
        } 
        // Enviar la imagen
        else if (json.type === 'photo') {
            let imageUrl = media[0].url; // URL de la imagen
            await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: '¡Imagen descargada con éxito!' }, { quoted: fkontak });
            m.react('✅');
        } else {
            return m.reply('✖️ El enlace no es ni una imagen ni un video.');
        }

    } catch (e) {
        m.reply(`Error: ${e.message}`);
        m.react('✖️');
    }
}

handler.help = ['xdl'];
handler.tag = ['descargas'];
handler.command = ['test'];
handler.estrellas = 5;

export default handler;