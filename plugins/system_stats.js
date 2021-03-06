

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '๐ I AM FINE ๐'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '๐ฅบ I  AM SAD ๐ฅ'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "โฅ๏ธ๐ซ HOW ARE YOU ๐โฅ๏ธ",
    footerText: 'BY โ๐ก๏ธ ALPHA ๐ก๏ธโ  โท',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: " ๐ฎ Hay All I'm Alive now ๐ฎ\n\n๐งฟ My name : โ๐ก๏ธ ALPHA ๐ก๏ธโ \n\n๐งฟ Developer: Achiya\n\n๐ฒ๏ธThank You For Using โ๐ก๏ธ ALPHA ๐ก๏ธโ "})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '๐ I AM FINE ๐'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '๐ฅบ I  AM SAD ๐ฅ'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "โฅ๏ธ๐ซ HOW ARE YOU ๐โฅ๏ธ",
    footerText: 'BY โ๐ก๏ธ ALPHA ๐ก๏ธโ  โท',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*โ๐ก๏ธ ALPHA ๐ก๏ธโ *' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*โ๐ก๏ธ ALPHA ๐ก๏ธโ *\n\n` + 
                '```Installed version :```\n' +
                ' V 4.0.0 Public'+
                `\n\n๐ Check github for bot: https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '๐ I AM FINE ๐'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '๐ฅบ I  AM SAD ๐ฅ'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "โฅ๏ธ๐ซ HOW ARE YOU ๐โฅ๏ธ",
    footerText: 'BY โ๐ก๏ธ ALPHA ๐ก๏ธโ  โท',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "๐ฎ Hay All I'm Alive now ๐ฎ\n\n๐งฟ My name : โ๐ก๏ธ ALPHA ๐ก๏ธโ \n\n๐งฟ Developer: Achiya\n\n๐ฒ๏ธThank You For Using โ๐ก๏ธ ALPHA ๐ก๏ธโ โฑ"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '๐ I AM FINE ๐'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: '๐ฅบ I  AM SAD ๐ฅ'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "โฅ๏ธ๐ซ HOW ARE YOU ๐โฅ๏ธ",
    footerText: 'BY โ๐ก๏ธ ALPHA ๐ก๏ธโ  โท',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*โ๐ก๏ธ ALPHA ๐ก๏ธโ *' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*โ๐ก๏ธ ALPHA ๐ก๏ธโ *\n\n` + 
                '```Installed version :```\n' +
                ' V 4.0.0 - Public'+
                `\n\n๐ Check github for bot:  https://github.com/Dark-Knight-Hiruwa/T-REX`
           , MessageType.text);
            
        }));
}
