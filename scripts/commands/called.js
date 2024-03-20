module.exports.config = {
  name: "called",
  version: "1.0.5",
  permission: 0,
  prefix: true,
  credits: "Imran",
  description: "𝘿𝙤𝙣'𝙩 𝙨𝙖𝙮 𝙗𝙖𝙙𝙬𝙤𝙧𝙙𝙨 𝙥𝙡𝙚𝙖𝙨𝙚",
  category: "Utility",
  usage: "add [word]",
  cooldowns: 3,
};

module.exports.handleReply = async function({ api, args, event, handleReply, Users }) {
try {
if (event.senderID == api.getCurrentUserID()) return;
var name = (await Users.getData(event.senderID)).name;
var s = [];
var l = [];
const fs = require('fs-extra');
const { join } = require('path');
const axios = require('axios');
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length || 20;
if (event.attachments.length != 0) {
for (var p of event.attachments) {
var result = '';
for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
if (p.type == 'photo') {
var e = 'jpg';
}
if (p.type == 'video') {
var e = 'mp4';
}
if (p.type == 'audio') {
var e = 'mp3';
}
if (p.type == 'animated_image') {
var e = 'gif';
}
var o = join(__dirname, 'cache', `${result}.${e}`);
let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
fs.writeFileSync(o, Buffer.from(m, "utf-8"));
s.push(o);
l.push(fs.createReadStream(o));
}
};
switch (handleReply.type) {

case "reply": {
var ls = require("moment-timezone").tz("Asia/Dhaka").format("hh:mm:ss (D/MM/YYYY) (dddd)");
var idad = global.config.ADMINBOT;
var ex = (await Users.getNameUser(handleReply.author));
if (s.length == 0) {
for (let ad of idad) {
api.sendMessage({
body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[🗣️] → 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺
: ${name}\n[👤] → 𝗚𝗼 𝘁𝗼 𝗔𝗱𝗺𝗶𝗻: ${ex.toUpperCase()}\n[💌] → 𝗔𝘁 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${handleReply.body.toUpperCase()}\n[💬] → 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${event.body || "𝗡𝗼 𝗠𝗲𝘀𝘀𝗮𝗴𝗲"}\n[⏳] → 𝗧𝗶𝗺𝗲: ${ls}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 𝗿𝗲𝗮𝗰𝘁`, mentions: [{
id: event.senderID,
tag: name
}]
}, ad, (e, info) => global.client.handleReply.push({
name: this.config.name,
messageID: info.messageID,
messID: event.messageID,
author: event.senderID,
id: event.threadID,
body: event.body,
type: "calladmin"
}));
}
}
else {
var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("hh:mm:ss D/MM/YYYY");
for (let ad of idad) {
api.sendMessage({
body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[🗣️] → 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺: ${name}\n[👤] → 𝗔𝗱𝗺𝗶𝗻: ${ex.toUpperCase()}\n[📌] → 𝗔𝘁 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${handleReply.body.toUpperCase()}\n[💬] → 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${event.body || "𝗡𝗼 𝗠𝗲𝘀𝘀𝗮𝗴𝗲"}\n[⏰] → 𝗧𝗶𝗺𝗲: ${ls}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 𝗿𝗲𝗮𝗰𝘁`, attachment: l, mentions: [{
id: event.senderID,
tag: name
}]
}, ad, (e, info) => global.client.handleReply.push({
name: this.config.name,
messageID: info.messageID,
messID: event.messageID,
author: event.senderID,
id: event.threadID,
body: event.body,
type: "calladmin"
}));
for (var b of s) {
fs.unlinkSync(b);
}
}
}
break;
}
case "calladmin": {
var ls = require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("hh:mm:ss D/MM/YYYY");
if (s.length == 0) {
api.sendMessage({ body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[👤] → 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻: ${name}\n[📌] → 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${event.body || "𝗡𝗼 𝗠𝗲𝘀𝘀𝗮𝗴𝗲"}\n[⏳] → 𝗧𝗶𝗺𝗲: ${ls}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗻 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, info) => global.client.handleReply.push({
name: this.config.name,
author: event.senderID,
body: event.body,
messageID: info.messageID,
type: "reply"
}), handleReply.messID);
var s = global.config.ADMINBOT;
for (let o of s) {
var user = await Users.getNameUser(handleReply.author);
api.sendMessage({body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[👤] → 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻: ${name}\n[📌] → 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${event.body || "𝗡𝗼 𝗠𝗲𝘀𝘀𝗮𝗴𝗲"}\n[⏳] → 𝗧𝗶𝗺𝗲: ${ls}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗻 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲`,
mentions: [{
tag: user,
id: handleReply.author
}]
},o)
}
}
else {
api.sendMessage({ body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[👤] → 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻: ${name}\n[📌] → 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${event.body || "𝗡𝗼 𝗠𝗲𝘀𝘀𝗮𝗴𝗲"}\n[⏳] → 𝗧𝗶𝗺𝗲: ${ls}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗻 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲`, attachment: l, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, info) => global.client.handleReply.push({
name: this.config.name,
author: event.senderID,
messageID: info.messageID,
body: event.body,
type: "reply"
}), handleReply.messID);
for (var b of s) {
fs.unlinkSync(b);
}
var s = global.config.ADMINBOT;
for (let o of s) {
var user = await Users.getNameUser(handleReply.author);
api.sendMessage({body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[👤] → 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗳𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻
: ${name}\n[🎀] → 𝗖𝗼𝗺𝗲: ${user}\n[📌] → 𝗔𝘁 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${handleReply.body.toUpperCase() || "Tệp"}\n[💬] → 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${event.body || "𝗙𝗶𝗹𝗲 𝗼𝗻𝗹𝘆"}\n[⌛] → 𝗧𝗶𝗺𝗲: ${ls}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗻 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲`, attachment: l,
mentions: [{
tag: user,
id: handleReply.author
}]
},o)
}
}
}
}
}
catch (ex) {
console.log(ex);
}
};

module.exports.run = async function({ api, event, Threads, args, Users }) {
try {
var s = [];
var l = [];
const fs = require('fs-extra');
const { join } = require('path');
const axios = require('axios');
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length || 20;
if (event.messageReply) {
if (event.messageReply.attachments.length != 0) {
for (var p of event.messageReply.attachments) {
var result = '';
for (var i = 0; i < charactersLength; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
if (p.type == 'photo') {
var e = 'jpg';
}
if (p.type == 'video') {
var e = 'mp4';
}
if (p.type == 'audio') {
var e = 'mp3';
}
if (p.type == 'animated_image') {
var e = 'gif';
}
var o = join(__dirname, 'cache', `${result}.${e}`);
let m = (await axios.get(encodeURI(p.url), { responseType: "arraybuffer" })).data;
fs.writeFileSync(o, Buffer.from(m, "utf-8"));
s.push(o);
l.push(fs.createReadStream(o));
}
}
}
if (!args[0] && event.messageReply.attachments.length == 0)
return api.sendMessage(
"Bạn chưa nhập nội dung cần báo cáo",
event.threadID,
event.messageID
);

var name = (await Users.getData(event.senderID)).name;
var idbox = event.threadID;

var datathread = (await Threads.getData(event.threadID)).threadInfo;
var namethread = datathread.threadName;

const moment = require("moment-timezone");
var gio = moment.tz("Asia/Dhaka").format("hh:mm:ss (D/MM/YYYY)  (dddd)");
var soad = global.config.ADMINBOT.length;
api.sendMessage(
`[🍒] → 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘀𝗲𝗻𝗱 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 𝗮𝗱𝗺𝗶𝗻\n[⏰] → 𝗧𝗶𝗺𝗲: ${gio}\n[🌐] → 𝐔𝐫𝐥 𝐩𝐫𝐨𝐟𝐢𝐥𝐞: fb.com/${event.senderID}`,
event.threadID,
() => {
var idad = global.config.ADMINBOT;
if (s.length == 0) {
for (let ad of idad) {
api.sendMessage({ body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[👤] → 𝗥𝗲𝗽𝗼𝗿𝘁 𝗳𝗿𝗼𝗺: ${name}\n[🏡] → 𝗚𝗿𝗼𝘂𝗽: ${namethread}\n[🆔] → 𝗚𝗿𝗼𝘂𝗽 𝗜𝗱: ${idbox}\n[💬] → 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${args.join(" ")}\n[⏳] → 𝗧𝗶𝗺𝗲: ${gio}\n[🌐] → 𝐔𝐫𝐥 𝐩𝐫𝐨𝐟𝐢𝐥𝐞: fb.com/${event.senderID}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗻 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲`, mentions: [{ id: event.senderID, tag: name }] },
ad, (error, info) =>
global.client.handleReply.push({
name: this.config.name,
messageID: info.messageID,
body: event.body,
author: event.senderID,
messID: event.messageID,
id: idbox,
type: "calladmin"
})
);
}
}
else {
for (let ad of idad) {
api.sendMessage({
body: `⛔ ==== [ 𝗖𝗔𝗟𝗟𝗔𝗗 ] ==== ⛔\n━━━━━━━━━━━━━━━━━━━\n[👤] → 𝗥𝗲𝗽𝗼𝗿𝘁 𝗳𝗿𝗼𝗺: ${name}\n[🏡] → 𝗚𝗿𝗼𝘂𝗽: ${namethread}\n[🆔] → 𝗚𝗿𝗼𝘂𝗽 𝗜𝗱: ${idbox}\n[💬] → 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: ${args.join(" ")}\n[⏳] → 𝗧𝗶𝗺𝗲: ${gio}\n[🌐] → 𝐔𝐫𝐥 𝐩𝐫𝐨𝐟𝐢𝐥𝐞: fb.com/${event.senderID}\n━━━━━━━━━━━━━━━━━━━\n[👉] → 𝗥𝗲𝗽𝗹𝗮𝘆 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗻 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲`, attachment: l, mentions: [{ id: event.senderID, tag: name }]
},
ad, (error, info) =>
global.client.handleReply.push({
name: this.config.name,
messageID: info.messageID,
body: event.body,
author: event.senderID,
messID: event.messageID,
id: idbox,
type: "calladmin"
})
);
}
for (var b of s) {
fs.unlinkSync(b);
}
}
}
, event.messageID);
}
catch (ex) {
console.log(ex);
}
};
