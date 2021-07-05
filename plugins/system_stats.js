/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - DarkBox1522
*/

const DrkBox = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {
    DrkBox.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/drklogo.mp4"), 
            MessageType.video, 
            { mimetype: Mimetype.mp4, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n/menu para mostrar comandos del BOT'}
        )
    }));
    
    DrkBox.addCommand({pattern: 'menu', fromMe: true}, (async (message, match) => {
        await message.sendMessage(`
┏━━━━━━━━━━━━━━━━━━━\n
┃〘 *COMANDOS* 〙\n
┗━━━━━━━━━━━━━━━━━━━\n
┠⊷️ 🛑 /alive\n
  Verifica si funciona el bot.\n
\n
┠⊷️ ➡️ /apkmod\n
  Menú de aplicaciones premium.\n
\n
┠⊷️ ➡️ /deepai\n
  Una potente Inteligencia Artificial con varias funciones.\n
\n
┠⊷️ ➡️ /infoanime\n
  Menú para descargar imagenes anime y H.\n
\n
┠⊷️ ➡️ /infocovid\n
  Obtén información acerca de la situación del Covid19 de varios países.\n
\n
┠⊷️ ➡️ /infotblend\n
  Herramienta de mezcla para edición de videos.\n
\n/*
┠⊷️ 🚫 /infottp\n
  Menú de opciones de edición de texto.\n
\n*/
┠⊷️ ➡️ /removebg\n
  Elimina el fondo de una fotografía que envíes.\n
\n
┠⊷️ ➡️ /price (token)\n
  Obten precio de cualquier cryptomoneda.\n
  🗒️ Ejemplo: /price btc\n
\n
┠⊷️ ➡️ /cambio\n
  Intercambia cualquier divisa.\n
  🗒️ Ejemplo: /cambio usd,cop,10\n
\n
┠⊷️ ➡️ /song (nombre de la canción)\n
  Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n
\n
┠⊷️ ➡️ /mp4audio\n
  Convierte un video en un audio.\n
\n
┠⊷️ ➡️ /imagesticker\n
  Convierte un sticker en una foto.\n
\n
┠⊷️ ➡️ /ocr\n
  Analiza una imagen si tiene texto y lo escribe. (beta)\n
\n
┠⊷️ ➡️ /trt (Responde a un texto)\n
  Traduce el texto del mensaje al idioma que quieras (Ej.: /trt es en).\n
\n
┠⊷️ ➡️ /tts\n
  Convierte el texto en un audio con la voz del Traductor de Google (Ej.: /tts hola).\n
\n
┠⊷️ ➡️ /yt (enlace)\n
  Busca videos en YouTube.\n
\n
┠⊷️ ➡️ /video\n
  Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n
\n
┠⊷️ ➡️ /insta (Usuario)\n
  Busca perfiles de Instagram.\n
\n
┠⊷️ ➡️ /gay\n
  Muestra cantidad de gay de la persona etiquetada o mensaje que respondas.\n
\n
┠⊷️ ➡️ /less\n
  Muestra cantidad de leabiana de la persona etiquetada o mensaje que respondas.\n
\n/*
┠⊷️ 🚫 /igphoto (enlace)\n
  Descarga imagenes de Instagram.\n
\n
┠⊷️ 🚫 /igvideo (enlace)\n
  Descarga videos de Instagram.\n
\n
┠⊷️ 🚫 /dtktk (enlace)\nni
  Descarga videos de TikTok sin marca de agua.\n
\n*/
┠⊷️ ➡️ /wiki\n
  Realiza busquedas en Wikipedia.\n
\n
┠⊷️ ➡️ /img\n
  Busca alguna imagen desde Google Pictures (Ej.: /img Bugatti).\n
\n
┠⊷️ ➡️ /ss\n
  Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n
\n
┠⊷️ ➡️ /animesay (Texto)\n
  Escribe el texto dentro de la pancarta sostenida por una chica anime.\n
\n
┠⊷️ ➡️ /changesay (Texto)\n
  Escribe el texto en un póster de Change My Mind.\n
\n
┠⊷️ ➡️ /trumpsay (Texto)\n
  Escribe el texto en un Tweet de Donald Trump.\n
\n
┠⊷️ ➡️ /sticker (Responde una foto)\n
  Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n
\n
┠⊷️ ➡️ /unvoice\n
  Convierte un audio en una nota de voz.\n
\n
┠⊷️ ➡️ /wallpaper\n
  Envía fondos de pantalla de alta resolución, hay muchos.\n
\n
┠⊷️ ➡️ /weather (Ciudad)\n
  Envía el clima de la ciudad dada.\n
\n
┠⊷️ ➡️ /gif (Respondiendo a un video)\n
  Convierte un video en gif, tiene que ser un video corto.\n
\n
┠⊷️ ➡️ /short (enlace)\n
  Acorta cualquier enlace.\n
\n
┠⊷️ ➡️ /lyric (nombre de la canción)\n
  Obtén la letra y los datos de la canción solicitada.\n
\n
┠⊷️ ➡️ /scan (número telefonico)\n
  Busca si el número ingresado está registrado en WhatsApp.\n
  🗒️ Ejemplo: /scan 57301xxxxxxx\n
  ⚠️ El número debe ser ingresado con codigo de pais.\n
\n
┠⊷️ ➡️ /calc\n
  Resuelve problemas de matematica basica.\n
  🗒️ Ejemplo: /calc 9 x 7\n
\n
┠⊷️ ➡️ /simi\n
  *IA* con la cual podras hablar y contarle de tus problemas 🙂\n
  🗒️ Ejemplo: /simi hola, como estas?\n
\n
┠⊷️ ➡️ /meme (responde una foto)\n
  Obten un meme para la foto que respondas.\n
  🗒️ Ejemplo: /meme Hola,a todos\n
  ⚠️ La , separa texto arriba del texto abajo.\n
\n
┠⊷️ ➡️ /logo\n
  Escribe el texto en un *Logo Gamer*.\n
\n
┠⊷️ ➡️ /ip\n
  Busca información sobre cualquier dirección *IP*.\n
\n
┠⊷️ ➡️ /wame (responde o etiqueta)\n
  Obten enlace del número ingresado o mensaje respondido.\n
\n
┠⊷️ ➡️ /donation\n
  Puedes ayudarme de una forma totalmente gratis si eres de Colombia.\n
\n
┠⊷️ ➡️ /share\n
  Compartir enlace del *BOT*.\n
┗━━━━━━━━━━━━━━━━━━━\n
\n
┏━━━━━━━━━━━━━━━━━━━\n
  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n
┗━━━━━━━━━━━━━━━━━━━\n`);
}));
    
    DrkBox.addCommand({pattern: 'upgrade', fromMe: true}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┣━━━━━━━━━━\n┠ NUEVA ACTUALIZACIÓN\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┠⊷️ *Prefix:*  『/』\n┠ CAMBIOS\n┠⊷️ *Update:*\n┠  + fix Languaje\n┠  + fix liric\n┠  + add comands ttp\n┠  + add insta\n┠  + add igvideo\n┠  + add igphoto\n┠  + fix ss\n┠  + fix faceai\n┠  + fix animai\n┠  + fix short\n┗━━━━━━━━━━━━');
    }));

    DrkBox.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {
    DrkBox.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/drklogo.mp4"), 
            MessageType.video, 
            { mimetype: Mimetype.mp4, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n/menu para mostrar comandos del BOT'}
        )
    }));
    
    DrkBox.addCommand({pattern: 'menu', fromMe: false}, (async (message, match) => {
        await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 *COMANDOS* 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ 🛑 /alive\n  Verifica si funciona el bot.\n\n┠⊷️ ➡️ /apkmod\n  Menú de aplicaciones premium.\n\n┠⊷️ ➡️ /deepai\n  Una potente Inteligencia Artificial con varias funciones.\n\n┠⊷️ ➡️ /infocovid\n  Obtén información acerca de la situación del Covid19 de varios países.\n\n┠⊷️ ⛔ /infoanime\n  Menu de comandos *HOT*.\n\n┠⊷️ ➡️ /infotblend\n  Herramienta de mezcla para edición de videos.\n\n┠⊷️ ⛔ /infottp\n  Menú de opciones de edición de texto.\n\n┠⊷️ ➡️ /removebg\n  Elimina el fondo de una fotografía que envíes.\n\n┠⊷️ ➡️ /song (nombre de la canción)\n  Descarga cualquier canción, si el resultado no es el que estás buscando, intenta escribiendo el nombre del autor de la canción.\n\n┠⊷️ ➡️ /mp4audio\n  Convierte un video en un audio.\n\n┠⊷️ ➡️ /imagesticker\n  Convierte un sticker en una foto.\n\n┠⊷️ ➡️ /trt (Responde a un texto)\n  Traduce el texto del mensaje al idioma que quieras (Ej.: /trt es en).\n\n┠⊷️ ➡️ /tts\n  Convierte el texto en un audio con la voz del Traductor de Google (Ej.: /tts hola).\n\n┠⊷️ ➡️ /yt (enlace)\n  Busca videos en YouTube.\n\n┠⊷️ ➡️ /video\n  Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n\n┠⊷️ ➡️ /insta (Usuario)\n  Busca perfiles de Instagram.\n\n┠⊷️ ➡️ /igphoto (enlace)\n  Descarga imagenes de Instagram.\n\n┠⊷️ ➡️ /igvideo (enlace)\n  Descarga videos de Instagram.\n\n┠⊷️ ➡️ /dtktk (enlace)\n  Descarga videos de TikTok sin marca de agua.\n\n┠⊷️ ➡️ /wiki\n  Realiza busquedas en Wikipedia.\n\n┠⊷️ ➡️ /img\n  Busca alguna imagen desde Google Pictures (Ej.: /img Bugatti).\n\n┠⊷️ ➡️ /ss\n  Toma captura de pantalla de el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n\n┠⊷️ ➡️ /animesay (Texto)\n  Escribe el texto dentro de la pancarta sostenida por una chica anime.\n\n┠⊷️ ➡️ /changesay (Texto)\n  Escribe el texto en un póster de Change My Mind.\n\n┠⊷️ ➡️ /trumpsay (Texto)\n  Escribe el texto en un Tweet de Donald Trump.\n\n┠⊷️ ➡️ /sticker (Responde una foto)\n  Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n\n┠⊷️ ➡️ /unvoice\n  Convierte un audio en una nota de voz.\n\n┠⊷️ ➡️ /wallpaper\n  Envía fondos de pantalla de alta resolución, hay muchos.\n\n┠⊷️ ➡️ /weather (Ciudad)\n  Envía el clima de la ciudad dada.\n\n┠⊷️ ➡️ /gif (Respondiendo a un video)\n  Convierte un video en gif, tiene que ser un video corto.\n\n┠⊷️ ➡️ /short (enlace)\n  Acorta cualquier enlace.\n\n┠⊷️ ➡️ /lyric (nombre de la canción)\n  Obtén la letra y los datos de la canción solicitada.\n\n┠⊷️ ➡️ /donation\n  Puedes ayudarme de una forma totalmente gratis si eres de Colombia.\n\n┠⊷️ ➡️ /share\n  Compartir enlace del *BOT*.\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n  *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
    }));
}
