const {cmd , commands} = require('../command')
const fg = require ( 'api-dylux' )
const yts = require ( 'yt-search' ) 


cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("Please give me yt url")
  const search = await yts(q)
  const data = search.videos[0];
  const url = data.url
  let desc = ` 
🎶 HANSAMAL-MD YT SONG DOWNLOADER 🎶

titile: ${data.titile}
description: ${data.description}
time: ${data.timestamps}
ago: ${data.ago}
views: ${data.views}


MADE BY IMALKA-HANSAMAL❤️
  `
await conn.sendmassage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});
                    
//download audio 

let down = await fb.yta(url)
let downloadUrl = down.dl_url

//send audio massage    
await conn.sendmassage(from,{audio: {url :downloadUrl},mimetype:"audio/mp3"},{quoted:mek})





}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

 
    
    
    
