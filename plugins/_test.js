// By WillZek 

import fetch from 'node-fetch';

let WZ = async(m, { conn, usedPrefix, command, text }) => {

if (!text) return m.reply(m.chat, `🍭 Ingresa Un Texto Para Buscar En Youtube\n> *Ejemplo:* ${usedPrefix + command}crow edits`, m, rcanal);

let api = await(await fetch(`https://dark-core-api.vercel.app/api/search/youtube?key=api&text=${text}`)).join();

let ST = `✨ *Título:* ${api.results.title}\n📎 *Link:* ${api.results.url}\n🍭 *Canal:* ${api.results.channel}\n📆*Publicado:* ${api.results.published}`;

let img = api.results.thumbnail



