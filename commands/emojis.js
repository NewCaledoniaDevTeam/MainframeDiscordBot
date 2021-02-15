const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    let notAnimated = [];
    let animated = [];

    message.guild.emojis.forEach(async emoji => {
        if (emoji.animated) animated.push(emoji.toString());
        else notAnimated.push(emoji.toString());
    });

    if (!animated[0]) animated = ["None"];
    if (!notAnimated[0]) notAnimated = ["None"];

    message.channel.send(notAnimated.join(" "));

}

module.exports.help = {
    name: "emojis",
    aliases: ["emoji"]
}