let { MessageType } = require('@adiwajshing/baileys');
const moment = require('moment-timezone')
let fs = require("fs");
let handler = async (m, {usedPrefix}) => {
  const jam = moment.tz('Asia/Jakarta').format('HH')

  let ucapanWaktu = 'Selamat Pagi 🌄'
 
 
 
         if (jam >= '03' && jam <= '10') {
 
         ucapanWaktu = 'Selamat Pagi 🌄'
 
         } else if (jam >= '10' && jam <= '13') {
 
         ucapanWaktu = 'Selamat Siang ☀️'
 
         } else if (jam >= '13' && jam <= '18') {
 
         ucapanWaktu = 'Selamat Sore 🌅'
 
         } else if (jam >= '18' && jam <= '23') {
 
         ucapanWaktu = 'Selamat Malam 🌙'
 
         } else {
 
         ucapanWaktu = 'Selamat Malam 🌙'
 
         }
  const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Order Prem`, 
    orderTitle: `Order Prem`,
    thumbnail: fs.readFileSync("./src/logo.jpg"), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let name = m.fromMe ? conn.user : conn.contacts[m.sender];
  let txt = `*Halo ${name.vnmae || name.notify || name.name || '+' + name.jid.split`@`[0]}*\nSilahkan bayar untuk membeli 1 miliar 💰 = Rp 15.000 💵\nBayar sesuai harga yang tertara di list!!\nPulsa: ${global.nomortopup}`;
    const buttons = [
      { buttonId: `.topup`, buttonText: { displayText: '⬅️ Back' }, type: 1 },
      { buttonId: `.buktitopup 1 miliar 💰 = Rp 15.000 💵`, buttonText: { displayText: '📮 Klik Disini Jika Sudah Bayar' }, type: 1 },
    ];
  
    const buttonMessage = {
      contentText: txt,
      footerText: '© Nekohime',
      buttons: buttons,
      headerType: 1,
    };
    return conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: ftrol });
}
handler.command = /^(p1m)$/i

module.exports = handler
