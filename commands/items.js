const Discord = require('discord.js')
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    // Read users.json file 
    fs.readFile("./items.json", function(err, data) {

        // Check for errors 
        if (err) throw err;

        // Converting to JSON 
        const items = JSON.parse(data);

        var output = items[Math.floor(Math.random() * items.length)];
        message.channel.send(`You got **${output}!**`);
    });

}

module.exports.help = {
    name: "items",
    aliases: [""]
}