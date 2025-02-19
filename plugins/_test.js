/* Codigo Hecho Por WillZek
- Recuerda Instalar La Dependencia "@hiudyy/ytdl"
*/

import { ytmp4 } from '@hiudyy/ytdl';

let handler = async(m, { conn, args, command, usedPrefix }) => {

if (!args[0]) return m.reply(m.chat, '🍨 Ingresa Un Link De Youtube', m, rcanal);

const vid = await ytmp4(args[0]);
   
conn.sendMessage(m.chat, { video: vid }, caption: 'Aqui Tiene✨', mimeType: 'video/mp4' });
}

handler.command = ['test'];

export default handler;