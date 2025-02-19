/* Codigo Hecho Por WillZek
- Recuerda Instalar La Dependencia "@hiudyy/ytdl"
*/

import fetch from 'node-fetch';
import yts from 'yt-search';

let handler = async(m, { conn, args, text }) => {

if (!text) return m.reply('Ingrese Un Link De YouTube');

const search = await yts(text);

if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

const videoInfo = search.all[0];

m.react(rwait);

let video;
try {
      video = await (await fetch(`https://api.alyachan.dev/api/ytv?url=${text}&apikey=Gata-Dios`)).json();
} catch (error) {
try {
      video = await (await fetch(`https://delirius-apiofc.vercel.app/download/ytmp4?url=${videoInfo.url}`)).json();
} catch (error) {
      video = await (await fetch(`https://api.vreden.my.id/api/ytmp4?url=${videoInfo.url}`)).json();
      }
    }

if (!video.data || !video.data.url) throw "No se pudo obtener el video.";

await conn.sendMessage(m.chat, {
      video: { url: video.data.url },
      mimetype: "video/mp4",
      caption: ``,
    }, { quoted: m });
    m.react(done);
}

handler.command = ['test']

export default handler;

/*
import { ytmp4 } from '@hiudyy/ytdl';

let handler = async(m, { conn, args, command, usedPrefix }) => {

if (!args[0]) return m.reply(m.chat, '🍨 Ingresa Un Link De Youtube', m, rcanal);

const vid = await ytmp4(args[0]);

conn.sendMessage(m.chat, { video: { url: vid }, caption: 'Aqui Tiene✨', fileName: 'video.mp4', mimetype: 'video/mp4' }, { quoted: m });
}

handler.command = ['test'];

export default handler;
*/