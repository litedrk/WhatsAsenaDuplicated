/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const { errorMessage, infoMessage } = require('../helpers')
const axios = require('axios')
const Config = require('../config');
const fs = require('fs');

//- json keys
const up = JSON.parse(fs.readFileSync('./data/settings.json'));
const melodic = up.Keymelodic;
const made = up.by;

const Language = require('../language')
const Lang = Language.getString('other')


if (Config.WORKTYPE == 'private') {

    DrkBox.addCommand({ pattern: 'ip ?(.*)', fromMe: true, desc: Lang.descIp}, async (message, match) => {
        const userIp = match[1]
        if (userIp === '') return await message.sendMessage(errorMessage(Lang.needIp))
        await message.sendMessage(infoMessage(Lang.search))
        await axios.get(`https://api-melodicxt-2.herokuapp.com/api/ipchecker?ip=${userIp}&apiKey=${melodic}`).then(async (response) => {
            const {ip, country_name, region_code, city, postal, org } = response.data.result.result
            const ipscrap = await axios.get ('https://raw.githubusercontent.com/BotPrivateDrk/WhatsAsenaDuplicated/master/media/gif/ip.png', {responseType: 'arraybuffer'})
            const msg = `*Ip:* ${ip} \n\n*Pais:* ${country_name} \n*Region:* ${region_code} \n*Ciudad:* ${city} \n*Zip Code:* ${postal} \n*Servicio:* ${org}`
            await message.sendMessage(Buffer.from(ipscrap.data), MessageType.image, { caption: msg })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(iErr))
          })
    });

    DrkBox.addCommand({ pattern: 'logo ?(.*)', fromMe: true, desc: Lang.descLogo}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(needLogo);
        var ttinullimage = await axios.get(`http://docs-jojo.herokuapp.com/api/gaming?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${made}` })
    }));
}
else if (Config.WORKTYPE == 'public') {

    DrkBox.addCommand({ pattern: 'ip ?(.*)', fromMe: false, desc: Lang.descIp}, async (message, match) => {
        const userIp = match[1]
        if (userIp === '') return await message.sendMessage(errorMessage(Lang.needIp))
        await message.sendMessage(infoMessage(Lang.search))
        await axios.get(`https://api-melodicxt-2.herokuapp.com/api/ipchecker?ip=${userIp}&apiKey=${melodic}`).then(async (response) => {
            const {ip, country_name, region_code, city, postal, org } = response.data.result.result
            const ipscrap = await axios.get ('https://raw.githubusercontent.com/BotPrivateDrk/WhatsAsenaDuplicated/master/media/gif/ip.png', {responseType: 'arraybuffer'})
            const msg = `*Ip:* ${ip} \n\n*Pais:* ${country_name} \n*Region:* ${region_code} \n*Ciudad:* ${city} \n*Zip Code:* ${postal} \n*Servicio:* ${org}`
            await message.sendMessage(Buffer.from(ipscrap.data), MessageType.image, { caption: msg })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(iErr))
          })
    });

    DrkBox.addCommand({ pattern: 'logo ?(.*)', fromMe: false, desc: Lang.descLogo}, (async (message, match) => {
        if (match[1] === '') return await message.sendMessage(needLogo);
        var ttinullimage = await axios.get(`http://docs-jojo.herokuapp.com/api/gaming?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: `${made}` })
    }));
}

/*
DrkBox.addCommand({ pattern: 'bin ?(.*)', fromMe: true}, async (message, match) => {
        if (match[1] === '') return await message.sendMessage(infoMessage(sBin))
        await axios.get(`https://lookup.binlist.net/${match[1]}`).then(async (response) => {
            const {scheme, type, brand, country.name, country.currency, bank.name} = response.data
            const msg = `*TIPO:*\n${scheme}\n${type}\n${brand}\n\n*PAIS*\n${country.name}\n${country.currency}\n\n*BANCO*${bank.name}`
            await message.sendMessage(msg)
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Ierr))
          })
    });
*/
