/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
TomorrowlandBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs');

//============================== YOUTUBE ========================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' );
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//============================== LYRICS =========================================
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics");
//===============================================================================


var expSong = ''
var expVid = ''
var searchSong = ''
var searchVid = ''
var downSong = ''
var downVid = ''
var iErr = ''
var NEED = ''
var SLY = ''
var AUT = ''
var BUL = ''
var ARAT = ''
var NEED_WORDS = ''
var GETTING_VIDEOS = ''
var mp4toaudioreply = ''
var mp4toaudioresp = ''

if (Config.LANG == 'ES') {
    expSong = '*Por favor escribe una canción.*\n*Ejemplo:* ```/Your Love - ATB Topic```'
    expVid = '*Por favor escribe una dirección de video de YouTube.*\n*Ejemplo:* ```/video https://www.youtube.com/watch?v=9hbu9toStfc```'
    searchSong = '*Tomorrowland BOT está buscando tu canción*'
    searchVid = '*Tomorrowland BOT está buscando tu video*'
    downSong = 'Canción encontrada'
    downVid = 'Video encontrado'
    iErr = '¡No pude encontrar tu búsqueda!'
    NEED = '*Escribe el nombre de alguna canción*'
    ARAT = 'Canción buscada:'
    BUL = 'Canción encontrada:'
    AUT = 'Propietario de la canción:'
    SLY = 'LETRA:'
    NEED_WORDS = 'Que deseas buscar?'
    GETTING_VIDEOS = '*Tomorrowland BOT está buscando tus videos*'
    mp4toaudioreply = '*Tienes que responder a un video*'
    mp4toaudioresp = '```Covirtiendo video en audio...```'
}

if (Config.WORKTYPE == 'private') {

	// Bot Tomorrownald
    DrkBox.addCommand({ pattern: '2song ?(.*)', fromMe: true}, async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expSong, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, searchSong, MessageType.text);
        await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=xMYCfgmBHH7dR6S87KJet1zUXa1&q=${match[1]}`).then(async (response) => {
            const {link} = response.data.result
            const msg = `${link}`
            reply = await message.client.sendMessage(message.jid, downSong, MessageType.text);
            await message.client.sendMessage(message.jid, Buffer.from(msg.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio});
        }).catch(async (err) => {
            await message.sendMessage(message.jid, iErr, MessageType.text)
          })
    });

    DrkBox.addCommand({pattern: '3song ?(.*)', fromMe: true}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expSong, MessageType.text);
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid, iErr, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, searchSong, MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid, downSong, MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    DrkBox.addCommand({ pattern: '2video ?(.*)', fromMe: true}, async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expVid, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, searchVid, MessageType.text);
        await axios.get(`https://api.zeks.xyz/api/ytmp4/2?apikey=xMYCfgmBHH7dR6S87KJet1zUXa1&url=${match[1]}`).then(async (response) => {
            const {link} = response.data.result
            const msg = `${link}`
            reply = await message.client.sendMessage(message.jid, downVid, MessageType.text);
            await message.client.sendMessage(message.jid, Buffer.from(msg.arrayBuffer), MessageType.video, {mimetype: Mimetype.mp4});
        }).catch(async (err) => {
            await message.sendMessage(message.jid, iErr, MessageType.text)
          })
    });

    DrkBox.addCommand({pattern: '3video ?(.*)', fromMe: true}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expVid, MessageType.text);
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid, iErr, MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid, searchVid, MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid, downVid, MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    DrkBox.addCommand({pattern: '2lyric ?(.*)', fromMe: true}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,  NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});
        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${ ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${ BUL}* ` + '```' + tit + '```' + `\n*${ AUT}* ` + '```' + son + '```' + `\n\n*${ SLY}*\n` + aut });
    }));

    DrkBox.addCommand({pattern: '2yt ?(.*)', fromMe: true}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORDS, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, GETTING_VIDEOS, MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid, iErr, MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid, mesaj, MessageType.text);
    }));

    DrkBox.addCommand({pattern: '2mp4audio', fromMe: true}, (async (message, match) => {
        if (message.reply_message === false) return await message.client.sendMessage(message.jid,  mp4toaudioreply, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid, mp4toaudioresp, MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    // Bot Tomorrownald
    DrkBox.addCommand({ pattern: '2song ?(.*)', fromMe: false}, async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expSong, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, searchSong, MessageType.text);
        await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=xMYCfgmBHH7dR6S87KJet1zUXa1&q=${match[1]}`).then(async (response) => {
            const {link} = response.data.result
            const msg = `${link}`
            reply = await message.client.sendMessage(message.jid, downSong, MessageType.text);
            await message.client.sendMessage(message.jid, Buffer.from(msg.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio});
        }).catch(async (err) => {
            await message.sendMessage(message.jid, iErr, MessageType.text)
          })
    });

    DrkBox.addCommand({pattern: '3song ?(.*)', fromMe: false}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expSong, MessageType.text);
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid, iErr, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, searchSong, MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid, downSong, MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    DrkBox.addCommand({ pattern: '2video ?(.*)', fromMe: false}, async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expVid, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, searchVid, MessageType.text);
        await axios.get(`https://api.zeks.xyz/api/ytmp4/2?apikey=xMYCfgmBHH7dR6S87KJet1zUXa1&url=${match[1]}`).then(async (response) => {
            const {link} = response.data.result
            const msg = `${link}`
            reply = await message.client.sendMessage(message.jid, downVid, MessageType.text);
            await message.client.sendMessage(message.jid, Buffer.from(msg.arrayBuffer), MessageType.video, {mimetype: Mimetype.mp4});
        }).catch(async (err) => {
            await message.sendMessage(message.jid, iErr, MessageType.text)
          })
    });

    DrkBox.addCommand({pattern: '3video ?(.*)', fromMe: false}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, expVid, MessageType.text);
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid, iErr, MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid, searchVid, MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid, downVid, MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    DrkBox.addCommand({pattern: '2lyric ?(.*)', fromMe: false}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,  NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});
        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${ ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${ BUL}* ` + '```' + tit + '```' + `\n*${ AUT}* ` + '```' + son + '```' + `\n\n*${ SLY}*\n` + aut });
    }));

    DrkBox.addCommand({pattern: '2yt ?(.*)', fromMe: false}, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, NEED_WORDS, MessageType.text);
        var reply = await message.client.sendMessage(message.jid, GETTING_VIDEOS, MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid, iErr, MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid, mesaj, MessageType.text);
    }));

    DrkBox.addCommand({pattern: '2mp4audio', fromMe: false}, (async (message, match) => {
        if (message.reply_message === false) return await message.client.sendMessage(message.jid,  mp4toaudioreply, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid, mp4toaudioresp, MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
