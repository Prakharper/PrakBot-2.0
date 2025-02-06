import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, args }) => {
    if (!args[0]) return m.reply('🍭 Ingresa un link de Terabox');

try {
let api = `https://dark-core-api.vercel.app/api/download/TeraBox?key=api&url=${args[0]}`
let res = await fetch(api);
let json = await res.json();

// if (!json.success) return m.reply('❌ Error al obtener los detalles del enlace, por favor intenta nuevamente.');

let link = json.url[0];
let filename = json.fileName[0];
let mime = json.type[0];

let txt = `*「🍨」${filename}*`;

await conn.sendMessage(m.chat, { document: { url: link }, mimetype: mime, fileName: filename }, { quoted: m });

        await m.react('✅');
    } catch (error) {
        console.error(error);
        m.reply(`❌ Ocurrió un error al procesar la solicitud. ${error.message}`);
    }
}

handler.help = ['terabox *<url>*']
handler.tags = ['descargas']
handler.command = ['terabox', 'tbdl']

export default handler;

/*
let handler = async (m, { conn }) => {
let subBots = global.conns.map((subBot) => subBot.user.jid);
if (subBots.length === 0) {
return conn.reply(m.chat, '🚫 No hay Sub Bots conectados.', m);
  }
let message = '🌟 Sub Bots conectados:\n' + subBots.join('\n');
conn.reply(m.chat, message, m);
}

handler.command = ['testbot'];

export default handler;
*/