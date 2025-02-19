let handler = async(m, { conn, command }) => {

let pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || 'https://files.catbox.moe/kd7vs5.jpg';

let ppp = `https://api.lyrax.net/api/maker/welcome1?name=WillZek&gpname=CrowBot&member=3&pp=https://files.catbox.moe/i8fk7k.jpg&bg=https://files.catbox.moe/i8fk7k.jpg&apikey=5f6682c9`;

conn.sendMessage(m.chat, { image: { url: ppp }, caption: 'Prueba' }, { quoted: fkontak });
}

handler.command = ['wtest'];

export default handler;