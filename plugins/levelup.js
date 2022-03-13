let levelling = require('../lib/levelling')
const canvacord = require('canvacord')

let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.sender
  let discriminator = who.substring(9, 13)
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {
  } finally {
    let user = global.DATABASE.data.users[m.sender]
    let users = Object.entries(global.DATABASE.data.users).map(([key, value]) => {
      return { ...value, jid: key }
    })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
      let rank = await new canvacord.Rank()
        .setRank(usersLevel.indexOf(m.sender) + 1)
        .setAvatar(pp)
        .setLevel(user.level)
        .setCurrentXP(user.exp - min)
        .setRequiredXP(xp)
        .setProgressBar("#f2aa4c", "COLOR")
        .setUsername(conn.getName(who))
        .setDiscriminator(discriminator)
      rank.build()
        .then(async data => {
          await conn.sendButtonImg(m.chat, data, `Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim(), '© ZeusBotz', '☰ MENU', '.menu', m, { thumbnail: data, height: 282, width: 934 })
        })
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let level = global.DATABASE._data.users[m.sender].level;
                        let name = m.fromMe ? conn.user : conn.contacts[m.sender];
                        let role = global.DATABASE.data.users[m.sender].role;
      let rank = await new canvacord.Rank()
        .setRank(usersLevel.indexOf(m.sender) + 1)
        .setAvatar(pp)
        .setLevel(user.level)
        .setCurrentXP(user.exp - min)
        .setRequiredXP(xp)
        .setProgressBar("#f2aa4c", "COLOR")
        .setUsername(conn.getName(who))
        .setDiscriminator(discriminator)
      rank.build()
        .then(async data => {
          await await this.sendButtonImg(m.chat, data, `*「 LEVEL UP 」*\n➸ *Nama :* *${name.vnmae || name.notify || name.name || '+' + name.jid.split`@`[0]}*\n➸ *Xp :* *_${before}_ -> _${user.level}_*\n➸ *Level :* *${level}*🆙\n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`.trim(), '© ZeusBotz', 'Daily', '.claim', m, { thumbnail: data, height: 282, width: 934 })
        })
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
