const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    var choices = [
        "20 emarld fine",
        "10 emarld fine",
        "Exile In overworld",
        "10 day prison",
        "5 day prison",
        "1 day prison",
        "50 day prison",
        "10 iron fine",
        "20 iron fine",
        "insurance expired, buy again",
        "Exile to the nether",
        "Incressed taxes, amount desided by acting judge",
        "Push into lava",
        "Get catched on fire",
        "No punish ment",
        "Get of jail free card",
        "gladiator pit sentence"
    ];
    //chooses punishments
    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`You got stuck with **${output}!** - Ideas from Ethan`);
}

module.exports.help = {
    name: "judgebyEthan",
    aliases: ["Juge", "punishments", "judgebyethan"]
}