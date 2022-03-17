global.DeveloperMode = 'false' //true Or false
global.linkGC = ['']
global.web = ['https://']
global.pemilikasli = ['https://wa.me/+6282287750102']
global.nomortopup = ['082287750102']
global.ban = ['*Anda Telah Diban*']
global.qris = ['']
global.wm = ['© 𝙷𝚊𝚗-𝙿𝚒𝚗']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6282287750102': { // put your number here
    name: 'Alpin-XD',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6282287750102': { // put your number here
    name: 'Alpin-XD',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false // if true this number will send if user use command /owner or /creator
  },
  '6282287750102': {
    name: 'Owner',
    isReport: true, // if true this number will send if user use command /report or /join
  },
  '6281319859673': {
    isReport: true
  },
  '6281319859673': {} // ignore if you don't want anything, like name dll
}
global.mods = ['6285705034965', '6281388985270', '6289691596342'] // Want some help?
global.prems = ['6282287750102','601164215501','60166408295','601161197507','601156232697','601172962735','60182387590','60109211153','6281391552752','60182387590']
global.APIs = { // API Prefix
  // name: 'https://website'
  zen: 'https://zenzapi.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  dapuhy: 'https://dapuhy-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  zeks: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'http://zekais-api.herokuapp.com': 'zekais',
  'https://melcanz.com': '38pgaHEl',
  'https://zenzapi.xyz': '72525650a586',
  'https://api.xteam.xyz': 'ea385908272d52b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://dapuhy-api.herokuapp.com': 'Xpwm9UPkblRRDkf',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.neoxr.eu.org': 'yntkts',
}

// Sticker WM
global.packname = '𝙷𝚊𝚗-𝙿𝚒𝚗 By Lord Alpin🗿'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

global.multiplier = 999 // Semakin Tinggi Level Semakin Juga Naiknya

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
