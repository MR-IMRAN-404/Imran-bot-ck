const fs = require("fs");
module.exports.config = {
  name: "imranv",
  version: "2.0.0",
  permission: 0,
  credits: "nayon",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
	if (event.body.indexOf("ইমরান")==0 || (event.body.indexOf("Imran")==0 || (event.body.indexOf("ইমরান কে")==0 ||
(event.body.indexOf("Imran ke")==0)))) {
		var msg = {
				body: " বেডি পাগল 🤧আর কিছু বলবো না কারন উনি আমার মালিক🌚😽💦:))"
    }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}
