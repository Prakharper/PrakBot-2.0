let handler = async (m, { conn }) => {
let subBots = global.conns.map((subBot) => subBot.user.jid);
if (subBots.length === 0) {
return conn.reply(m.chat, '🚫 No hay Sub Bots conectados.', m);
  }
let message = '🌟 Sub Bots conectados:\n' + subBots.join('\n');
m.reply(m.chat, message, m);
}

handler.command = ['testbot'];

export default handler;