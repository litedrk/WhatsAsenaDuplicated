/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const axios = require('axios');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');

const H_DESC = "Menú de descarga de imagenes anime."
const Ierr = "¡Parece que hay un error!"
const aniN = "¡waifu o neko!"

const Language = require('../language');
const MLang = Language.getString('messages');

if (Config.WORKTYPE == 'private') {

	DrkBox.addCommand({pattern: 'infoanime', fromMe: true, desc: H_DESC}, (async (message, match) => {
		await message.sendMessage('🔞 *TODO ANIME* 🔞\n\n➡️ /sfw\n\n➡️ /nsfw');
	}));

	DrkBox.addCommand({pattern: 'calendar', fromMe: true}, (async (message, match) => {
		var image = await axios.get ('https://raw.githubusercontent.com/BotPrivateDrk/WhatsAsenaDuplicated/master/media/gif/calender.jpg', {responseType: 'arraybuffer'})
		await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}` })
	}));
	
	DrkBox.addCommand({pattern: "sfw ?(.*)", fromMe: true}, (async (message, match) => {
		if (match[1] === "") {
			try{
				await message.sendMessage(infoMessage(aniN))
			}catch (err) {
				await message.reply(`Error:\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "waifu") {
			try{
				await axios.get(`https://api.waifu.pics/sfw/waifu`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "neko") {
			try{
				await axios.get(`https://api.waifu.pics/sfw/neko`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
    	}
	}));
	
	DrkBox.addCommand({pattern: "nsfw ?(.*)", fromMe: true, desc: H_DESC}, (async (message, match) => {
		if (match[1] === "") {
			try{
				await message.sendMessage(infoMessage(aniN))
			}catch (err) {
				await message.reply(`Error:\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "waifu") {
			try{
				await axios.get(`https://api.waifu.pics/nsfw/waifu`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "neko") {
			try{
				await axios.get(`https://api.waifu.pics/nsfw/neko`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
		}
	}));
}

else if (Config.WORKTYPE == 'public') {
	
DrkBox.addCommand({pattern: 'infoanime', fromMe: false, desc: H_DESC}, (async (message, match) => {
		await message.sendMessage('🔞 *TODO ANIME* 🔞\n\n➡️ /sfw\n\n➡️ /nsfw');
	}));

	DrkBox.addCommand({pattern: 'calendar', fromMe: false}, (async (message, match) => {
		var image = await axios.get ('https://raw.githubusercontent.com/BotPrivateDrk/WhatsAsenaDuplicated/master/media/gif/calender.jpg', {responseType: 'arraybuffer'})
		await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `${MLang.by}` })
	}));
	
	DrkBox.addCommand({pattern: "sfw ?(.*)", fromMe: false}, (async (message, match) => {
		if (match[1] === "") {
			try{
				await message.sendMessage(infoMessage(aniN))
			}catch (err) {
				await message.reply(`Error:\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "waifu") {
			try{
				await axios.get(`https://api.waifu.pics/sfw/waifu`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "neko") {
			try{
				await axios.get(`https://api.waifu.pics/sfw/neko`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
    	}
	}));
	
	DrkBox.addCommand({pattern: "nsfw ?(.*)", fromMe: false, desc: H_DESC}, (async (message, match) => {
		if (match[1] === "") {
			try{
				await message.sendMessage(infoMessage(aniN))
			}catch (err) {
				await message.reply(`Error:\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "waifu") {
			try{
				await axios.get(`https://api.waifu.pics/nsfw/waifu`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
		}
		else if (match[1] === "neko") {
			try{
				await axios.get(`https://api.waifu.pics/nsfw/neko`).then(async (response) => {
					const {url} = response.data
					const amin = await axios.get(url, { responseType: 'arraybuffer' })
					await message.sendMessage(Buffer.from(amin.data), MessageType.image, { caption: `${MLang.by}` })
				});
			}catch (err) {
				await message.reply(`*Error:*\n${Ierr}`, MessageType.text)
			 }
		}
	}));
}
