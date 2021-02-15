const dotenv = require('dotenv');
dotenv.config();
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }


    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);

        });
    });
})
bot.on("ready", async() => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setStatus('online');

    //CUSTOM PLAYING STATUS
    const statusList = [
        { msg: "Minecraft: Bedrock Edition", type: "PLAYING" },
        { msg: "Minecraft: Earth", type: "PLAYING" },
        { msg: "the Slots", type: "PLAYING" },
        { msg: "Minecraft: Xbox One Edition", type: "PLAYING" },
        { msg: "Minecraft: Java Edition", type: "PLAYING" },
        { msg: "Minecraft Dungeons", type: "PLAYING" },
        { msg: "Minecraft: Windows 10 Edition", type: "PLAYING" },
        { msg: "your court cases", type: "LISTENING" },
        { msg: "Minecraft tutorials", type: "WATCHING" },
        { msg: "Type $help for help", type: "WATCHING" },
        { msg: "CaptainSparklez on youtube", type: "WATCHING" },
    ];

    setInterval(async() => {
        const index = Math.floor(Math.random() * statusList.length + 1) - 1;
        await bot.user.setActivity(statusList[index].msg, {
            type: statusList[index].type
        });
    }, 60000);

    bot.on("message", async message => {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        let prefix = process.env.PREFIX;
        let messageArray = message.content.split(" ");
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();
        let commandfile;

        if (bot.commands.has(cmd)) {
            commandfile = bot.commands.get(cmd);
        } else if (bot.aliases.has(cmd)) {
            commandfile = bot.commands.get(bot.aliases.get(cmd));
        }

        //if (!message.content.startsWith(prefix)) return;
        if (!message.content.toLowerCase().startsWith(prefix)) return;


        try {
            commandfile.run(bot, message, args);

        } catch (e) {}
    })
})


bot.login(process.env.DISCORD_TOKEN);