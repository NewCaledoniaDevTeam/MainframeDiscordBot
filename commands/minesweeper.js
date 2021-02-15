const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    // Discord.js Minesweeper
    const Minesweeper = require("discord.js-minesweeper");

    const minesweeper = new Minesweeper({
        returnType: "emoji"
    });
    var mines = minesweeper.start();
    message.channel.send(mines);

}

module.exports.help = {
    name: "minesweeper",
    aliases: [""]
}