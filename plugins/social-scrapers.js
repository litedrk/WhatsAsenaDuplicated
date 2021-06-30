/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('instagram');
const TLang = Language.getString('tiktok');
const KLang = Language.getString('keys');
const MLang = Language.getString('messages');


if (Config.WORKTYPE == 'private') {

    DrkBox.addCommand({ pattern: 'insta ?(.*)', fromMe: true, desc: Lang.DESC}, async (message, match) => {

        const userName = match[1]
        if (userName === '') return await message.sendMessage(errorMessage(Lang.need))

        await message.sendMessage(infoMessage(Lang.loading))

        await axios.get(`https://api.zeks.xyz/igstalk?apikey=${KLang.KZ}&username=${userName}`).then(async (response) => {
            const { username, fullname, follower, following, profile_pic } = response.data
            const instascrap = await axios.get(profile_pic, { responseType: 'arraybuffer' })
            const msg = `*Nombre* ${fullname}\n*Usuario* ${username}\n*Seguidores* ${follower}\n*Siguiendo* ${following}`
            await message.sendMessage(Buffer.from(instascrap.data), MessageType.image, { caption: msg })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Lang.iErr))
        })
    });

    /*
    DrkBox.addCommand({ pattern: 'dtktk ?(.*)', fromMe: true, desc: TLang.DESC}, async (message, match) => {

        const videoLink = match[1]
        if (videoLink === '') return await message.sendMessage(errorMessage(TLang.need))

        await message.sendMessage(infoMessage(TLang.down))

        await axios.get(`https://api.xteam.xyz/dl/tiktok?url=${videoLink}?lang=id-ID&is_copy_url=1&is_from_webapp=v1&APIKEY=${xteamkey}`).then(async (response) => {
            const {server_1 } = response.data
            const tktkscrap = await axios.get(server_1, { responseType: 'arraybuffer' })
            await message.sendMessage(Buffer.from(tktkscrap.data), MessageType.video, { caption: `${MLang.by}` })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(TLang.iErr))
        })
    });
    */
}
else if (Config.WORKTYPE == 'public') {

    DrkBox.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: Lang.DESC}, async (message, match) => {

        const userName = match[1]
        if (userName === '') return await message.sendMessage(errorMessage(Lang.need))

        await message.sendMessage(infoMessage(Lang.loading))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {
            const {name, username, followers, following, profile_pic, is_verified } = response.data
            const instascrap = await axios.get(profile_pic, { responseType: 'arraybuffer' })
            const msg = `*Nombre* ${name} \n*Usuario* ${username} \n*Seguidores* ${followers} \n*Siguiendo* ${following} \n*Verificado* ${is_verified}`
            await message.sendMessage(Buffer.from(instascrap.data), MessageType.image, { caption: msg })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Lang.iErr))
        })
    });

    /*
    DrkBox.addCommand({ pattern: 'dtktk ?(.*)', fromMe: false, desc: TLang.DESC}, async (message, match) => {

        const videoLink = match[1]
        if (videoLink === '') return await message.sendMessage(errorMessage(TLang.need))

        await message.sendMessage(infoMessage(TLang.down))

        await axios.get(`https://api.xteam.xyz/dl/tiktok?url=${videoLink}?lang=id-ID&is_copy_url=1&is_from_webapp=v1&APIKEY=${xteamkey}`).then(async (response) => {
            const {server_1 } = response.data
            const tktkscrap = await axios.get(server_1, { responseType: 'arraybuffer' })
            await message.sendMessage(Buffer.from(tktkscrap.data), MessageType.video, { caption: `${MLang.by}` })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(TLang.iErr))
        })
    });
    */
}