/* [🍭] YOUTUBE VIDEO
- By WillZek 
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, args, text }) => {

if (!text) return m.reply('💖 Ingrese Un Link De YouTube\n> *Ejemplo:* https://youtube.com/shorts/ZisXJqH1jtw?si=0RZacIJU5zhoCmWh');

m.react(rwait);

let video;

try {
let camel = await (await fetch(`https://good-camel-seemingly.ngrok-free.app/download/mp4?url=${text}`)).json();

if (camel && camel.data) {
            video = camel;
} else {
let dark = await (await fetch(`https://dark-core-api.vercel.app/api/download/ytmp4?key=api&url=${text}`)).json();
if (dark && dark.downloads && dark.downloads.length > 0) {
                video = dark;
            }
        }
} catch (error) {
return m.reply('《✧》Hubo un error al intentar acceder al link.\n> Si el problema persiste, reportalo en el grupo de soporte.');
    }

let link = video?.downloads?.find(d => d.quality === "360p")?.link ||
               video?.downloads?.find(d => d.quality === "1080p50")?.link ||
               video?.downloads?.find(d => d.quality === "480p")?.link;

if (!link) return m.reply('《✧》Hubo un error al intentar acceder al link.\n> Si el problema persiste, reportalo en el grupo de soporte.');

await conn.sendMessage(m.chat, {
        video: { url: link },
        mimetype: "video/mp4",
        caption: `${dev}`,
    }, { quoted: m });
m.react(done);
}

handler.command = ['ytv', 'ytmp4', 'ymp4'];

export default handler;