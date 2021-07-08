/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('apk');


if (Config.WORKTYPE == 'private') {

   DrkBox.addCommand({pattern: 'apkmod', fromMe: true, desc: Lang.DESC}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     /nova\n\n┠⊷️ ↘️ CM Launcher:\n     /cml\n\n┠⊷️ ↘️ Apex Launcher:\n     /apex\n\n\n┠⊷️ ↘️ Kinemaster:\n     /kinemaster\n\n┠⊷️ ↘️ PicsArt Gold:\n     /picsart\n\n┠⊷️ ↘️ Canva Pro:\n     /canva\n\n┠⊷️ ↘️ Ligthrom:\n     /lightr\n\n┠⊷️ ↘️ Photoshop Express:\n     /pshop\n\n┠⊷️ ↘️ Snapseed:\n     /snaps\n\n┠⊷️ ↘️ Retouch:\n     /retouch\n\n\n┠⊷️ ↘️ Vanced Manager:\n     /vanced\n\n┠⊷️ ↘️ Crunchyroll:\n     /crunchy\n\n┠⊷️ ↘️ Freezer Mod:\n     /freez\n\n┠⊷️ ↘️ Deezer Premium:\n     /deezer\n\n┠⊷️ ↘️ RadioBox:\n     /rbox\n\n┠⊷️ ↘️ Mx Player Pro:\n     /mxpro\n\n┠⊷️ ↘️ Power AMP:\n     /amp\n\n┠⊷️ ↘️ JetAudio:\n     /jetau\n\n\n┠⊷️ ↘️ ExpressVpn:\n     /xpress\n\n┠⊷️ ↘️ Hospot Shield:\n     /hshield\n\n┠⊷️ ↘️ TurboVpn:\n     /avguard\n\n┠⊷️ ↘️ File Manager:\n     /flmanager\n\n┠⊷️ ↘️ CallRecorder:\n     /callr\n\n┠⊷️ ↘️ FingScanner:\n     /fing\n\n┠⊷️ ↘️ Shazam Encore:\n     /shazam\n\n┠⊷️ ↘️ QR Scanner Pro:\n     /qrcode\n\n┠⊷️ ↘️ Screen Recorder:\n     /srecorder\n\n┠⊷️ ↘️ TikTok Mod:\n     /tiktok\n\n┠⊷️ ↘️ Photomath:\n     /pmath\n\n┠⊷️ ↘️ WhatsApp Plus:\n     /waplus\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   DrkBox.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   DrkBox.addCommand({pattern: 'nova', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n⚠️ Versión Premium, todo desbloqueado.\n📌 bit.ly/drknova');
   }));

   DrkBox.addCommand({pattern: 'cml', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n😞 No disponible en este momento.');
   }));

   DrkBox.addCommand({pattern: 'apex', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n📌 bit.ly/drkapex');
   }));

   DrkBox.addCommand({pattern: 'kinemaster', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\nPotente editor de vídeo para usar con smartphones y tablets.\n⚠️ Tienda desbloqueada.\n😞 No disponible en este momento.');
   }));

   DrkBox.addCommand({pattern: 'picsart', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\nPicsArt es un editor de fotografía, collages, dibujo y red social.​\n⚠️ Funciones Premium desbloqueadas.\n📌 bit.ly/drkpicsart');
   }));

   DrkBox.addCommand({pattern: 'canva', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\nCrea diseños increíbles.\nCon las herramientas de diseño y las plantillas prediseñadas de Canva, es súper fácil crear, imprimir y compartir.\n⚠️ Tienda desbloqueada.\n📌 bit.ly/canvapro');
   }));

   DrkBox.addCommand({pattern: 'lightr', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\nAplicación de cámara y editor de fotos potente que potencia su fotografía y le ayuda a capturar y editar imágenes impresionantes.\n📌 bit.ly/drklightr');
   }));

   DrkBox.addCommand({pattern: 'pshop', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\nAplicación móvil gratuita para realizar ediciones rápidas y potentes fácilmente en fotografías, así como para crear collages.\n📌 bit.ly/drkphotoshop');
   }));

   DrkBox.addCommand({pattern: 'snaps', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\nAplicación para editar fotografías que permite a los usuarios realzar fotos y aplicar filtros digitales.\n📌 bit.ly/drksnaps');
   }));

   DrkBox.addCommand({pattern: 'retouch', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\nPremiado editor de imágenes que te permite eliminar contenidos no deseados u objetos de cualquier foto.\n📌 bit.ly/drkretouch');
   }));

   DrkBox.addCommand({pattern: 'vanced', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nInstala MOD de YouTube Premium y YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   DrkBox.addCommand({pattern: 'crunchy', fromMe: true}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   DrkBox.addCommand({pattern: 'freez', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nApp para descargar musica desde Spotify y Deezer\n📌 bit.ly/drkfreezer');
   }));

   DrkBox.addCommand({pattern: 'deezer', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\nAplicación para Android de música en streaming.\n⚠️ Versión Premium, descarga tu música.\n📌 bit.ly/drkdeezer');
   }));

   DrkBox.addCommand({pattern: 'rbox', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\nAplicación para escuchar toda la radio de forma online.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkradiobox');
   }));

   DrkBox.addCommand({pattern: 'mxpro', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\nReproductor de Video.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   DrkBox.addCommand({pattern: 'amp', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkampplayer');
   }));

   DrkBox.addCommand({pattern: 'jetau', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkjetau');
   }));

   DrkBox.addCommand({pattern: 'xpress', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Pruebas Ilimitadas desbloqueadas y nueva interfas.\n📌 bit.ly/drkXpress');
   }));

   DrkBox.addCommand({pattern: 'hshield', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Todos los servidores desbloqueados.\n📌 bit.ly/drkHShield');
   }));

   DrkBox.addCommand({pattern: 'avguard', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\nAplicación para cambiar de ubicación en Internet.\n📌 bit.ly/drkguard');
   }));

   DrkBox.addCommand({pattern: 'flmanager', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\nExplorador de archivos para Android.\n📌 bit.ly/drkesfile');
   }));

   DrkBox.addCommand({pattern: 'callr', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\nAplicación para grabar todas tus llamadas telefónicas.\n Version Premium.\n📌 bit.ly/drkcallr');
   }));

   DrkBox.addCommand({pattern: 'fing', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\nEscanea tu red y averigua quienes estan conectados.\n Version Premium sin anuncios.\n📌 bit.ly/drkfing');
   }));

   DrkBox.addCommand({pattern: 'shazam', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\nIdentifica cualquier canción en segundos.\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkshaz');
   }));

   DrkBox.addCommand({pattern: 'qrcode', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\nCrea códigos QR\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkqrscanner');
   }));

   DrkBox.addCommand({pattern: 'srecorder', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\nGrabador de pantalla liviano sin anuncios.\n📌 bit.ly/drkgrabr');
   }));

   DrkBox.addCommand({pattern: 'tiktok', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\nMira miles de videos populares.\n⚠️ Con esta versión podrás descargar los vídeos sin marca de agua.\n📌 bit.ly/drktiktok');
   }));

   DrkBox.addCommand({pattern: 'pmath', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\nResuelve cualquier problema matematico en cuestión de segundos.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkphotomath');
   }));

   DrkBox.addCommand({pattern: 'waplus', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nMOD de WhatsApp con el cual podrás no solo descargar estados si no mantener tu privacidad y muchas funciones mas.\n📌 bit.ly/drkWaPlus');
   }));
}

else if (Config.WORKTYPE == 'public') {

   DrkBox.addCommand({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     /nova\n\n┠⊷️ ↘️ CM Launcher:\n     /cml\n\n┠⊷️ ↘️ Apex Launcher:\n     /apex\n\n\n┠⊷️ ↘️ Kinemaster:\n     /kinemaster\n\n┠⊷️ ↘️ PicsArt Gold:\n     /picsart\n\n┠⊷️ ↘️ Canva Pro:\n     /canva\n\n┠⊷️ ↘️ Ligthrom:\n     /lightr\n\n┠⊷️ ↘️ Photoshop Express:\n     /pshop\n\n┠⊷️ ↘️ Snapseed:\n     /snaps\n\n┠⊷️ ↘️ Retouch:\n     /retouch\n\n\n┠⊷️ ↘️ Vanced Manager:\n     /vanced\n\n┠⊷️ ↘️ Crunchyroll:\n     /crunchy\n\n┠⊷️ ↘️ Freezer Mod:\n     /freez\n\n┠⊷️ ↘️ Deezer Premium:\n     /deezer\n\n┠⊷️ ↘️ RadioBox:\n     /rbox\n\n┠⊷️ ↘️ Mx Player Pro:\n     /mxpro\n\n┠⊷️ ↘️ Power AMP:\n     /amp\n\n┠⊷️ ↘️ JetAudio:\n     /jetau\n\n\n┠⊷️ ↘️ ExpressVpn:\n     /xpress\n\n┠⊷️ ↘️ Hospot Shield:\n     /hshield\n\n┠⊷️ ↘️ TurboVpn:\n     /avguard\n\n┠⊷️ ↘️ File Manager:\n     /flmanager\n\n┠⊷️ ↘️ CallRecorder:\n     /callr\n\n┠⊷️ ↘️ FingScanner:\n     /fing\n\n┠⊷️ ↘️ Shazam Encore:\n     /shazam\n\n┠⊷️ ↘️ QR Scanner Pro:\n     /qrcode\n\n┠⊷️ ↘️ Screen Recorder:\n     /srecorder\n\n┠⊷️ ↘️ TikTok Mod:\n     /tiktok\n\n┠⊷️ ↘️ Photomath:\n     /pmath\n\n┠⊷️ ↘️ WhatsApp Plus:\n     /waplus\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));
    
   DrkBox.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   DrkBox.addCommand({pattern: 'nova', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n⚠️ Versión Premium, todo desbloqueado.\n📌 bit.ly/drknova');
   }));

   DrkBox.addCommand({pattern: 'cml', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n😞 No disponible en este momento.');
   }));

   DrkBox.addCommand({pattern: 'apex', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n📌 bit.ly/drkapex');
   }));

   DrkBox.addCommand({pattern: 'kinemaster', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\nPotente editor de vídeo para usar con smartphones y tablets.\n⚠️ Tienda desbloqueada.\n😞 No disponible en este momento.');
   }));

   DrkBox.addCommand({pattern: 'picsart', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\nPicsArt es un editor de fotografía, collages, dibujo y red social.​\n⚠️ Funciones Premium desbloqueadas.\n📌 bit.ly/drkpicsart');
   }));

   DrkBox.addCommand({pattern: 'canva', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\nCrea diseños increíbles.\nCon las herramientas de diseño y las plantillas prediseñadas de Canva, es súper fácil crear, imprimir y compartir.\n⚠️ Tienda desbloqueada.\n📌 bit.ly/canvapro');
   }));

   DrkBox.addCommand({pattern: 'lightr', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\nAplicación de cámara y editor de fotos potente que potencia su fotografía y le ayuda a capturar y editar imágenes impresionantes.\n📌 bit.ly/drklightr');
   }));

   DrkBox.addCommand({pattern: 'pshop', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\nAplicación móvil gratuita para realizar ediciones rápidas y potentes fácilmente en fotografías, así como para crear collages.\n📌 bit.ly/drkphotoshop');
   }));

   DrkBox.addCommand({pattern: 'snaps', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\nAplicación para editar fotografías que permite a los usuarios realzar fotos y aplicar filtros digitales.\n📌 bit.ly/drksnaps');
   }));

   DrkBox.addCommand({pattern: 'retouch', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\nPremiado editor de imágenes que te permite eliminar contenidos no deseados u objetos de cualquier foto.\n📌 bit.ly/drkretouch');
   }));

   DrkBox.addCommand({pattern: 'vanced', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nInstala MOD de YouTube Premium y YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   DrkBox.addCommand({pattern: 'crunchy', fromMe: false}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   DrkBox.addCommand({pattern: 'freez', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nApp para descargar musica desde Spotify y Deezer\n📌 bit.ly/drkfreezer');
   }));

   DrkBox.addCommand({pattern: 'deezer', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\nAplicación para Android de música en streaming.\n⚠️ Versión Premium, descarga tu música.\n📌 bit.ly/drkdeezer');
   }));

   DrkBox.addCommand({pattern: 'rbox', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\nAplicación para escuchar toda la radio de forma online.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkradiobox');
   }));

   DrkBox.addCommand({pattern: 'mxpro', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\nReproductor de Video.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   DrkBox.addCommand({pattern: 'amp', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkampplayer');
   }));

   DrkBox.addCommand({pattern: 'jetau', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkjetau');
   }));

   DrkBox.addCommand({pattern: 'xpress', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Pruebas Ilimitadas desbloqueadas y nueva interfas.\n📌 bit.ly/drkXpress');
   }));

   DrkBox.addCommand({pattern: 'hshield', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Todos los servidores desbloqueados.\n📌 bit.ly/drkHShield');
   }));

   DrkBox.addCommand({pattern: 'avguard', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\nAplicación para cambiar de ubicación en Internet.\n📌 bit.ly/drkguard');
   }));

   DrkBox.addCommand({pattern: 'flmanager', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\nExplorador de archivos para Android.\n📌 bit.ly/drkesfile');
   }));

   DrkBox.addCommand({pattern: 'callr', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\nAplicación para grabar todas tus llamadas telefónicas.\n Version Premium.\n📌 bit.ly/drkcallr');
   }));

   DrkBox.addCommand({pattern: 'fing', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\nEscanea tu red y averigua quienes estan conectados.\n Version Premium sin anuncios.\n📌 bit.ly/drkfing');
   }));

   DrkBox.addCommand({pattern: 'shazam', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\nIdentifica cualquier canción en segundos.\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkshaz');
   }));

   DrkBox.addCommand({pattern: 'qrcode', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\nCrea códigos QR\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkqrscanner');
   }));

   DrkBox.addCommand({pattern: 'srecorder', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\nGrabador de pantalla liviano sin anuncios.\n📌 bit.ly/drkgrabr');
   }));

   DrkBox.addCommand({pattern: 'tiktok', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\nMira miles de videos populares.\n⚠️ Con esta versión podrás descargar los vídeos sin marca de agua.\n📌 bit.ly/drktiktok');
   }));

   DrkBox.addCommand({pattern: 'pmath', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\nResuelve cualquier problema matematico en cuestión de segundos.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkphotomath');
   }));

   DrkBox.addCommand({pattern: 'waplus', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nMOD de WhatsApp con el cual podrás no solo descargar estados si no mantener tu privacidad y muchas funciones mas.\n📌 bit.ly/drkWaPlus');
   }));

// duplicado modo "true" =================================================

   DrkBox.addCommand({pattern: 'nova', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n⚠️ Versión Premium, todo desbloqueado.\n📌 bit.ly/drknova');
   }));

   DrkBox.addCommand({pattern: 'cml', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n😞 No disponible en este momento.');
   }));

   DrkBox.addCommand({pattern: 'apex', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\nLanzador con el cual podras personalizar la apariencia de tu dispositivo android.\n📌 bit.ly/drkapex');
   }));

   DrkBox.addCommand({pattern: 'kinemaster', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\nPotente editor de vídeo para usar con smartphones y tablets.\n⚠️ Tienda desbloqueada.\n😞 No disponible en este momento.');
   }));

   DrkBox.addCommand({pattern: 'picsart', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\nPicsArt es un editor de fotografía, collages, dibujo y red social.​\n⚠️ Funciones Premium desbloqueadas.\n📌 bit.ly/drkpicsart');
   }));

   DrkBox.addCommand({pattern: 'canva', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\nCrea diseños increíbles.\nCon las herramientas de diseño y las plantillas prediseñadas de Canva, es súper fácil crear, imprimir y compartir.\n⚠️ Tienda desbloqueada.\n📌 bit.ly/canvapro');
   }));

   DrkBox.addCommand({pattern: 'lightr', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\nAplicación de cámara y editor de fotos potente que potencia su fotografía y le ayuda a capturar y editar imágenes impresionantes.\n📌 bit.ly/drklightr');
   }));

   DrkBox.addCommand({pattern: 'pshop', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\nAplicación móvil gratuita para realizar ediciones rápidas y potentes fácilmente en fotografías, así como para crear collages.\n📌 bit.ly/drkphotoshop');
   }));

   DrkBox.addCommand({pattern: 'snaps', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\nAplicación para editar fotografías que permite a los usuarios realzar fotos y aplicar filtros digitales.\n📌 bit.ly/drksnaps');
   }));

   DrkBox.addCommand({pattern: 'retouch', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\nPremiado editor de imágenes que te permite eliminar contenidos no deseados u objetos de cualquier foto.\n📌 bit.ly/drkretouch');
   }));

   DrkBox.addCommand({pattern: 'vanced', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nInstala MOD de YouTube Premium y YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   DrkBox.addCommand({pattern: 'crunchy', fromMe: true}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   DrkBox.addCommand({pattern: 'freez', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nApp para descargar musica desde Spotify y Deezer\n📌 bit.ly/drkfreezer');
   }));

   DrkBox.addCommand({pattern: 'deezer', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\nAplicación para Android de música en streaming.\n⚠️ Versión Premium, descarga tu música.\n📌 bit.ly/drkdeezer');
   }));

   DrkBox.addCommand({pattern: 'rbox', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\nAplicación para escuchar toda la radio de forma online.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkradiobox');
   }));

   DrkBox.addCommand({pattern: 'mxpro', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\nReproductor de Video.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   DrkBox.addCommand({pattern: 'amp', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkampplayer');
   }));

   DrkBox.addCommand({pattern: 'jetau', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\nReproductor de música con muchas opciones.\n⚠️ Version Premium.\n📌 bit.ly/drkjetau');
   }));

   DrkBox.addCommand({pattern: 'xpress', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Pruebas Ilimitadas desbloqueadas y nueva interfas.\n📌 bit.ly/drkXpress');
   }));

   DrkBox.addCommand({pattern: 'hshield', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\nAplicación para cambiar de ubicación en Internet con muchos servidores para conectarse.\n⚠️ Todos los servidores desbloqueados.\n📌 bit.ly/drkHShield');
   }));

   DrkBox.addCommand({pattern: 'avguard', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\nAplicación para cambiar de ubicación en Internet.\n📌 bit.ly/drkguard');
   }));

   DrkBox.addCommand({pattern: 'flmanager', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\nExplorador de archivos para Android.\n📌 bit.ly/drkesfile');
   }));

   DrkBox.addCommand({pattern: 'callr', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\nAplicación para grabar todas tus llamadas telefónicas.\n Version Premium.\n📌 bit.ly/drkcallr');
   }));

   DrkBox.addCommand({pattern: 'fing', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\nEscanea tu red y averigua quienes estan conectados.\n Version Premium sin anuncios.\n📌 bit.ly/drkfing');
   }));

   DrkBox.addCommand({pattern: 'shazam', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\nIdentifica cualquier canción en segundos.\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkshaz');
   }));

   DrkBox.addCommand({pattern: 'qrcode', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\nCrea códigos QR\n⚠️ Version Premium sin anuncios.\n📌 bit.ly/drkqrscanner');
   }));

   DrkBox.addCommand({pattern: 'srecorder', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\nGrabador de pantalla liviano sin anuncios.\n📌 bit.ly/drkgrabr');
   }));

   DrkBox.addCommand({pattern: 'tiktok', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\nMira miles de videos populares.\n⚠️ Con esta versión podrás descargar los vídeos sin marca de agua.\n📌 bit.ly/drktiktok');
   }));

   DrkBox.addCommand({pattern: 'pmath', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\nResuelve cualquier problema matematico en cuestión de segundos.\n⚠️ Versión sin anuncios.\n📌 bit.ly/drkphotomath');
   }));

   DrkBox.addCommand({pattern: 'waplus', fromMe: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nMOD de WhatsApp con el cual podrás no solo descargar estados si no mantener tu privacidad y muchas funciones mas.\n📌 bit.ly/drkWaPlus');
   }));

// fin duplicado =================================================
}