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

        var randomItems = items[Math.floor(Math.random() * items.length)];
        var maximum = 64;
        var minimum = 0;
        var randomnumber =
            Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        var number = randomnumber;

        message.channel.send(`You won **${number} ${randomItems}!**`);
    });

}

module.exports.help = {
    name: "randomdeals",
    aliases: [""]
}