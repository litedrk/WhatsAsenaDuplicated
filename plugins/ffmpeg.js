/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBot = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ffmpeg');
const MLang = Language.getString('messages');

if (Config.WORKTYPE == 'private') {

    DrkBot.addCommand({pattern: 'ffmpeg ?(.*)', fromMe: true, desc: Lang.FF_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,'Need Media and Filter Name!\nℹ️ Ex: ```.ffmpeg fade=in:0:30```\nℹ️ Ex: ```.ffmpeg curves=vintage, fps=fps=25```', MessageType.text);
        if (message.reply_message.video) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (message.reply_message.video === false && message.reply_message.image) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .save('output.jpg')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else {
            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .audioFilters(`${match[1]}`)
                .save('output.mp3')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
    }));
}
else if (Config.WORKTYPE == 'public') {

    DrkBot.addCommand({pattern: 'ffmpeg ?(.*)', fromMe: false, desc: Lang.FF_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,'Need Media and Filter Name!\nℹ️ Ex: ```.ffmpeg fade=in:0:30```\nℹ️ Ex: ```.ffmpeg curves=vintage, fps=fps=25```', MessageType.text);
        if (message.reply_message.video) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (message.reply_message.video === false && message.reply_message.image) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .save('output.jpg')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else {
            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .audioFilters(`${match[1]}`)
                .save('output.mp3')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
    }));
// duplicado ===========================
    DrkBot.addCommand({pattern: 'ffmpeg ?(.*)', fromMe: true, desc: Lang.FF_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,'Need Media and Filter Name!\nℹ️ Ex: ```.ffmpeg fade=in:0:30```\nℹ️ Ex: ```.ffmpeg curves=vintage, fps=fps=25```', MessageType.text);
        if (message.reply_message.video) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .format('mp4')
                .save('output.mp4')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg, caption: `${MLang.by}`});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else if (message.reply_message.video === false && message.reply_message.image) {

            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .videoFilters(`${match[1]}`)
                .save('output.jpg')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}`});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
        else {
            var downloading = await message.client.sendMessage(message.jid,Lang.FF_PROC,MessageType.text);
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });

            ffmpeg(location)
                .audioFilters(`${match[1]}`)
                .save('output.mp3')
                .on('end', async () => {
                    await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});
                });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
        }
    }));
// fin duplicado =============================
}