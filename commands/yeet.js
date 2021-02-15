const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    let embed = new Discord.RichEmbed()
        .addField(`╭╮╱╱╭╮╱╱╱╱╭╮╱╭╮`, `┃╰╮╭╯┃╱╱╱╭╯╰┳╯╰╮`)
        .addField(`╰╮╰╯╭┻━┳━┻╮╭┻╮╭╯`, `╱╰╮╭┫┃━┫┃━┫┃╱┃┃`)
        .addField(`╱╱┃┃┃┃━┫┃━┫╰╮┃╰╮`, `╱╱╰╯╰━━┻━━┻━╯╰━╯`);
    message.channel.send(embed)

    /*
╭╮╱╱╭╮╱╱╱╱╭╮╱╭╮
┃╰╮╭╯┃╱╱╱╭╯╰┳╯╰╮
╰╮╰╯╭┻━┳━┻╮╭┻╮╭╯
╱╰╮╭┫┃━┫┃━┫┃╱┃┃
╱╱┃┃┃┃━┫┃━┫╰╮┃╰╮
╱╱╰╯╰━━┻━━┻━╯╰━╯
*/

}

module.exports.help = {
    name: "yeet",
    aliases: [""]
}