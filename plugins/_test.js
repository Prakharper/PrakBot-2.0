let handler = async (m, { args, conn }) => {

let chat = global.db.data.chats[m.chat];
if (!(m.chat in global.db.data.chats)) {
return conn.reply(m.chat, '🎌 *¡Este chat no está registrado!*', m, fake);
}

if (args[0] == 'on') {
chat.isBanned = false;
conn.reply(m.chat, `🍭 *CrowBot-ST ya fue desbaneado en este chat*`, m, rcanal);

} else if (args[0] == 'off') {
chat.isBanned = true;
conn.reply(m.chat, `✅ *El Bot Ha Sido Desactivado En Este Chat*`, m, rcanal);
  }
}

handler.command = ['test'];

export default handler;