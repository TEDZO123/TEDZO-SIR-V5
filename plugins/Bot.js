const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ ALPHA π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π²οΈ   *α΄α΄‘Ι΄α΄Κ* - α΄sΚα΄sα΄Κ

π²οΈ   *Κα΄Ι΄Ι’α΄α΄Ι’α΄* - Ι΄α΄α΄α΄.α΄s

π²οΈ   *α΄α΄α΄α΄* - α΄α΄α΄α΄ α΄Ι΄Ι΄α΄α΄ ΙͺΚΚα΄


       π’ *πππππππ ππππππ* π’

π *α΄α΄α΄α΄’α΄sα΄Κ* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *α΄sΚα΄sα΄Κ* π
β» *Co Owner*

π *Κα΄Κα΄Ιͺα΄* π
β» *Admin Manger*

β¬€ sα΄α΄ΚΚα΄α΄  α΄α΄Κα΄Ι΄Ι΄α΄ α΄ΚΚ ΙͺΙ΄ α΄ΚΚπ

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

βΉ π° *Κα΄Κα΄Ιͺα΄-sα΄Κ* βΉ
βΉ π° *α΄α΄α΄α΄’α΄-sα΄Κ*βΉ
βΉ π° *α΄ΚΚα΄α΄ Ι΄α΄α΄Ι΄ α΄Κα΄Ι΄Ι΄α΄*    βΉ
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π°`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ ALPHA π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π²οΈ   *α΄α΄‘Ι΄α΄Κ* - α΄sΚα΄sα΄Κ

π²οΈ   *Κα΄Ι΄Ι’α΄α΄Ι’α΄* - Ι΄α΄α΄α΄.α΄s

π²οΈ   *α΄α΄α΄α΄* - α΄α΄α΄α΄ α΄Ι΄Ι΄α΄α΄ ΙͺΚΚα΄


       π’ *πππππππ ππππππ* π’

π *α΄α΄α΄α΄’α΄sα΄Κ* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *α΄sΚα΄sα΄Κ* π
β» *Co Owner*

π *Κα΄Κα΄Ιͺα΄* π
β» *Admin Manger*

β¬€ sα΄α΄ΚΚα΄α΄  α΄α΄Κα΄Ι΄Ι΄α΄ α΄ΚΚ ΙͺΙ΄ α΄ΚΚπ

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

βΉ π° *Κα΄Κα΄Ιͺα΄-sα΄Κ* βΉ
βΉ π° *α΄α΄α΄α΄’α΄-sα΄Κ*βΉ
βΉ π° *α΄ΚΚα΄α΄ Ι΄α΄α΄Ι΄ α΄Κα΄Ι΄Ι΄α΄*    βΉ
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π°`})

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ ALPHA π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π²οΈ   *α΄α΄‘Ι΄α΄Κ* - α΄sΚα΄sα΄Κ

π²οΈ   *Κα΄Ι΄Ι’α΄α΄Ι’α΄* - Ι΄α΄α΄α΄.α΄s

π²οΈ   *α΄α΄α΄α΄* - α΄α΄α΄α΄ α΄Ι΄Ι΄α΄α΄ ΙͺΚΚα΄


       π’ *πππππππ ππππππ* π’

π *α΄α΄α΄α΄’α΄sα΄Κ* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *α΄sΚα΄sα΄Κ* π
β» *πππππ*

π *Κα΄Κα΄Ιͺα΄* π
β» *πππππ*

β¬€ sα΄α΄ΚΚα΄α΄  α΄α΄Κα΄Ι΄Ι΄α΄ α΄ΚΚ ΙͺΙ΄ α΄ΚΚπ

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

βΉ π° *Κα΄Κα΄Ιͺα΄-sα΄Κ* βΉ
βΉ π° *α΄α΄α΄α΄’α΄-sα΄Κ*βΉ
βΉ π° *α΄ΚΚα΄α΄ Ι΄α΄α΄Ι΄ α΄Κα΄Ι΄Ι΄α΄*    βΉ
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π°`})
   
    }));
}
