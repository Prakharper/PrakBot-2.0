/* Codigo Hecho Por WillZek 
- https://github.com/WillZek 
*/

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let stiker = false;
    try {
        if (args[0]) {
            if (isUrl(args[0])) {
                const url = `https://delirius-apiofc.vercel.app/download/stickerly?url=${args[0]}`;
                const res = await fetch(url);
                const json = await res.json();
                if (json.sticker) {
                    stiker = json.sticker;
                } else {
                    return m.reply(`💫 No se encontraron stickers en esta URL.`);
                }
            } else {
                return m.reply(`💫 El URL es incorrecto`);
            }
        } else {
            return m.reply(`💫 Por favor, proporciona una URL de sticker.`);
        }
    } catch (e) {
        console.error(e);
        if (!stiker) stiker = e;
    } finally {
        if (stiker) {
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, {
                contextInfo: {
                    'forwardingScore': 200,
                    'isForwarded': false,
                    externalAdReply: {
                        showAdAttribution: false,
                        title: textbot,
                        body: dev,
                        mediaType: 2,
                        sourceUrl: args[0],
                        thumbnail: icons
                    }
                }
            }, { quoted: m });
        } else {
            return conn.reply(m.chat, `💫 *_La conversión ha fallado, intenta de nuevo._*`, m);
        }
    }
}

handler.help = ['stickerly <url>'];
handler.tags = ['sticker'];
handler.command = ['stickerly', 'slydl'];
handler.estrellas = 3;

export default handler;

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
}