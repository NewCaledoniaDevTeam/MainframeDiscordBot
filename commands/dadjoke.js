const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    // Read users.json file 
    fs.readFile("./dadjoke.json", function(err, data) {

        // Check for errors 
        if (err) throw err;

        // Converting to JSON 
        const jokes = JSON.parse(data);

        var output = jokes[Math.floor(Math.random() * jokes.length)];
        message.channel.send(`**${output}**`);
    });

}

module.exports.help = {
    name: "dadjoke",
    aliases: [""]
}