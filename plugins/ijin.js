// By RC047 :V

let handler = async(m, { conn, text }) => {
    let name = global.DATABASE.data.users[m.sender].name
    if (!text) throw 'Silahkan masukkan request'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*「 IJIN 」*\nDari: ${name}\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6289625556161@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️ Terima kasih telah minta izin ke Owner-Bot.\nSilahkan tunggun informasi selanjutnya')
}
handler.help = ['izin'].map(v => v + ' <apa dan link grup>')
handler.tags = ['info']
handler.command = /^(izin|ijin)$/i

module.exports = handler
