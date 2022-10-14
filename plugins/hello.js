import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/little-girl-sayingtalking-hello-sound-effectcute-sound-effectsadorable.opus')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCZdN9W17lJ5yGM_SKvB-McA",
    mediaType: 2,
    description: "https://youtube.com/channel/UCZdN9W17lJ5yGM_SKvB-McA", 
    title: 'Rᴇᴠ-Bᴏᴛ -ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ-',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.customPrefix = /^(hallo|hello|alo|allo)$/i
handler.command = new RegExp

export default handler