import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import canvafy from 'canvafy';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let chat = global.db.data.chats[m.chat];
  // let titu = '';
  // let grupo = 'https://chat.whatsapp.com/H5ueOzVRAzhBolt3lczDfG';
  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];
  let userName = user ? user.name : await conn.getName(who);

  const getUserAvatar = async () => {
    try {
      return await conn.profilePictureUrl(m.messageStubParameters[0], 'image');
    } catch (err) {
      return 'https://i.ibb.co/cFzgdNw/file.jpg';
    }
  };

  const generateImage = async (title, description, backgroundImage) => {
    const userAvatar = await getUserAvatar();
    const img = await new canvafy.WelcomeLeave()
      .setAvatar(userAvatar)
      .setBackground('image', backgroundImage)
      .setTitle(title)
      .setDescription(description)
      .setBorder('#2a2e35')
      .setAvatarBorder('#2a2e35')
      .setOverlayOpacity(0.1)
      .build();

    return img;
  };

  let groupSize = participants.length;
  if (m.messageStubType === 27) {
    groupSize++;
  } else if (m.messageStubType === 28 || m.messageStubType === 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `┌─★ 𝐏𝐫𝐚𝐤𝐁𝐨𝐭-2.0\n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🚀 ${welcomeMessage}\n   │🚀  ${groupMetadata.subject}\n   └───────────────┈ ⳹\n> ${dev}`

    let img = await generateImage(
      '¡BIENVENIDO/A!',
      `Disfruta de tu estadía. Ahora somos ${groupSize} miembros.`,
      'https://i.ibb.co/1fVJfvxk/file.jpg'
    );

    await conn.sendMini(m.chat, packname, null, bienvenida, img, img, channel, null);
  }

  if (chat.welcome && m.messageStubType == 28) {
         let bye = `┌─★ 𝐏𝐫𝐚𝐤𝐁𝐨𝐭-2.0\n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🚀 ${despMessage}\n   │🚀 Un plato menos en la mesa\n   └───────────────┈ ⳹\n> ${dev}`
    let img = await generateImage(
      '¡HASTA LUEGO!',
      `Nos vemos pronto. Ahora somos ${groupSize} miembros.`,
      'https://i.ibb.co/Kcf0xdrQ/file.jpg'
    );

    await conn.sendMini(m.chat, packname, null, bye, img, img, channel, null);
  }

  if (chat.welcome && m.messageStubType == 32) {
     let kick = `┌─★ 𝐏𝐫𝐚𝐤𝐁𝐨𝐭-2.0\n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🚀 ${despMessage}\n   │🚀 Un plato menos en la mesa\n   └───────────────┈ ⳹\n> ${dev}`

    let img = await generateImage(
      '¡HASTA LUEGO!',
      `Nos vemos pronto. Ahora somos ${groupSize} miembros.`,
      'https://i.ibb.co/Kcf0xdrQ/file.jpg'
    );

    await conn.sendMini(m.chat, packname, null, kick, img, img, channel, null);
  }
}