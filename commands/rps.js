const Discord = require('discord.js')

module.exports.run = async(bot, message) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    let replies = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random() * replies.length);

    let uReply = (message.toString()).replace('$rps ', '');
    if (!uReply)
        return message.channel.send(
            `Please play with one of these responses: \`${replies.join(", ")}\``
        );
    if (!replies.includes(uReply))
        return message.channel.send(
            `Only these responses are accepted: \`${replies.join(", ")}\``
        );

    if (replies[result] === uReply) {
        //console.log(replies[result]);
        message.channel.send(`I chose ` + replies[result]); // + (replies[result])
        return message.channel.send("It's a tie! We had the same choice.");
    } else if (uReply === "rock") {
        //console.log(replies[result]);
        message.channel.send(`I chose ` + replies[result]); // + (replies[result])
        if (replies[result] === "paper")
            return message.channel.send("**I won!**");
        else return message.channel.send("**You won!**");
    } else if (uReply === "scissors") {
        //console.log(replies[result]);
        message.channel.send(`I chose ` + replies[result]); // + (replies[result])
        if (replies[result] === "rock") return message.channel.send("**I won!**");
        else return message.channel.send("**You won!**");
    } else if (uReply === "paper") {
        //console.log(replies[result]);
        message.channel.send(`I chose ` + replies[result]); // + (replies[result])
        if (replies[result] === "scissors")
            return message.channel.send("**I won!**");
        else return message.channel.send("**You won!**");
    }

}

module.exports.help = {
    name: "rps",
    aliases: [""]
}