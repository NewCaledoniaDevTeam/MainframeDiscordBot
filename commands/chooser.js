const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;


    var choices = [
        "Alex Snyder",
        "Eddie Saucer",
        "Ethan McClintic",
        "Jeffery Scruggs",
        "Ryan Olander",
        "Samual Tokiyoshi-Gray",
        "Alan Saucer",
        "Nathan Ludwig",
        "Aaron Olander",
        "Dylan Hayden",
        "Aidan Gilmore",
        "Connor McClinitc",
        "Daniel Snyder",
        "Daniel Brady",
        "Joey Saucer",
        "Braeden Spielman"
    ];

    var output = choices[Math.floor(Math.random() * choices.length)];

    var who = output;
    message.channel.send(`**${who}** will decide your fate.`);

}

module.exports.help = {
    name: "chooser",
    aliases: [""]
}