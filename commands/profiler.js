const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    const user = message.mentions.members.first() || message.member;

    let embed = new Discord.RichEmbed()
        .setTitle(user.user.username)
        .addField(`ID:`, `${user.id}`)
        .addField(`Icon URL:`, `${user.user.avatarURL}`)
        .addField(`Game:`, `${user.user.presence.game || "none"}`, true)
        .addField(`Status:`, `${user.user.presence.status.toUpperCase()}`, true)
        .addField(`Full Name:`, `${user.user.tag}`, true)
        .setThumbnail(user.user.avatarURL)
        .setFooter(
            "2021 Mountain Top",
            "https://i.imgur.com/9TGM7Et.jpg"
        )
        .setTimestamp()
        .setColor("#3d728d")
    message.channel.send(embed)
}

module.exports.help = {
    name: "profiler",
    aliases: ["profile"]
}