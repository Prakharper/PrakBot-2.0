/* Anime Info By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

// [🔎] Anime Info

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(m.chat, '🍭 Ingrese Un Nombre Del Algún Anime', m, rcanal);

try {
let api = `https://archive-ui.tanakadomp.biz.id/search/lirik?q=${text}`;

let responde = await fetch(api);
let json = await responde.json();
let crow = json.results;

let txt = `*Nombre:* ${crow.title}\n*Letra:* ${crow.lyrics}`;

let img = crow.thumbs;

conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: fkontak });

} catch (error) {
console.log(error)
m.reply(`*Error:* ${error.message}`);
m.reply('✖️');
 }
};

handler.command = ['test'];

export default handler;