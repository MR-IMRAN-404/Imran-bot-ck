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

  const rndm = ['1FFWNplL_By06yWUa6REpKP37oFQgyI98OhHqRXCqdwt-YggFGxn-6LQLEq4gum52uFyu9Qq7w7EK5nfGtQGxHnpaaEva4l_ma6F3L-LeCguoZWwdgjHNAHquoUo8T-6Onyuz58G5xYiAEBwypXu8T1fexzT-ySapiVoUpqp61YRjKQ9REFIHwiR1Azf_L0mwxfjzIpmKZNJK1SCo4XQEFA','1mxisjeiifkl8FZ7Ek5l6ODRs9awWxBBYHNyjqW2z6NbcRZNhBaADgbgpDMMLxGREkCOLkvf4lKcJcYdt_i-4Aq_8wmNXqRA3BLes8VbzGJz8-9OvWZYzCjtKBR10_Q5RM-yhNy4nAFCbxo8ygBOVLPe6byEzB5aXjZuAmQi7-ey_L3Lc7xeWFd49FU5yvNRzvWlUu3gLfjLzfUXSQSzMGg','10J32hGSY1BZuJhKFjoCxpsL4SLOzveI8uDftm_hnZJ_qr80z4wAp4qN0rM1ZHDeeCcbRQh8Bycsg_Q-8upT0YZjFmC4SvXixwsdT-P1H2fP5_GpuxE9b7JoWz7J-X-qJTJ2U6ZNKExFvc9rO521BNfEtUpVaVdp5ECZcLWfQJiUpf22xqQ1LY4Mr6p6fsNsiXgy8J6dSH1-7D9njh8loIQ'] // input your cookie hare

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
