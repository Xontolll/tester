const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^nabung/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('Kamu Belum Mempuyai Atm !')
  if (user.bank > user.fullatm) return m.reply('Uang Dibankmu Sudah Penuh!')
  if (count > user.fullatm - user.bank) return m.reply('Uangnya Ga Muat Dibank')
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `Sukses menabung sebesar ${count} Money 💹`, m)
  } else conn.reply(m.chat, `[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`, m)
}
handler.help = ['nabung <jumlah>']
handler.tags = ['rpg']
handler.command = /^nabung([0-9]+)|nabung|nabungall$/i

export default handler