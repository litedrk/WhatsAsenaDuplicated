/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('simi');

if (Config.WORKTYPE == 'private') {
  
	DrkBox.addCommand({pattern: 'simi ?(.*)', fromMe: true, desc: Lang.DESC}, async (message, match) => {
		if (match[1] === 'xx') return await message.reply(Lang.err_type);
		const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=es&cf=true`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
	  	if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '🤖' + ' ```' + json.messages[0].response + '```' , MessageType.text,{quoted: message.data});
	  } catch {
	  		return await message.client.sendMessage(message.jid, Lang.iErr, MessageType.text);
	  	}
	 });
}
else if (Config.WORKTYPE == 'public') {

	DrkBox.addCommand({pattern: 'simi ?(.*)', fromMe: false, desc: Lang.DESC}, async (message, match) => {
		if (match[1] === 'xx') return await message.reply(Lang.err_type);
		const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=es&cf=true`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
	  	if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '🤖' + ' ```' + json.messages[0].response + '```' , MessageType.text,{quoted: message.data});
	  } catch {
	  		return await message.client.sendMessage(message.jid, Lang.iErr, MessageType.text);
	  	}
	 });
}
