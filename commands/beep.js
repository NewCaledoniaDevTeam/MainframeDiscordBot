const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    message.reply("boop");

}

module.exports.help = {
    name: "beep",
    aliases: [""]
}