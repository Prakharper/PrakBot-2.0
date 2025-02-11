let handler = async (m, { args, conn }) => {

let chat = global.db.data.chats[m.chat];

if (args[0] == 'off') {
chat.isBanned = true;
conn.reply(m.chat, `✅ *El Bot Ha Sido Desactivado En Este Chat*`, m, rcanal);
}

if (args[0] == 'on') {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🎌 *¡Este chat no está registrado!*', m, fake)

if (chat.isBanned === undefined) {
chat.isBanned = false
}

if (!chat.isBanned) return conn.reply(m.chat, '[🌠] *El bot no está baneado en este chat*', m, fake);
chat.isBanned = false

conn.reply(m.chat, `🍭 *CrowBot-ST ya fué desbaneado en este chat*`, m, fake);
  }
}

handler.command = ['test'];

export default handler