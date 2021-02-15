const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    var choices = [
        "It is certain",
        "It is decidedly so",
        "Yes - denfinitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better no tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
        "No"
    ];

    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`The magic 8 ball says, **${output}**`);

}

module.exports.help = {
    name: "8ball",
    aliases: ["magic8ball"]
}