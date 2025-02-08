/* Anime Info By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

// [🔎] Anime Info

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(m.chat, '🍭 Ingrese Un Nombre Del Algún Anime', m, rcanal);

try {
let api = `https://api.ryzendesu.vip/api/weebs/anime-info?query=${text}`;

let responde = await fetch(api);
let json = await response.json();

let txt = `Nombre: ${json.title}\nUrl: ${json.url}\nCreado: ${json.createdAt}`;

let img = json.image_url;

conn.sendMessage(m.chat, { image: { url: img, caption: txt }, { quoted: fkontak }});

} catch (error) {
console.log(error)
m.reply(`*Error:* ${error.message}`);
m.reply('✖️');
 }
};

handler.command = ['test'];

export default handler;