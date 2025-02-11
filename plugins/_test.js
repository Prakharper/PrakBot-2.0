let handler = async (m, { conn, args }) => {
let chat = global.db.data.chats[m.chat];

if (!(m.chat in global.db.data.chats)) {
return conn.reply(m.chat, '*El Bot No Está Registrado En Este Chat*', m);
}

if (chat.isBanned) {
return conn.reply(m.chat, `${botname} Apagado`, m);
}

if (args[0] == 'on') {
if (!chat.isBanned) {
return conn.reply(m.chat, `*${botname} Ya Estaba Encendido*`, m);
}

chat.isBanned = false;
await conn.reply(m.chat, `「✿」${botname} *Encendido*`, m);
} else if (args[0] == 'off') {
chat.isBanned = true;
await conn.reply(m.chat, `「✿」${botname} *Apagado*`, m);
} else {
conn.reply(m.chat, `「✿」Usa Una Opción Valida`, m);
    }
}

handler.command = ['test'];

export default handler;

/* let handler = async (m, { args, conn }) => {

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
*/
