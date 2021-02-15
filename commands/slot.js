const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    var choices = [
        "Coal",
        "Iron",
        "Lapis Lazuli",
        "Gold/Netherite",
        "Redstone",
        "Diamond",
        "Emerald"
    ];

    //chooses one of the ores
    var ore = choices[Math.floor(Math.random() * choices.length)];

    //the numbers
    var maximum = 64;
    var minimum = 0;
    //chooses random number between the numbers
    var randomnumber =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var number = randomnumber;

    message.channel.send(`You won **${number} ${ore}!**`);

}

module.exports.help = {
    name: "slot",
    aliases: ["slots"]
}