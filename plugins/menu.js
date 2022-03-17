let fs = require('fs');
let path = require('path');
let levelling = require('../lib/levelling');
let fetch = require('node-fetch')
let { performance } = require('perf_hooks')
let osu = require('node-os-utils')
const moment = require('moment-timezone')
let handler = async (m, { conn, usedPrefix: _p }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  let NotDetect = 'Not Detect'
        let old = performance.now()
        let cpu = osu.cpu
        let cpuCore = cpu.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let OS = osu.os.platform()
        let cpuModel = cpu.model()
        let cpuPer
        let p1 = cpu.usage().then(cpuPercentage => {
            cpuPer = cpuPercentage
        }).catch(() => { 
            cpuPer = NotDetect
        })
let tags = {
  main: 'Main',
  rpg: 'Epic RPG',
  game: 'Game',
  xp: 'Exp & Limit',
  sticker: 'Sticker',
  kerang: 'Kerang Ajaib',
  quotes: 'Quotes',
  admin: 'Admin',
  group: 'Group',
  premium: 'Premium',
  internet: 'Internet',
  anonymous: 'Anonymous Chat',
  nulis: 'MagerNulis & Logo',
  downloader: 'Downloader',
  tools: 'Tools',
  fun: 'Fun',
  database: 'Database',
  vote: 'Voting',
  absen: 'Absen',
  quran: "Al Qur'an",
  jadibot: 'Jadi Bot',
  owner: 'Owner',
  host: 'Host',
  info: 'Info',
  '': 'No Category',
  maker: 'Maker',
  about: 'About',
  random: 'Random',
  exp: 'Register',
  Hentai: 'Hentai',
  Anime: 'Anime',
  audio: 'Pengubah Suara',
  kristen: 'Kristen',
  jadian: 'Jadian'
}
const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



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
const defaultMenu = {
  before: `
┌─❖「 *INFO BOT* 」
│ Nama Bot: *%me*
│ Versi: %version
│ Pengguna: %totalreg
│ Grup: *${groups.length}*
│ Telah Daftar: %rtotalreg
└────────────❖

┌─❖「 *INFO USER* 」
│ Hai ${ucapanWaktu}
│ Nama User: %name
│ Rank: %role
│ Limit : %limit
│ Exp: %totalexp Exp
│ Level: %level
└────────────❖

┌─❖「 *STATUS BOT* 」
│ Uptime: *%uptime (%muptime)*
│ OS: *${OS}*
│ Memory Used : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
│ Mode: *${global.opts['self'] ? 'Private' : 'Publik'}*
│ Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│ Prefix:『> %p <』
│ Web: *${global.web}*
└────────────❖

┌─❖「 *WAKTU* 」
│ Hari: *%week %weton*
│ Tanggal: *%date*
│ Tanggal Islam: *%dateIslamic*
│ Waktu: *%time*
└────────────❖

┌─❖「 *CHAT* 」
│ Owner: *${global.pemilikasli}*
│ Group: *${global.linkGC}*
└────────────❖
%readmore`.trimStart(),
  header: '╭─〔 %category 〕',
  body: '│➪ %cmd %islimit %isPremium',
  footer: '╰─────────────❒\n',
  after: `
*%npmname %version*
${'```%npmdesc```'}
`,
};
  try {
    await conn.fakeReply(m.chat, '*[❗] 𝗟 𝗢 𝗔 𝗗 𝗜 𝗡 𝗚．．．*', '0@s.whatsapp.net', `*HAN-PIN*`, 'status@broadcast', {contextInfo: { mentionedJid }})
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch((_) => '{}'));
    let { exp, limit, level, role } = global.DATABASE.data.users[m.sender];
    let name = conn.getName(m.sender);
    let d = new Date(new Date() + 3600000);
    let locale = 'id';
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    let _uptime = process.uptime() * 1000;
    let _muptime;
    if (process.send) {
      process.send('uptime');
      _muptime =
        (await new Promise((resolve) => {
          process.once('message', resolve);
          setTimeout(resolve, 1000);
        })) * 1000;
    }
    let muptime = clockString(_muptime);
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.DATABASE._data.users).length;
    let rtotalreg = Object.values(global.DATABASE._data.users).filter((user) => user.registered == true).length;
    let help = Object.values(global.plugins)
      .filter((plugin) => !plugin.disabled)
      .map((plugin) => {
        return {
          help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
          tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
          prefix: 'customPrefix' in plugin,
          limit: plugin.limit,
          premium: plugin.premium,
          enabled: !plugin.disabled,
        };
      });
    for (let plugin of help) if (plugin && 'tags' in plugin) for (let tag of plugin.tags) if (!(tag in tags) && tag) tags[tag] = tag;
    conn.menu = conn.menu ? conn.menu : {};
    let before = conn.menu.before || defaultMenu.before;
    let header = conn.menu.header || defaultMenu.header;
    let body = conn.menu.body || defaultMenu.body;
    let footer = conn.menu.footer || defaultMenu.footer;
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after;
    let _text = [
      before,
      ...Object.keys(tags).map((tag) => {
        return (
          header.replace(/%category/g, tags[tag]) +
          '\n' +
          [
            ...help
              .filter((menu) => menu.tags && menu.tags.includes(tag) && menu.help)
              .map((menu) => {
                return menu.help
                  .map((help) => {
                    return body
                      .replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                      .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                      .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                      .trim();
                  })
                  .join('\n');
              }),
            footer,
          ].join('\n')
        );
      }),
      after,
    ].join('\n');
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : '';
    let replace = {
      '%': '%',
      p: _p,
      uptime,
      muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      totalexp: exp,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      weton,
      week,
      date,
      dateIslamic,
      time,
      totalreg,
      rtotalreg,
      role,
      level,
      battery,
      limit,
      readmore: readMore,
    };
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]);
    let pp = await conn.getProfilePicture(conn.user.jid).catch((_) => path.join(__dirname, '../src/avatar_contact.png'));
    conn.send2ButtonImg(m.chat, await (await fetch(pp)).buffer(), text, '© 𝙷𝚊𝚗-𝙿𝚒𝚗', '☰ INFO', '/info', '👤 OWNER', '.owner', m)
  } catch (e) {
    console.log(e)
    throw '_*MOHON MAAF SEDANG ERROR*_'
    }
};
handler.help = ['menu', 'help', 'menubot'];
handler.tags = ['main'];
handler.command = /^(menu|help|menubot)$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;
handler.exp = 3;

module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
