const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    //random chooser ores
    var choices = [
        "Coal",
        "Iron",
        "Lapis Lazuli",
        "Gold",
        "Redstone",
        "Diamond",
        "Emerald"
    ];
    //chooses one of the ores
    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`You got **${output}!**`);

}

module.exports.help = {
    name: "ore",
    aliases: [""]
}