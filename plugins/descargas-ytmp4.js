import fetch from 'node-fetch';

let handler = async(m, { conn, args, text }) => {
    if (!text) return m.reply('🍭 Ingrese Un Link De YouTube\n> *Ejemplo:* https://youtube.com/shorts/ZisXJqH1jtw?si=0RZacIJU5zhoCmWh');

m.react(rwait);

try {
let apis = [
            `https://api.alyachan.dev/api/ytv?url=${text}&apikey=Gata-Dios`,
            `https://api.fgmods.xyz/api/downloader/ytmp4?url=${text}&quality=480p&apikey=be9NqGwC`,
            `https://good-camel-seemingly.ngrok-free.app/download/mp4?url=${text}`,
            `https://dark-core-api.vercel.app/api/download/ytmp4?key=api&url=${text}`
        ];

let link;
for (let api of apis) {
const res = await fetch(api);
if (res.ok) {
const json = await res.json();
link = json.data?.url || json.download_url || json.result?.dl_url || json.downloads?.link;
if (link) break;
            }
        }

if (!link) return m.reply(`No se pudo obtener el video.`);

await conn.sendMessage(m.chat, {
            video: { url: link },
            mimetype: "video/mp4",
            caption: `${dev}`,
        }, { quoted: m });
m.react(done);

} catch (e) { 
m.reply(`Error: ${e.message}`);
  }
}

handler.command = ['ytv', 'ytmp4', 'ymp4']

export default handler;

// *[ ❀ YTMP4 ]*
/* import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `💛 Ingresa un link de YouTube válido\n> Ejemplo https://youtu.be/P4LfHsUnNL8?si=ahDKJ5h0cW-EB9C9`, m, rcanal);

  await m.react('🕓');

  try {
    let api = await (await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${text}`)).json();
    let dl_url = api.data.dl;

    await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `${resp}` },{ quoted: m });

    await m.react('✅');
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(m.chat, `✖️ error comando mal usado ${usedPrefix + commando} *<url>*  `, m, rcanal);
  }
};

handler.help = ['ytmp4 *<url>*'];
handler.tags = ['descargas'];
handler.command = ['ytmp4', 'ytv'];
handler.estrellas = 4;
handler.register = true;

export default handler;
*/
