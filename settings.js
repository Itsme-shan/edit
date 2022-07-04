const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'D62TzBfB',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = false 

//language
//Available in indonesia & english
//You can request others language 
global.language = english  //change indonesia to english if you don't understand the language used by the bot


// Other
global.botname = "SHANZ-BOT" //namabot kalian
global.ownername= "么° 🄼 SHANZ 🥀 | ❤️" //nama kalian
global.myweb ="https://youtube.com/channel/UCX9GuKbYYWJ80O3Kymkn3Uw" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCX9GuKbYYWJ80O3Kymkn3Uw" //bebas asal jan hapus
global.github = "https://github.com/Itsme-shan" //bebas
global.email = "malinduhirushan12345@gmail.com" //bebas
global.region = "Sri Lanka" //bebas
global.timezone = 'Asia/colombo' //  timezone wib
global.owner = ["94725292890","94725292890"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "94725292890" // nomor wa kalian
global.ownernomerr = "+94725292890" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay

global.packname = '© MR-SHANZ' //sticker wm ubah
global.author = 'MR SHANZ' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done,',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'This command can only be used when the bot is admin',
    owner: 'This Feature Is Only For Owner!',
    group: 'This command can only be used in groups !',
    private: 'This command can only be used in private !',
	bot: 'Bot Number User Special Features',
    errtoimg: 'Sorry Currently Not Support Gif Sticker !',
    wait: '⏳ Being processed',
	lockCmd: 'Features Not Activated By Owner!',
	example1: 'Welcome @user By Group @subject Dont forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
