let limit = 30
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
  if (!args || !args[0]) return m.reply('Uhm... urlnya mana?')
  let chat = global.DATABASE._data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendButtonLoc(m.chat, thumb, `*「 YTMP4 DOWNLOADER 」*\n
*Judul:* ${title}
*Ukuran:* ${filesizeF}\n
NOTE: *Mohon Sabar Ada Beberapa File Yg Akan Di Upload*
`.trim(), '© Nekohime', '☰ MENU', `.menu`, m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), m, false, {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler