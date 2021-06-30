/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const Drkbox = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');
const MLang = Language.getString('messages');
const KLang = Language.getString('keys');


if (CON.LANG == 'ES') imUrl = '!Necesito una url de una imagen¡'
if (CON.LANG == 'EN') imUrl = '!I need the url of an image¡'

if (Config.WORKTYPE == 'private') {

    Drkbox.addCommand({pattern: 'infottp', fromMe: true desc: Lang.info_ttp}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *TTP COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ ➡️ /ttp\n  Escribe el texto en una imágen.\n\n┠⊷️ ➡️ /attp\n  Escribe el texto en un sticker de colores.\n\n┠⊷️ ➡️ /animettp\n  Escribe el texto sobre una imágen de anime.\n\n┠⊷️ ➡️ /breakwallttp\n  Escribe el texto en una pared de neon rota.\n\n┠⊷️ ➡️ /flamettp\n  Escribe el texto en llamas.\n\n┠⊷️ ➡️ /bannernarutottp\n  Escribe el texto sobre un baner de *Naruto*.\n\n┠⊷️ ➡️ /darkneonttp\n  Escribe el texto sobre una imágen de neón.\n\n┠⊷️ ➡️ /burnpaperttp\n  Escribe el texto sobre un papel quemandose.\n\n┠⊷️ ➡️ /harryttp\n   Escribe el texto de una sobre el logo de *Harry Potter*.\n\n┠⊷️ ➡️ /candlemugttp\n  Escribe el texto sobre una taza con dulces.\n\n┠⊷️ ➡️ /mugflowerttp\n  Escribe el texto sobre una taza con flores.\n\n┠⊷️ ➡️ /lovemsgttp\n  Escribe el texto sobre una taza con flores2.\n\n┠⊷️ ➡️ /cuadrottp\n  Escribe el texto sobre un cuadro con corazones.\n\n┠⊷️ ➡️ /shadowttp\n  Escribe el texto sobre un papel con sombra.\n\n┠⊷️ ➡️ /coffeecupttp\n  Escribe el texto sobre una tasa de cafe.\n\n┠⊷️ ➡️ /sweetcandyttp\n  Escribe el texto sobre una mesa con dulces.\n\n┠⊷️ ➡️ /woodttp\n  Escribe el texto sobre una mesa en forma de tallado.\n\n┠⊷️ ➡️ /matrixttp\n  Escribe el texto sobre el logo de *Matrix*.\n\n┠⊷️ ➡️ /bneonttp\n  Escribe el texto en Neon Cool.\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));

    Drkbox.addCommand({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));

    Drkbox.addCommand({ pattern: 'breakwallttp ?(.*)', fromMe: true }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=${KLang.KZ}&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'wasted ?(.*)', fromMe: true }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(imUrl);
        var ttinullimage = await axios.get(`https://some-random-api.ml/canvas/wasted?avatar=${match[1]}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'matrixttp ?(.*)', fromMe: true }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=${KLang.KZ}&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'bneonttp ?(.*)', fromMe: true }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=${KLang.KZ}&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

}

else if (Config.WORKTYPE == 'public') {

    Drkbox.addCommand({pattern: 'infottp', fromMe: false desc: Lang.info_ttp}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *TTP COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ ➡️ /ttp\n  Escribe el texto en una imágen.\n\n┠⊷️ ➡️ /attp\n  Escribe el texto en un sticker de colores.\n\n┠⊷️ ➡️ /animettp\n  Escribe el texto sobre una imágen de anime.\n\n┠⊷️ ➡️ /breakwallttp\n  Escribe el texto en una pared de neon rota.\n\n┠⊷️ ➡️ /flamettp\n  Escribe el texto en llamas.\n\n┠⊷️ ➡️ /bannernarutottp\n  Escribe el texto sobre un baner de *Naruto*.\n\n┠⊷️ ➡️ /darkneonttp\n  Escribe el texto sobre una imágen de neón.\n\n┠⊷️ ➡️ /burnpaperttp\n  Escribe el texto sobre un papel quemandose.\n\n┠⊷️ ➡️ /harryttp\n   Escribe el texto de una sobre el logo de *Harry Potter*.\n\n┠⊷️ ➡️ /candlemugttp\n  Escribe el texto sobre una taza con dulces.\n\n┠⊷️ ➡️ /mugflowerttp\n  Escribe el texto sobre una taza con flores.\n\n┠⊷️ ➡️ /lovemsgttp\n  Escribe el texto sobre una taza con flores2.\n\n┠⊷️ ➡️ /cuadrottp\n  Escribe el texto sobre un cuadro con corazones.\n\n┠⊷️ ➡️ /shadowttp\n  Escribe el texto sobre un papel con sombra.\n\n┠⊷️ ➡️ /coffeecupttp\n  Escribe el texto sobre una tasa de cafe.\n\n┠⊷️ ➡️ /sweetcandyttp\n  Escribe el texto sobre una mesa con dulces.\n\n┠⊷️ ➡️ /woodttp\n  Escribe el texto sobre una mesa en forma de tallado.\n\n┠⊷️ ➡️ /matrixttp\n  Escribe el texto sobre el logo de *Matrix*.\n\n┠⊷️ ➡️ /bneonttp\n  Escribe el texto en Neon Cool.\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));

    Drkbox.addCommand({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));

    Drkbox.addCommand({ pattern: 'breakwallttp ?(.*)', fromMe: false }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=${KLang.KZ}&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'wasted ?(.*)', fromMe: false }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(imUrl);
        var ttinullimage = await axios.get(`https://some-random-api.ml/canvas/wasted?avatar=${match[1]}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'matrixttp ?(.*)', fromMe: false }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=${KLang.KZ}&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));

    Drkbox.addCommand({ pattern: 'bneonttp ?(.*)', fromMe: false }, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=${KLang.KZ}&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${MLang.by}` })
    }));
}
