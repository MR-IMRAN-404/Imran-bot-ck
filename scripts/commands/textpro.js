module.exports.config = {
  name: "textpro",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: true,
  category: "admin",
  usages: "link",
  cooldowns: 5,
  dependencies: {
        'image-downloader': '',
    'nayan-server': ''
  }
};
module.exports.run = async function({ api, event, args }) {


  const { messageID, threadID } = event;
  const fs = require("fs");
  const axios = require("axios");
  const request = require("request");

  const prompt = args.join(" ");
  if (!args[0]) return api.sendMessage(`🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 nayan\n\n🔥Total Edit limit 2...`, threadID, messageID);


  const content = args.join(" ");
  const msg = content.split(" ");
  const num = msg[0].trim();
  const name = msg[1].trim();

  const {textpro} = require('nayan-server')


if (num == "1"){ var url = "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"}
if (num == "2"){ var url = "https://textpro.me/create-neon-light-on-brick-wall-online-1062.html"}
if (num == "3"){ var url = "https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html"}
if (num == "4"){ var url = "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"}
if (num == "5"){ var url = "https://textpro.me/create-thunder-text-effect-online-881.html"}
if (num == "6"){ var url = "https://textpro.me/neon-text-effect-online-879.html"}
if (num == "7"){ var url = "https://textpro.me/road-warning-text-effect-878.html"}
if (num == "8"){ var url = "https://textpro.me/bokeh-text-effect-876.html"}
if (num == "8"){ var url = "https://textpro.me/free-advanced-glow-text-effect-873.html"}
if (num == "10"){ var url = "https://textpro.me/horror-blood-text-effect-online-883.html"}
if (num == "11"){ var url = "https://textpro.me/fabric-text-effect-online-964.html"}
if (num == "12"){ var url = "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"}
if (num == "13"){ var url = "https://textpro.me/double-exposure-text-effect-black-white-976.html"}
if (num == "14"){ var url = "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"}
if (num == "15"){ var url = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"}
if (num == "16"){ var url = "https://textpro.me/generate-naruto-logo-style-text-effect-online-1125.html"}
if (num == "17"){ var url = "https://textpro.me/glossy-carbon-text-effect-965.html"}
if (num == "18"){ var url = "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"}
if (num == "19"){ var url = "https://textpro.me/foil-balloon-text-effect-for-birthday-987.html"}
if (num == "20"){ var url = "https://textpro.me/carbon-text-effect-833.html"}
if (num == "21"){ var url = "https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html"}
if (num == "22"){ var url = "https://textpro.me/broken-glass-text-effect-free-online-1023.html"}
if (num == "23"){ var url = "https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html"}
if (num == "24"){ var url = "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"}
if (num == "25"){ var url = "https://textpro.me/sand-writing-text-effect-online-990.html"}
if (num == "26"){ var url = "https://textpro.me/firework-sparkle-text-effect-930.html"}
if (num == "27"){ var url = "https://textpro.me/holographic-3d-text-effect-975.html"}
if (num == "28"){ var url = "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"}
if (num == "29"){ var url = "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"}
if (num == "30"){ var url = "https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html"}
if (num == "31"){ var url = "https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html"}
if (num == "32"){ var url = "https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html"}
if (num == "33"){ var url = "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"}
if (num == "34"){ var url = "https://textpro.me/create-winter-cold-snow-text-effect-online-1100.html"}
if (num == "35"){ var url = "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"}
if (num == "36"){ var url = "https://textpro.me/create-realistic-3d-moss-text-effects-online-1145.html"}
if (num == "37"){ var url = "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"}
if (num == "38"){ var url = "https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html"}
if (num == "39"){ var url = "https://textpro.me/3d-box-text-effect-online-880.html"}
if (num == "40"){ var url = "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"}
if (num == "41"){ var url = "https://textpro.me/create-3d-turquoise-text-style-effects-online-1119.html"}
if (num == "42"){ var url = "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"}
if (num == "43"){ var url = "https://textpro.me/3d-gradient-text-effect-online-free-1002.html"}
if (num == "44"){ var url = "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"} 

 try { 
  let data = await textpro(url, name);
  console.log(data);
  var file = fs.createWriteStream(__dirname + '/cache/textpro.jpg');

  const link = data.url;
  const rqs = request(encodeURI(`${link}`));
   api.setMessageReaction("✅", event.messageID, (err) => {
     }, true);
  rqs.pipe(file);  
  file.on('finish', () => {

    setTimeout(function() {

      return api.sendMessage({
        body: `❐ THIS IS YOUR NAME EDIT ✌️\n\n___________________________________\n\n❐ This Bot Name : ${global.config.BOTNAME} 🤖\n❐ This Bot Owner : Mohammad Imran😘\n❐ Your Input Name : ${name}\n\n___________________________________`,
        attachment: fs.createReadStream(__dirname + '/cache/textpro.jpg')
      }, threadID, messageID)
    }, 5000)
  })
    } catch (err) {
   api.setMessageReaction("❌", event.messageID, (err) => {
  }, true);
    api.sendMessage(`🔰Use ${global.config.PREFIX}${this.config.name} [no.] [text]\n🔰Example:${global.config.PREFIX}${this.config.name} 1 imran\n\n🔥Total Edit limit 2...`, event.threadID, event.messageID);  
   }
};
