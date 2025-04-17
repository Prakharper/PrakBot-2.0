const handler = async (m, {conn}) => {
const texto = `*¿QUIERES A 𝗣⃪᪼ۖ⃖𝐑𝗔̷̷͠𝐊 𝖡̶⃨͠𝐎𝗧ۚ𖬲็̹͛ EN TU GRUPOS?*🚀 

!! *¡Sencillo!, lo único que pedimos :*!!

Q haga  que 10 amigos o conocidos sigan el canal, una vez que lo hagan le dices que te mandé cap de que ya siguen el canal y me lo reenvías junto con el link de tus grupos a donde quieras el bot_ 🚀

*enviar los captures a este número* +505 5786 5603.

*si no te responden en ese número unete al siguiente grupo* https://chat.whatsapp.com/DrQmZfEMSWiK2COjH3Xqq7

*Link de canal que deben seguir* 👇

https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t
`.trim();

  m.reply(texto);
};
handler.command = /^(tenerunbot)$/i;
handler.tags =['main'] 
handler.help = ['tenerunbot <el bot para tu grupo>'] 
export default handler;