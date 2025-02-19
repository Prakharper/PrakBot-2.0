import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {

let pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || 'https://files.catbox.moe/kd7vs5.jpg';

let p = 'https://files.catbox.moe/i8fk7k.jpg';

let ppp = await fetch(`https://api.lyrax.net/api/maker/welcome1?name=WillZek&gpname=CrowBot&member=3&pp=https://files.catbox.moe/i8fk7k.jpg&bg=https://files.catbox.moe/i8fk7k.jpg&apikey=5f6682c9`);

let buffer = await ppp.buffer();

conn.sendMessage(m.chat, { image: { url: buffer }, caption: 'Prueba' }, { quoted: fkontak });
}

handler.command = ['wtest'];

export default handler;