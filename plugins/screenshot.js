/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

//- json keys
const up = require('./data/settings.json');
const made = up.by;

if (Config.WORKTYPE == 'private') {

    DrkBox.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.desc_ss}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.need_ss);
        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=PVDPV40-9MKMGHM-GP24N8Y-PTFAC6X&url=${match[1]}&output=image&full_page=true&delay=400`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.png, filename: 'Screenshot'})
    }));
    
    DrkBox.addCommand({pattern: 'faceai', fromMe: true, desc: Lang.fc}, (async (message, match) => {
        var webimage = await axios.get('https://shot.screenshotapi.net/screenshot?token=PVDPV40-9MKMGHM-GP24N8Y-PTFAC6X&url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `${made}`})
        await new Promise(r => setTimeout(r, 500));
        await message.sendMessage('⚠️ Esta persona no existe, fue creada con IA');
    }));

    DrkBox.addCommand({pattern: 'animai', fromMe: true, desc: Lang.ani}, (async (message, match) => {
        var webimage = await axios.get('https://shot.screenshotapi.net/screenshot?token=PVDPV40-9MKMGHM-GP24N8Y-PTFAC6X&url=https://www.thiswaifudoesnotexist.net/&output=image&width=1000&height=1000&retina=true&full_page=false', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `${made}`})
        await new Promise(r => setTimeout(r, 500));
        await message.sendMessage('⚠️ Este anime no existe, fue creado con IA');
    }));
}

else if (Config.WORKTYPE == 'public') {

    DrkBox.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.desc_ss}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(Lang.need_ss);
        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?token=PVDPV40-9MKMGHM-GP24N8Y-PTFAC6X&url=${match[1]}&output=image&full_page=true&delay=400`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.png, filename: 'Screenshot'})
    }));
    
    DrkBox.addCommand({pattern: 'faceai', fromMe: false, desc: Lang.fc}, (async (message, match) => {
        var webimage = await axios.get('https://shot.screenshotapi.net/screenshot?token=PVDPV40-9MKMGHM-GP24N8Y-PTFAC6X&url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `${made}`})
        await new Promise(r => setTimeout(r, 500));
        await message.sendMessage('⚠️ Esta persona no existe, fue creada con IA');
    }));

    DrkBox.addCommand({pattern: 'animai', fromMe: false, desc: Lang.ani}, (async (message, match) => {
        var webimage = await axios.get('https://shot.screenshotapi.net/screenshot?token=PVDPV40-9MKMGHM-GP24N8Y-PTFAC6X&url=https://www.thiswaifudoesnotexist.net/&output=image&width=1000&height=1000&retina=true&full_page=false', { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `${made}`})
        await new Promise(r => setTimeout(r, 500));
        await message.sendMessage('⚠️ Este anime no existe, fue creado con IA');
    }));
}
