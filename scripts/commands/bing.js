 module.exports = {
  config: {
    name: "bing",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: true,
    category: "with prefix",
    usages: "bing prompt",
    cooldowns: 10,
},

   languages: {
   "vi": {},
       "en": {
           "missing": 'use : /bing cat'
       }
   },

start: async function({ nayan, events, args, lang}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const prompt = args.join(" ");
    if(!prompt) return nayan.reply(lang('missing'), events.threadID, events.messageID)

  const rndm = ['1U-BNLfCJbd4Kqo2tvmHlFeYjIIOmbbJtu4qJtIlkP8N0fRZSCnXM9UggMtlAonZxHIz4to8HwRH5uo-zgt4BS9dC-5lVsaUdef2lODnaQF_8F60ZGYStqVJobpMCS-cpN2t-bDcTwVw61Kr6iCQiyNKmJxY8u4YSQlNnQKNDYGnC70QA5bmZM4LgR162saWHP-_0BSWihBkmWYiexZo98A','1C47d6qjFFUbERNKlBVCr4Dj4BP67AVnzRnNqHYJBLlTPcO2D_zHcqiKeS07T411-Rvy-S_XMtaXIcUWtyPDNZkKJJ2grC8hyER18EjtNPQUoyodkELpCMcuPQ1-sAsJrYp1sfd0aiZTm_BnUcREY8qeIF8g2TPHjQkdWHJxupDteo8aCHyi8DhsTGrjpjFq0WHkz-5kRWMlfZ7UHbMpXsQ','153jSbExzfFDUu9emh5VR-6JfFbvhom4rb1YCSngwN1pLSl8uTCasmlCBmHFVXNfBhrJ0-d82DC3Kzgo5D587VEZxB2-lguqnG7LJ40ThZFRcZ8o0X9TePDhv8_9IQoWx8g583k_dz12fVFcq3jHTCSs0QSjxnJzxp39eG_zYO3bh2EiBLzUxix3MFjcyieD2XeZm4eIrDq1ot8QQ8___qA'] // input your cookie hare

  var cookie = rndm[Math.floor(Math.random() * rndm.length)];


  const res = await axios.get(`https://bing-imran.onrender.com/bing-img?prompt=${encodeURIComponent(prompt)}&cookie=${cookie}`);

  
  console.log(res.data)
    const data = res.data.result;
  const numberSearch = data.length
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }

    
    nayan.reply({
        attachment: imgData,
        body: "🔍Bing Search Result🔍\n\n📝Prompt: " + prompt + "\n\n#️⃣Number of Images: " + numberSearch
    }, events.threadID, events.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
}
}
