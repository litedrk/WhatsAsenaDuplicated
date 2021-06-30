/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const { infoMessage, errorMessage } = require('../helpers');
const axios = require('axios');
const cn = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('exchange');

//- json keys
const up = require('./data/settings.json');
const exchange = up.exchangeRate;

if (cn.WORKTYPE == 'private') {

	DrkBox.addCommand({pattern: 'cambio ?(.*)', fromMe: true, desc: Lang.DESC}, (async (message, match) => {
		if (match[1] === '') return await message.sendMessage(infoMessage(Lang.need))

		var teskA, teskB, amount;
		if (match[1].includes(',')) {
			var split = match[1].split(',')
			teskA = split[0]
			teskB = split[1]
			amount = split[2]
		}
		else {
			await message.sendMessage(errorMessage(Lang.iErr))
		}

		await axios.get(`https://v6.exchangerate-api.com/v6/${exchange}/pair/${teskA}/${teskB}/${amount}`).then(async (response) => {
			const {conversion_rate, conversion_result} = response.data
			const msg = `*RESULTADO*\n\n*Precio ${teskA}:* ${conversion_rate} ${teskB}\n*${teskB}:* ${conversion_result}`
			await message.sendMessage(msg)
		})
	}));
}

else if (cn.WORKTYPE == 'public') {

	DrkBox.addCommand({pattern: 'cambio ?(.*)', fromMe: false, desc: Lang.DESC}, (async (message, match) => {
		if (match[1] === '') return await message.sendMessage(infoMessage(Lang.need))

		var teskA, teskB, amount;
		if (match[1].includes(',')) {
			var split = match[1].split(',')
			teskA = split[0]
			teskB = split[1]
			amount = split[2]
		}
		else {
			await message.sendMessage(errorMessage(Lang.iErr))
		}

		await axios.get(`https://v6.exchangerate-api.com/v6/${exchange}/pair/${teskA}/${teskB}/${amount}`).then(async (response) => {
			const {conversion_rate, conversion_result} = response.data
			const msg = `*RESULTADO*\n\n*Precio ${teskA}:* ${conversion_rate} ${teskB}\n*${teskB}:* ${conversion_result}`
			await message.sendMessage(msg)
		})
	}));
}
