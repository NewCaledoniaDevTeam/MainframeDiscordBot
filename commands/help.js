const Discord = require("discord.js");
const prefix = process.env.PREFIX;

module.exports.run = async(bot, message, args) => {

    if (!message.content.startsWith(process.env.PREFIX)) return;


    let embed = new Discord.RichEmbed()
        .setColor('#3d728d')
        .setTitle("help menu")
        .setThumbnail(bot.user.avatarURL)
        .addField(`**${prefix}chooser**`, `randomly chooses a person`)
        .addField(`**${prefix}minesweeper**`, `play minesweeper on discord`)
        .addField(`**${prefix}ore**`, `randomly chooses a ore`)
        .addField(`**${prefix}ping**`, `says how slow I am`)
        .addField(`**${prefix}beep**`, `says name, boop`)
        .addField(
            `**${prefix}slot**`,
            `slot machine`
        )
        .addField(`**${prefix}profiler @name**`, `sends info about person`)
        .addField(`**${prefix}emojis**`, `shows all custom emojis`)
        .addField(
            `**${prefix}process**`,
            `to show how much power it is using for Alan knowledge please don't use it`
        )
        .addField(`**${prefix}rps**`, `rock, paper, scissors`)
        .addField(
            `**${prefix}8ball**`,
            `ask an question and the magic ball will answer you`
        )
        .addField(
            `**${prefix}coinflip ${prefix}coin ${prefix}flip**`,
            `flips a coin`
        )
        .addField(`**${prefix}dad name** (nospaces)`, `Hi _____ , I'm dad!`)
        .addField(
            `**${prefix}dadjoke**`,
            `tells a dad joke, I have over 150 of them`
        )
        .addField(
            `**${prefix}number maxnumber**`,
            `randomly choose number between 0 and the maxnumber`
        )
        .addField(`**${prefix}items**`, `randomly names a random minecraft item`)
        .addField(`**${prefix}randomdeals**`, `randomly gives an number of items`)
        .addField(`**${prefix}cursed**`, `randomly finds a cursed image on the internet`)
        .addField(`**${prefix}image whatever (or nothing)**`, `randomly finds any image on the internet`)
        .addField(`**${prefix}YEETT**`, `YYYYEEEEEEEEEEEETTTTTTTT`)
        .addField(`**${prefix}creeper**`, `oohhh mmaaannn`)
        .setImage("https://i.imgur.com/W65SIDT.jpg")
        .setTimestamp()
        .setFooter(
            "2021 Moutain Top",
            "https://i.imgur.com/9TGM7Et.jpg"
        );
    message.channel.send(embed)
}


module.exports.help = {
    name: "help",
    aliases: ["h", "commands"],
}