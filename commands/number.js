const Discord = require("discord.js");

module.exports.run = async(bot, message) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    //random number gen
    let uReply = parseInt(message.toString().replace(/\D/g, ''));
    var maximum = uReply;
    if (isNaN(uReply)) return message.channel.send(`Please give the highest number`);

    var minimum = 0;
    //chooses random number between the numbers
    var randomnumber =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var output = randomnumber;

    message.channel.send(`You got **${output}!**`);

};


module.exports.help = {
    name: "number",
    aliases: ["num"]
}