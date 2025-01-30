/* Github Search By WillZek 
- Free Codes Titan 
- https://github.com/WillZek 
*/

// [🔎] 𝗚𝗶𝘁𝗵𝘂𝗯 𝗦𝗲𝗮𝗿𝗰𝗵

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply(m.chat, '🍭 Ingresa Un Nombre De Repositorio o De Usuario De Github', m, rcanal);

try {
let api = 'https://dark-core-api.vercel.app/api/search/github?key=api&q=${text}';

let responde = await fetch(api);
let json = await api.json();

let txt = `Nombre: ${json.name}\nDescripcion: ${json.description}\nCreado: ${json.createdAt}`;

conn.sendMessage(m.chat, { image: { url: 'despuespongoesto.jpg', caption: txt }, { quoted: fkontak }});

} catch (error) {
console.log(error)
m.reply(`*Error:* ${error.message}`);
m.reply('✖️');
 }
};

handler.command = ['githubsearch', 'gbsearch'];

export default handler;