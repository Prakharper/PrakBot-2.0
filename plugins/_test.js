/* Anime Info By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

// [🔎] Anime Info

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(m.chat, '🍭 Ingrese Un Nombre Del Algún Anime', m, rcanal);

try {
let api = `https://api.ryzendesu.vip/api/search/lyrics?query=${text}`;

let responde = await fetch(api);
let json = await responde.json();

let txt = `*Nombre:* ${json.name[0]}\n*Artista:* ${json.artistName[0]}\n*Duracion:* ${json.duration[0]}\n*Letra:* ${json.plainLyrics[0]}`;

conn.sendMessage(m.chat, { text: txt }, { quoted: fkontak });

} catch (error) {
console.log(error)
m.reply(`*Error:* ${error.message}`);
m.reply('✖️');
 }
};

handler.command = ['test'];

export default handler;