const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    var choices = ["Heads", "Tails"];
    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`You got **${output}!**`);

}

module.exports.help = {
    name: "coinflip",
    aliases: ["coin", "flip"]
}