let handler = async (m, { conn }) => {
    if (global.DATABASE.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `Kamu sedang tidak menembak siapapun!`, m)
    if (global.DATABASE.data.users[global.DATABASE.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `Kamu telah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {
      mentionedJid: [global.DATABASE.data.users[m.sender].pasangan]
    }})
    conn.reply(m.chat, `Kamu sudah mengikhlaskan @${global.DATABASE.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {
      mentionedJid: [global.DATABASE.data.users[m.sender].pasangan]
    }})
    global.DATABASE.data.users[m.sender].pasangan = ""
  }
  handler.help = ['ikhlasin']
  handler.tags = ['jadian']
  handler.command = /^(ikhlasin|ikhlas)$/i
  handler.group = true
  handler.fail = null
  module.exports = handler