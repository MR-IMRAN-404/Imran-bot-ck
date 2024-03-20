module.exports.config = {
  name: "😈",
  version: "2.0.0",
  permission: 2,
  credits: "Imran",
  description: "",
  prefix: true,
  category: "admin",
  usages: "link",
  cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি sexy বানাতে চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Let's go sexy");
setTimeout(() => {a({body: "জান তুমি এতো hot কেন 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "জান তুমি এতো sexy কেন ইমরান তো পাগল হইয়া গেছে 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "জান তোমারে যে দিন পাবো চুম্মাইতে চুম্মাইতে লাল করে ফেলমু💋🥵" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "তুমি যে এতো sexy মনে চায় সারাদিন আদর করি💋🥵🙈 !" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Uffff জান আস্তে 🥵💋" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "তোমারে পাইলে চুসে খেয়ে ফেলতাম💋😋 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "জান তুমি ইমরান বসের কাছে চলে জাও 😋💋" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Ufff জান তোমারে এমন আদর করমু নাহ জান তুমি Ufff🥵" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "তুমি এতো hot এক দম ইমরানের মনের মতো🙈💋" + " " + name, mentions: arraytag})},23000);
setTimeout(() =>{a("ওই Sexy মাইরা Ummmha \n🥰")}, 42000);




  }