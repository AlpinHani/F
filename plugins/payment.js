let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═══ 〘 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 〙
║ ┅ ๑————————————๑
║┊ ⌲ GOPAY: 089625556161
║┊ ⌲ OVO : 089625556161 
║┊ ⌲ DANA : 089625556161
║┊ ⌲ TRI3 : 089625556161
╰═ ┅ ═══════
▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Payment')).buffer(), ext, `ZeusBotz`, 'Nomor Owner', '.owner', 'Sewa Bot', '.sewa', m)

}
handler.help = ['payment']
handler.tags = ['owner']
handler.command = /^(payment)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.wm
