const Discord = require('discord.js')
const ip = require("ip"); // We're only using this to get the IP of the dashboard, only bot developers can see the IP
const moment = require("moment");
require("moment-duration-format");


module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    const duration = moment
        .duration(bot.uptime)
        .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.RichEmbed()
        .setColor('#3d728d')
        .setTitle("Process Information")
        .setThumbnail(bot.user.avatarURL)
        .addField(
            "RAM usage",
            `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`,
            true
        )
        .addField("NPM version", `${process.version}`, true)
        .addField("Discord.js version", `v${Discord.version}`, true)
        .addField("Dashboard URL", `${ip.address()}`, true)
        .addField("Uptime", `${duration}`, true)
        .addField(
            "Share this bot",
            "[Bot Invite Link](https://discord.com/oauth2/authorize?client_id=714971642752925759&scope=bot&permissions=104307777)",
            true
        )
        .setImage("https://i.imgur.com/W65SIDT.jpg")
        .setTimestamp()
        .setFooter(
            "2021 Mountain Top",
            "https://i.imgur.com/9TGM7Et.jpg"
        );
    message.channel.send(embed)

}

module.exports.help = {
    name: "process",
    aliases: [""]
}