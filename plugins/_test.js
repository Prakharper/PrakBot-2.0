import axios from 'axios';

let handler = async (m, { conn, text, participants }) => {

    const groupAdmins = participants.filter(p => p.admin);
    const botId = conn.user.jid;
    const groupOwner = groupAdmins.find(p => p.isAdmin)?.id;
    const groupNoAdmins = participants.filter(p => p.id !== botId && p.id !== groupOwner && !p.admin);

    if (participants.length === groupAdmins.length) { 
return m.reply('*⚠️ Solo hay administradores en este grupo.*');
    }

    const randomUser   = groupNoAdmins[Math.floor(Math.random() * groupNoAdmins.length)];

    const tag = await conn.getName(randomUser .id);

    conn.reply(m.chat, `*🌠 Selección Aleatoria: ${tag}*\n> Serás Eliminado`, m, null);

    await conn.groupParticipantsUpdate(m.chat, [randomUser .id], 'remove');
    conn.reply(m.chat, `*${tag}* Fue Eliminado Con Éxito 🎩`, m, null);
    m.react('✅');
}

handler.help = ['kickrandom']
handler.tags = ['grupo'];
handler.command = /^(kickrandom|ruletaban|rban|test)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;