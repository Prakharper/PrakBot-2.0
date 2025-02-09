/* Lyrics By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

// [⌨️] Letra De Cancion

import fetch from 'node-fetch';

let handler = async(m, { conn, args, usedPrefix, command }) => {

if (!args[0]) return m.reply(m.chat, '🍭 Ingresa Un Link De Xnxx', m, rcanal);

try {
let api = `https://archive-ui.tanakadomp.biz.id/download/xnxx?url=${args[0]}`;

let responde = await fetch(api);
let json = await responde.json();
let crow = json.result;

let txt = `*Enviando Resultados*\n> Powered By CrowBot`;

let img = crow.image;

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (e) {
console.log(e)
m.reply('*No se pudo obtener la letra De su canción*');
m.reply('✖️');
 }
};

handler.command = ['lyrics'];

export default handler;