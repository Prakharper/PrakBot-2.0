import axios from 'axios';

let handler = async (m, { conn, text, groupMetadata, participants }) => {

    let user = a => '@+' + a.split('@')[0];
    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps.getRandom();

    const groupAdmins = participants.filter(p => p.admin);
    const botId = conn.user.jid;
    const groupOwner = groupAdmins.find(p => p.isAdmin)?.id;
    const groupNoAdmins = participants.filter(p => p.id !== botId && p.id !== groupOwner && !p.admin);

    if (groupNoAdmins.length === 0) throw '*⚠️ No hay usuarios para eliminar.*'; 

    const randomUser  = groupNoAdmins[Math.floor(Math.random() * groupNoAdmins.length)];

    const nombreUsuario = await conn.getName(randomUser .id);

    const stickerUrl = 'https://files.catbox.moe/agx2sc.webp'; 
    m.react('💫');
    await conn.sendFile(m.chat, stickerUrl, 'sticker.webp', '', m, null);

    conn.reply(m.chat, `*🌠 Seleccion Aleatoria : ${nombreUsuario}\n> Serás Eliminado*`, m, null);

    await conn.groupParticipantsUpdate(m.chat, [randomUser .id], 'remove');
    conn.reply(m.chat, `*${nombreUsuario}* Fue Eliminado Con Exito 🎩`, m, null);
    m.react('✅');
}

handler.help = ['kickrandom']
handler.tags = ['grupo'];
handler.command = /^(kickrandom|ruletaban|rban|test)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;