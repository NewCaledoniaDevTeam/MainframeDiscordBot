const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    //Ping
    const start = Date.now();
    message.channel.send("Pinging...").then(message => {
        const end = Date.now();
        message.edit(`:ping_pong: Pong! Took **${end - start}**ms!`);
    });

}

module.exports.help = {
    name: "ping",
    aliases: [""]
}