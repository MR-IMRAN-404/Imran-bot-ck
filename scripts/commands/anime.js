module.exports.config = {
  name: "anime",
  version: "2.0.0",
  permission: 0,
  credits: "Imran",
  description: "",
  prefix: true,
  category: "admin",
  usages: "link",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=1uS78WKt0CNFJseATNFYNQWsoOVAp4stE",
"https://drive.google.com/uc?id=1uYMui-maFMIBhiExyxON1OueZ82MMVu_",
"https://drive.google.com/uc?id=1ub5n0ij8tjDxXB2tZS0uClRJhc6qBzmq",
"https://drive.google.com/uc?id=1ugqANSVykjWAdbBOaO68qt6H-0Sp0kvF",
"https://drive.google.com/uc?id=1uo5XMM1qeQzvevxOizIR_y9BDN2tAdHh",
"https://drive.google.com/uc?id=1uvG0uPiZspuksERXQ-RlrjUIQUj-a0nX",
  "https://drive.google.com/uc?id=1vFC9wz5z4LaFgN4SPUil7leXb3pP0MDK",
  "https://drive.google.com/uc?id=1uBZ9ueuOFq440E-hNHbXekgrPJMOcSZO",
  "https://drive.google.com/uc?id=1vyMFU-qGibpYunzOt-m514u-iJqdkqEt",
  "https://drive.google.com/uc?id=1uwPYa6Dg5w1WhaAu94uc-S6Yly_WQsi7",
  "https://drive.google.com/uc?id=1vUSUmiOZMod_wbIifqfEZl6rvr1ELLul",
  "https://drive.google.com/uc?id=1vHUfROXqRDxh_dPX3OL3S79E6gpXm4WL",
  "https://drive.google.com/uc?id=1wDOE-fGw-yqyd3wJvpBrJ9x10YGt5Okp",
  "https://drive.google.com/uc?id=1vOwnjJLhtZbugH9sGNkk_nbVO5II_puc",
  "https://drive.google.com/uc?id=1vhmfgMuoklJZ71x93T8BBEDk3Fkzx1G_",
  "https://drive.google.com/uc?id=1vPZTpB82QyoEcWhL6GukL2CU_ewGaiDz",
  "https://drive.google.com/uc?id=1vrl3oMOHd_BzVsYIFZEnDwrceULsBdCG",
  "https://drive.google.com/uc?id=1vdQzNj7_wyAq2ch5k9n1ZVlVU5636pdC",
  "https://drive.google.com/uc?id=1vjLYmcrD1YFqMtMuHE6fTObEka-2dCCe",
  "https://drive.google.com/uc?id=1w4gaTsiAXhMth9abT68nFkakSqUqDVkO",
  "https://drive.google.com/uc?id=1vWyI3kEaFUPF8uKOkakTGRSk6l9eaWgC",
  "https://drive.google.com/uc?id=1vraxPOXg8aOjxkf-6yBu8euXj2bNzbBb",
  "https://drive.google.com/uc?id=1vy5Z5vhjXwjtrkoFMjle-1NHIbkODQb7",
  "https://drive.google.com/uc?id=1ux6swhU15Du42hWfLETJL_V-K06D-na2",
"https://drive.google.com/uc?id=103jSStsha5OwzxLVm9mw_gKLsbh5isUo",
"https://drive.google.com/uc?id=10AW-lygskAhyVLF9MATMS1_jzft3fD2W",
"https://drive.google.com/uc?id= 10Fp0bZWb-AAkgrUqFrMAWmS0BT9ByCas",
"https://drive.google.com/uc?id=10LyVlk_a4NCNCm1fQOAvXTT0KZ6SOjs1",
"https://drive.google.com/uc?id=10R5CdE10FQ3l8CCsYLOiWInE8wiDZ_db",
"https://drive.google.com/uc?id=10W4gVYbKkzG2RKnGBYfVrM7QDizJxq6D",
"https://drive.google.com/uc?id=120mUo6RTBslh5m-A_dDPt37CoQmZw95N",
"https://drive.google.com/uc?id=1FvbXsZChBsdesZ3N3VOQRJh-xk-0kduO",
"https://drive.google.com/uc?id=1FzbQ_guPn0bjgZIpHjBU_Vzm5tZ-vzdc",
"https://drive.google.com/uc?id=1G2qU7sbYBCTQeA4-B--Q5NjfXZu4A4if",
"https://drive.google.com/uc?id=1G5DfudQEVCJTXSpWvLYW5a0mu8sRNTsY",
"https://drive.google.com/uc?id=1FxyfJhnY70kwbY4p8TBQ45i7Kv_tiW9X",
"https://drive.google.com/uc?id=1Fv_3DKOPYXREVCd32PhxdHgNU4FdQo3J",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };