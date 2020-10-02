const Discord = require("discord.js");
const client = new Discord.Client();
require("./server.js");

client.login("TOKEN");
client.on("ready", () =>
  console.log(`${client.user.tag} has been successfully turned on!`)
);

//CUSTOM PLAYING STATUS
/*
client.on("ready", () => {
  console.log("The bot has started!");
  client.user.setActivity("the Slots", { type: "PLAYING" });
}); */

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
  { msg: "Type *help for help", type: "WATCHING" },
  { msg: "CaptainSparklez on youtube", type: "WATCHING" }
];

setInterval(async () => {
  const index = Math.floor(Math.random() * statusList.length + 1) - 1;
  await client.user.setActivity(statusList[index].msg, {
    type: statusList[index].type
  });
}, 60000);


//welcome
client.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.channels.get("719605156337156197").send(`Welcome to New Caledonia, ${member.user}, please read the laws and talk to the president`).catch(console.error);
  });

  //images and minecraft
  const cheerio = require('cheerio');
  const request = require('request');
  const ping = require('minecraft-server-util')

client.on("message", async message => {
  var prefix = "$";

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Discord.js Minesweeper
  if (message.content.startsWith(`${prefix}minesweeper`)) {
    const Minesweeper = require("discord.js-minesweeper");

    const minesweeper = new Minesweeper({
      returnType: "emoji"
    });
    var mines = minesweeper.start();
    message.channel.send(mines);
  }

  //random number 2
  if (command === "number") {
    let uReply = args[0];
    var maximum = uReply;
    if (!uReply) return message.channel.send(`Please give the highest number`);

    var minimum = 0;
    //chooses random number between the numbers
    var randomnumber =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var output = randomnumber;

    message.channel.send(`You got **${output}!**`);
  }

  //random chooser ores
  if (message.content.startsWith(`${prefix}ore`)) {
    var choices = [
      "Coal",
      "Iron",
      "Lapis Lazuli",
      "Gold",
      "Redstone",
      "Diamond",
      "Emerald"
    ];
    //chooses one of the ores
    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`You got **${output}!**`);
  }

  //Ping
  if (message.content.startsWith(`${prefix}ping`)) {
    const start = Date.now();
    message.channel.send("Pinging...").then(message => {
      const end = Date.now();
      message.edit(`:ping_pong: Pong! Took **${end - start}**ms!`);
    });
  }

  //DIE COMMAND / RESTART COMMAND
  if (message.content.startsWith(`${prefix}die`)) {
    let devs = ["355113338969128970"]; //CHANGE THIS TO YOUR ID(S)

    if (!devs.includes(message.author.id)) {
      return true;
    } else {
	console.log('restart');
      process.exit();
    }
  }

  //Testing if online
  if (message.content.startsWith(`${prefix}beep`)) {
    message.reply("boop");
  }

  //randomsale idea
  // random number, item, random, item/emarlds

  //slot machine
  // 5 emarlds in, random + item received
  if (message.content.startsWith(`${prefix}slot`)) {
    var _normal_choices = [
      "Coal",
      "Iron",
      "Lapis Lazuli",
      "Gold/Netherite",
      "Redstone",
      "Diamond",
      "Emerald"
    ];

    var choices_cheap = [
      "Coal",
      "Coal",
      "Coal",
      "Coal",
      "Gold",
      "Gold",
      "Gold",
      "Gold",
      "Lapis Lazuli",
      "Lapis Lazuli",
      "Lapis Lazuli",
      "Lapis Lazuli",
      "Redstone",
      "Redstone",
      "Redstone",
      "Redstone",
      "Iron",
      "Iron",
      "Diamond",
      "Diamond",
      "Emerald"
    ];

    //chooses one of the ores
    chocies = _normal_choices
    var ore = chocies[Math.floor(Math.random() * chocies.length)];

    //the numbers
    var maximum = 64;
    var maximum_backup = 32;
    var minimum = 0;
    //chooses random number between the numbers
    var randomnumber =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var number = randomnumber;

    message.channel.send(`You won **${number} ${ore}!**`);
  }

  //punsihments
  if (message.content.startsWith(`${prefix}judgebyEthan`)) {
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
    //chooses punsihments
    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`You got stuck with **${output}!** Ideas from Ethan`);
  }
  //profiler
  if (message.content.startsWith(`${prefix}profiler`)) {
    try {
      const user = message.mentions.members.first() || message.member;

      const embed = new Discord.RichEmbed()
        .setTitle(user.user.username)
        .setDescription(
          `ID: ${user.id}
Name: ${user.user.username}
Icon URL: ${user.user.avatarURL}
Game: ${user.user.presence.game || "none"}
Status: ${user.user.presence.status.toUpperCase()}
Full Name: ${user.user.tag}`
        )
        .setThumbnail(user.user.avatarURL)
        .setColor("#eeeeee");

      message.channel.send(embed);
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }

  //emojis
  if (message.content.startsWith(`${prefix}emojis`)) {
    try {
      let notAnimated = [];
      let animated = [];

      message.guild.emojis.forEach(async emoji => {
        if (emoji.animated) animated.push(emoji.toString());
        else notAnimated.push(emoji.toString());
      });

      if (!animated[0]) animated = ["None"];
      if (!notAnimated[0]) notAnimated = ["None"];

      message.channel.send(notAnimated.join(" "));
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }

  //process
  if (message.content.startsWith(`${prefix}process`)) {
    const Discord = require("discord.js");
    const moment = require("moment");
    const version = require("discord.js");
    const ip = require("ip"); // We're only using this to get the IP of the dashboard, only bot developers can see the IP
    require("moment-duration-format");
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");
    var express = require("express");
    var http = require("http");
    var app = express();
    var listener = app.listen(process.env.PORT, function() {});
    const port = process.env.port || 3050;
    const embed = new Discord.RichEmbed()
      .setColor('#3d728d')
      .setAuthor("Process Information")
      .setThumbnail(client.user.avatarURL)
      .addField(
        "RAM usage",
        `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`,
        true
      )
      //.addField("Discord.js version", `v${version}`, true)
      .addField("NPM version", `${process.version}`, true)
      .addField("Uptime", `${duration}`, true)
      .addField("Dashboard URL", `${ip.address()}:${port}`, true)
      .addField(
        "Dashboard",
        "[LINK](https://e.widgetbot.io/channels/711747316033388635/717508956129460356)",
        true
      )
      //.addField("Voting listener URL", `${ip.address()}:80`, true)
      .addField(
        "Share this bot",
        "[Bot Invite Link](https://discord.com/oauth2/authorize?client_id=714971642752925759&scope=bot&permissions=104307777)",
        true
      )
      .setImage("https://i.imgur.com/W65SIDT.jpg")
      .setTimestamp()
      .setFooter(
        "2020 Weird.exe during covid-19",
        "https://i.imgur.com/91WUA6s.png"
      );
    message.channel.send(embed);
  }

  //rock paper scissors
  if (command === "rps") {
    let replies = ["rock", "paper", "scissors"];
    let result = Math.floor(Math.random() * replies.length);

    let uReply = args[0];
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

  //I'm Dad, dad joke
  if (command === "i'm" || command === "dad" || command === "im") {
    let uReply = args[0];
    var name = uReply;
    if (!uReply)
      return message.channel.send(`Please say name after ${prefix}dad`);
    message.channel.send(`**Hi ${name}, I'm dad!**`);
  }

  //random dad jokes
  if (message.content.startsWith(`${prefix}dadjoke`)) {
    var choices = [
      "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
      "I'll call you later. Don't call me later, call me Dad!",
      "How do celebrities stay cool? They have many fans.",
      "What's Forrest Gump's Facebook password? 1forest1.",
      "What do you call it when Batman skips church? Christian Bale.",
      "What time did the man go to the dentist? Tooth hurt-y.",
      "Did you hear about the man who fell into an upholstery machine? He's fully recovered.",
      "Why didn't the melons get married? Because they cantaloupe.",
      "What kind of egg did the evil chicken lay? A deviled egg.",
      "Why did the coach go to the bank? To get his quarter back.",
      "Why does Snoop Dogg always carry an umbrella? Fo' Drizzle.",
      "What did the fisherman say to the magician? Pick a cod, any cod.",
      "What do you call a fake noodle? An impasta.",
      "Which is faster, hot or cold? Hot, because you can catch a cold.",
      "How do you organize a space party? You planet.",
      "Did you know that milk is the fastest liquid on earth? It's pasteurized before you even see it.",
      "Why are skeletons so calm? Because nothing gets under their skin.",
      "What did one ocean say to the other ocean? Nothing, they just waved.",
      "What does a baby computer call his father? Data.",
      "Did you hear about the power outlet who got into a fight with a power cord? He thought he could socket to him.",
      "Why are elevator jokes so good? They work on so many levels.",
      "Why can't a leopard hide? Because he's always spotted.",
      "How do moths swim? Using the butterfly stroke.",
      "How many tickles does it take to make an octopus laugh? 10 tickles.",
      "Do you know the story about the chicken that crossed the border? Me neither, I couldn't follow it.",
      "I made a pencil with two erasers. It was pointless.",
      "How do you make a Kleenex dance? Put a little boogie in it!",
      "What do you get from a pampered cow? Spoiled milk!",
      "What do you call an illegally parked frog? Toad.",
      "Where do baby cats learn to swim? The kitty pool.",
      "Why are spiders so smart? They can find everything on the web.",
      "How can a leopard change his spots? By moving.",
      "It's inappropriate to make a 'dad joke' if you're not a dad. It's a faux pa.",
      "Did you hear about the circus fire? It was in tents.",
      "Can February March? No, but April May!",
      "How can you tell it's a dogwood tree? From the bark.",
      "How do lawyers say goodbye? We'll be suing ya!",
      "Wanna hear a joke about paper? Never mind—it's tearable.",
      "What's the best way to watch a fly fishing tournament? Live stream.",
      "I could tell a joke about pizza, but it's a little cheesy.",
      "Don't trust atoms. They make up everything!",
      "When does a joke become a dad joke? When it becomes apparent.",
      "I wouldn't buy anything with velcro. It's a total rip-off.",
      "What's an astronaut's favorite part of a computer? The space bar.",
      "I like telling Dad jokes. Sometimes he laughs!",
      "How do you make holy water? You boil the hell out of it.",
      "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
      "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.",
      "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
      "The secret service isn't allowed to yell Get down! anymore when the president is about to be attacked. Now they have to yell Donald, duck!",
      "I'm reading a book about anti-gravity. It's impossible to put down!",
      "What do you call someone with no body and no nose? Nobody knows.",
      "I ordered a chicken and an egg from Amazon. I’ll let you know",
      "What is the least spoken language in the world? Sign language",
      "A slice of apple pie is $2.50 in Jamaica and $3.00 in the Bahamas. These are the pie rates of the Caribbean.",
      "Justice is a dish best served cold, if it were served warm it would be justwater.",
      "What does a zombie vegetarian eat? GRRRAAAAAIIIINNNNS!",
      "If you see a robbery at an Apple Store does that make you an iWitness?",
      "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
      "Don't trust atoms. They make up everything!",
      "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
      "What's the best part about living in Switzerland? I don't know, but the flag is a big plus.",
      "When an ambulance zips past with its siren blaring: They won’t sell much ice cream driving that fast.",
      "5/4 of people admit that they’re bad with fractions.",
      "Why couldn't the bike standup by itself? It was two tired.",
      "Two guys walk into a bar, the third one ducks.",
      "When a woman is giving birth, she is literally kidding.",
      "What did the buffalo say to his son when he dropped him off at school? Bison.",
      "Why did the crab never share? Because he's shellfish.",
      "What do you call a cow with two legs? Lean beef. If the cow has no legs, then it’s ground beef.",
      "I just watched a documentary about beavers. It was the best dam show I ever saw!",
      "What did the horse say after it tripped? Help! I’ve fallen and I can’t giddyup!",
      "You know what the loudest pet you can get is? A trumpet.",
      "Why wasn't the woman happy with the velcro she bought? It was a total ripoff.",
      "What noise does a 747 make when it bounces? Boeing, Boeing, Boeing.",
      "What do you call a factory that sells passable products? A satisfactory.",
      "I’m only familiar with 25 letters in the English language. I don’t know why.",
      "What do you get when you cross a snowman with a vampire? Frostbite.",
      "What does an angry pepper do? It gets jalapeño your face.",
      "As a lumberjack, I know that I’ve cut exactly 2,417 trees. I know because every time I cut one, I keep a log.",
      "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!",
      "What do you get when you cross an elephant with a rhino? Elephino.",
      "I was interrogated over the theft of a cheese toastie. Man, they really grilled me.",
      "If you rearrange the letters of “Postmen”. They get really pissed off.",
      "I had a dream that I was a muffler last night. I woke up exhausted!",
      "You heard of that new band 1023MB? They're good but they haven't got a gig yet.",
      "Did you hear about the guy who invented Lifesavers? They say he made a mint.",
      "Did you see they made round bails of hay illegal in Wisconsin? It’s because the cows weren’t getting a square meal.",
      "What do you call a lonely cheese? Provolone.",
      "How do you make a Kleenex dance? Put a little boogie in it!",
      "What do prisoners use to call each other? Cell phones.",
      "Why didn't the vampire attack Taylor Swift? She had bad blood.",
      "What do sprinters eat before a race? Nothing, they fast!",
      "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
      "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
      "What happens when you go to the bathroom in France? European.",
      "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire!",
      "How many apples grow on a tree? All of them!",
      "Did you hear the rumor about butter? Well, I'm not going to spread it!",
      "How does a penguin build its house? Igloos it together!",
      "Why did the old man fall in the well? Because he couldn't see that well!",
      "Why don't skeletons ever go trick or treating? Because they have no body to go with!",
      "Want to hear a joke about construction? I'm still working on it!",
      "I used to work in a shoe-recycling shop. It was sole destroying!",
      "My boss told me to have a good day. So I went home!",
      "I'm so good at sleeping I can do it with my eyes closed!",
      "Spring is here! I got so excited I wet my *plants*!",
      "I thought about going on an all-almond diet… But that's just nuts!",
      "This graveyard looks overcrowded. People must be dying to get in there!",
      "My friend says to me, What rhymes with orange? And I told him, No it doesn't!",
      "My wife told me I had to stop acting like a flamingo. So I had to put my foot down!",
      "I told my girlfriend she drew her eyebrows too high. She seemed surprised!",
      "I tell dad jokes but I have no kids … I'm a faux pa!",
      "So a vowel saves another vowel's life. The other vowel says, Aye E! I owe you!",
      "Did I tell you the time I fell in love during a backflip? I was heels over head!",
      "My uncle named his dogs Rolex and Timex. They're his watch dogs!",
      "I would avoid the sushi if I was you. It's a little fishy!",
      "Five out of four people admit they're bad with fractions!",
      "Two goldfish are in a tank. One says to the other, Do you know how to drive this thing?",
      "Did you hear about the Italian chef who died? He pasta way!",
      "When the grocery store clerk asks me if I want the milk in a bag, I always tell him, No, I'd rather drink it out of the carton!",
      "The difference between a numerator and a denominator is a short line. Only a fraction of people will understand this!",
      "What's ET short for? Because he's only got tiny legs!",
      "I don't play soccer because I enjoy the sport. I'm just doing it for kicks!",
      "What's brown and sticky? A stick!",
      "What's orange and sounds like a parrot? A carrot!",
      "I invented a new word today: Plagiarism!",
      "What do you call a donkey with only three legs? A wonkey!",
      "After dinner, my wife asked if I could clear the table. I needed a running start, but I made it!",
      "Why is Peter Pan always flying? He neverlands!",
      "What's a ninja's favorite type of shoes? Sneakers!",
      "I know a lot of jokes about retired people but none of them work!",
      "What do Santa's elves listen to ask they work? Wrap music!",
      "What rhymes with boo and stinks? You!",
      "If an English teacher is convicted of a crime and doesn't complete the sentence, is that a fragment?",
      "I think my wife is putting glue on my antique weapons collection. She denies it but I'm sticking to my guns!",
      "Which U.S. state is famous for its extra-small soft drinks? Minnesota!",
      "I got a hen to regularly count her own eggs. She's a real mathamachicken!",
      "What did the Ranch say when someone opened the refrigerator door? Close the door, I'm dressing!",
      "Why do trees seem suspicious on sunny days? They just seem a little shady!",
      "What did the policeman say to his belly button? You're under a vest!",
      "Last night I had a dream that I weighed less than a thousandth of a gram. I was like, 0mg.",
      "A cheese factory exploded in France. Da brie is everywhere!",
      "Why did the math book look so sad? Because of all of its problems!",
      "I don't really call for funerals that start before noon. I guess I'm just not a mourning person!",
      "If two vegans get in a fight, is it still considered a beef?",
      "One of my favorite memories as a kid was when my brothers used to put me inside a tire and roll me down a hill. They were Goodyears!",
      "It takes guts to be an organ donor.",
      "What's black and white and read all over? Newspaper"
    ];

    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`**${output}**`);
  }

  //magic 8ball
  if (message.content.startsWith(`${prefix}8ball`)) {
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

  //coinflip
  if (
    message.content.startsWith(`${prefix}coinflip`) ||
    message.content.startsWith(`${prefix}coin`) ||
    message.content.startsWith(`${prefix}flip`)
  ) {
    var choices = ["Heads", "Tails"];
    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`You got **${output}!**`);
  }

  //random chooser items
  if (message.content.startsWith(`${prefix}items`)) {
    var choices = [
      "Acacia Boat",
      "Armor Stand",
      "Bat Spawn Egg",
      "Bee Spawn Egg",
      "Beetroot Seeds",
      "Birch Boat",
      "Blaze Spawn Egg",
      "Bottle o' Enchanting",
      "Bow",
      "Bucket",
      "Bucket of Cod",
      "Bucket of Pufferfish",
      "Bucket of Salmon",
      "Bucket of Tropical Fish",
      "Carrot",
      "Cat Spawn Egg",
      "Cave Spider Spawn Egg",
      "Chicken Spawn Egg",
      "Cocoa Beans",
      "Cod Spawn Egg",
      "Cow Spawn Egg",
      "Creeper Spawn Egg",
      "Crossbow",
      "Dark Oak Boat",
      "Dolphin Spawn Egg",
      "Donkey Spawn Egg",
      "Drowned Spawn Egg",
      "Egg",
      "Elder Guardian Spawn Egg",
      "Ender Pearl",
      "End Crystal",
      "Enderman Spawn Egg",
      "Endermite Spawn Egg",
      "Evoker Spawn Egg",
      "Eye of Ender",
      "Firework Rocket",
      "Fire Charge",
      "Fishing Rod",
      "Flint and Steel",
      "Fox Spawn Egg",
      "Ghast Spawn Egg",
      "Guardian Spawn Egg",
      "Hoglin Spawn Egg",
      "Horse Spawn Egg",
      "Husk Spawn Egg",
      "Item Frame",
      "Jungle Boat",
      "Lava Bucket",
      "Lead",
      "Lingering Potions",
      "Llama Spawn Egg",
      "Magma Cube Spawn Egg",
      "Melon Seeds",
      "Minecart",
      "Minecart with Chest",
      "Minecart with Command Block",
      "Minecart with Furnace ‌[Java Edition only]",
      "Minecart with Hopper",
      "Minecart with TNT",
      "Mooshroom Spawn Egg",
      "Mule Spawn Egg",
      "Nether Wart",
      "Oak Boat",
      "Ocelot Spawn Egg",
      "Painting",
      "Panda Spawn Egg",
      "Parrot Spawn Egg",
      "Phantom Spawn Egg",
      "Pig Spawn Egg",
      "Piglin Spawn Egg",
      "Pillager Spawn Egg",
      "Polar Bear Spawn Egg",
      "Potato",
      "Pufferfish Spawn Egg",
      "Pumpkin Seeds",
      "Rabbit Spawn Egg",
      "Ravager Spawn Egg",
      "Redstone Dust",
      "Salmon Spawn Egg",
      "Sheep Spawn Egg",
      "Shulker Spawn Egg",
      "Silverfish Spawn Egg",
      "Skeleton Horse Spawn Egg",
      "Skeleton Spawn Egg",
      "Slime Spawn Egg",
      "Snowball",
      "Spider Spawn Egg",
      "Splash Potions",
      "Spruce Boat",
      "Squid Spawn Egg",
      "Stray Spawn Egg",
      "Strider Spawn Egg",
      "String",
      "Sweet Berries",
      "Trader Llama Spawn Egg",
      "Trident",
      "Tropical Fish Spawn Egg",
      "Turtle Spawn Egg",
      "Vex Spawn Egg",
      "Villager Spawn Egg",
      "Vindicator Spawn Egg",
      "Wandering Trader Spawn Egg",
      "Water Bucket",
      "Wheat Seeds",
      "Witch Spawn Egg",
      "Wither Skeleton Spawn Egg",
      "Wolf Spawn Egg",
      "Zoglin Spawn Egg",
      "Zombie Horse Spawn Egg",
      "Zombie Pigman Spawn Egg",
      "Zombie Spawn Egg",
      "Zombie Villager Spawn Egg",
      "Apple",
      "Arrow",
      "Baked Potato",
      "Beetroot Soup",
      "Beetroot",
      "Black Dye",
      "Blue Dye",
      "Bone",
      "Bone Meal",
      "Book and Quill",
      "Bowl",
      "Bread",
      "Brown Dye",
      "Carrot on a Stick",
      "Chainmail Boots",
      "Chainmail Chestplate",
      "Chainmail Helmet",
      "Chainmail Leggings",
      "Charcoal",
      "Chorus Fruit",
      "Coal",
      "Cooked Chicken",
      "Cooked Cod",
      "Cooked Mutton",
      "Cooked Porkchop",
      "Cooked Rabbit",
      "Cooked Salmon",
      "Cookie",
      "Cyan Dye",
      "Debug Stick",
      "Diamond Axe",
      "Diamond Boots",
      "Diamond Chestplate",
      "Diamond Helmet",
      "Diamond Hoe",
      "Diamond Horse Armor",
      "Diamond Leggings",
      "Diamond Pickaxe",
      "Diamond Shovel",
      "Diamond Sword",
      "Dried Kelp",
      "Elytra",
      "Empty Map",
      "Enchanted Book",
      "Enchanted Golden Apple",
      "Map or Explorer Map",
      "Glass Bottle",
      "Golden Apple",
      "Golden Axe",
      "Golden Boots",
      "Golden Carrot",
      "Golden Chestplate",
      "Golden Helmet",
      "Golden Hoe",
      "Golden Horse Armor",
      "Golden Leggings",
      "Golden Pickaxe",
      "Golden Shovel",
      "Golden Sword",
      "Gray Dye",
      "Green Dye",
      "Ink Sac",
      "Iron Ingot ‌[Java Edition only]",
      "Iron Axe",
      "Iron Boots",
      "Iron Chestplate",
      "Iron Helmet",
      "Iron Hoe",
      "Iron Horse Armor",
      "Iron Leggings",
      "Iron Pickaxe",
      "Iron Shovel",
      "Iron Sword",
      "Knowledge Book",
      "Lapis Lazuli",
      "Leather Boots",
      "Leather Cap",
      "Leather Horse Armor",
      "Leather Pants",
      "Leather Tunic",
      "Light Blue Dye",
      "Light Gray Dye",
      "Lime Dye",
      "Magenta Dye",
      "Melon Slice",
      "Milk Bucket",
      "Mushroom Stew",
      "Music Disc (Ward)",
      "Music Disc (Wait)",
      "Music Disc (Stal)",
      "Music Disc (Mellohi)",
      "Music Disc (Mall)",
      "Music Disc (Far)",
      "Music Disc (Chirp)",
      "Music Disc (Cat)",
      "Music Disc (Blocks)",
      "Music Disc (13)",
      "Music Disc (11)",
      "Music Disc (Strad)",
      "Music Disc (Pigstep)",
      "Name Tag",
      "Netherite Axe",
      "Netherite Boots",
      "Netherite Chestplate",
      "Netherite Helmet",
      "Netherite Hoe",
      "Netherite Leggings",
      "Netherite Shovel",
      "Netherite Sword",
      "Netherite Pickaxe",
      "Orange Dye",
      "Pink Dye",
      "Poisonous Potato",
      "Potions",
      "Pufferfish",
      "Pumpkin Pie",
      "Purple Dye",
      "Rabbit Stew",
      "Raw Beef",
      "Raw Chicken",
      "Raw Cod",
      "Raw Mutton",
      "Raw Porkchop",
      "Raw Rabbit",
      "Raw Salmon",
      "Red Dye",
      "Rotten Flesh",
      "Saddle",
      "Shears",
      "Shield",
      "Spectral Arrow",
      "Spider Eye",
      "Steak",
      "Stone Axe",
      "Stone Hoe",
      "Stone Pickaxe",
      "Stone Shovel",
      "Stone Sword",
      "Sugar",
      "Suspicious Stew",
      "Tipped Arrows",
      "Totem of Undying",
      "Tropical Fish",
      "Turtle Shell",
      "Wheat",
      "White Dye",
      "Wooden Axe",
      "Wooden Hoe",
      "Wooden Pickaxe",
      "Wooden Shovel",
      "Wooden Sword",
      "Written Book",
      "Yellow Dye",
      "Banner Pattern (Thing)",
      "Banner Pattern (Skull Charge)",
      "Banner Pattern (Creeper Charge)",
      "Banner Pattern (Globe)",
      "Banner Pattern (Flower Charge)",
      "Blaze Powder",
      "Blaze Rod",
      "Book",
      "Brick",
      "Clay",
      "Clock",
      "Compass",
      "Diamond",
      "Dragon's Breath",
      "Emerald",
      "Feather",
      "Fermented Spider Eye",
      "Firework Star",
      "Flint",
      "Glistering Melon Slice",
      "Glowstone Dust",
      "Gold Ingot",
      "Gold Nugget",
      "Ghast Tear",
      "Gunpowder",
      "Heart of the Sea",
      "Honey Bottle",
      "Honeycomb",
      "Iron Ingot ‌[Bedrock Edition only]",
      "Iron Nugget",
      "Leather",
      "Magma Cream",
      "Nautilus Shell",
      "Nether Brick",
      "Nether Quartz",
      "Nether Star",
      "Netherite Ingot",
      "Netherite Scrap",
      "Paper",
      "Phantom Membrane",
      "Popped Chorus Fruit",
      "Prismarine Crystals",
      "Prismarine Shard",
      "Rabbit Hide",
      "Rabbit's Foot",
      "Scute",
      "Shulker Shell",
      "Slimeball",
      "Stick"
    ];
    //chooses one of the items from list
    var output = choices[Math.floor(Math.random() * choices.length)];
    message.channel.send(`You got **${output}!**`);
  }

  //slots with items
  if (message.content.startsWith(`${prefix}randomdeals`)) {
    var choices = [
      "Acacia Boat",
      "Armor Stand",
      "Bat Spawn Egg",
      "Bee Spawn Egg",
      "Beetroot Seeds",
      "Birch Boat",
      "Blaze Spawn Egg",
      "Bottle o' Enchanting",
      "Bow",
      "Bucket",
      "Bucket of Cod",
      "Bucket of Pufferfish",
      "Bucket of Salmon",
      "Bucket of Tropical Fish",
      "Carrot",
      "Cat Spawn Egg",
      "Cave Spider Spawn Egg",
      "Chicken Spawn Egg",
      "Cocoa Beans",
      "Cod Spawn Egg",
      "Cow Spawn Egg",
      "Creeper Spawn Egg",
      "Crossbow",
      "Dark Oak Boat",
      "Dolphin Spawn Egg",
      "Donkey Spawn Egg",
      "Drowned Spawn Egg",
      "Egg",
      "Elder Guardian Spawn Egg",
      "Ender Pearl",
      "End Crystal",
      "Enderman Spawn Egg",
      "Endermite Spawn Egg",
      "Evoker Spawn Egg",
      "Eye of Ender",
      "Firework Rocket",
      "Fire Charge",
      "Fishing Rod",
      "Flint and Steel",
      "Fox Spawn Egg",
      "Ghast Spawn Egg",
      "Guardian Spawn Egg",
      "Hoglin Spawn Egg",
      "Horse Spawn Egg",
      "Husk Spawn Egg",
      "Item Frame",
      "Jungle Boat",
      "Lava Bucket",
      "Lead",
      "Lingering Potions",
      "Llama Spawn Egg",
      "Magma Cube Spawn Egg",
      "Melon Seeds",
      "Minecart",
      "Minecart with Chest",
      "Minecart with Command Block",
      "Minecart with Furnace ‌[Java Edition only]",
      "Minecart with Hopper",
      "Minecart with TNT",
      "Mooshroom Spawn Egg",
      "Mule Spawn Egg",
      "Nether Wart",
      "Oak Boat",
      "Ocelot Spawn Egg",
      "Painting",
      "Panda Spawn Egg",
      "Parrot Spawn Egg",
      "Phantom Spawn Egg",
      "Pig Spawn Egg",
      "Piglin Spawn Egg",
      "Pillager Spawn Egg",
      "Polar Bear Spawn Egg",
      "Potato",
      "Pufferfish Spawn Egg",
      "Pumpkin Seeds",
      "Rabbit Spawn Egg",
      "Ravager Spawn Egg",
      "Redstone Dust",
      "Salmon Spawn Egg",
      "Sheep Spawn Egg",
      "Shulker Spawn Egg",
      "Silverfish Spawn Egg",
      "Skeleton Horse Spawn Egg",
      "Skeleton Spawn Egg",
      "Slime Spawn Egg",
      "Snowball",
      "Spider Spawn Egg",
      "Splash Potions",
      "Spruce Boat",
      "Squid Spawn Egg",
      "Stray Spawn Egg",
      "Strider Spawn Egg",
      "String",
      "Sweet Berries",
      "Trader Llama Spawn Egg",
      "Trident",
      "Tropical Fish Spawn Egg",
      "Turtle Spawn Egg",
      "Vex Spawn Egg",
      "Villager Spawn Egg",
      "Vindicator Spawn Egg",
      "Wandering Trader Spawn Egg",
      "Water Bucket",
      "Wheat Seeds",
      "Witch Spawn Egg",
      "Wither Skeleton Spawn Egg",
      "Wolf Spawn Egg",
      "Zoglin Spawn Egg",
      "Zombie Horse Spawn Egg",
      "Zombie Pigman Spawn Egg",
      "Zombie Spawn Egg",
      "Zombie Villager Spawn Egg",
      "Apple",
      "Arrow",
      "Baked Potato",
      "Beetroot Soup",
      "Beetroot",
      "Black Dye",
      "Blue Dye",
      "Bone",
      "Bone Meal",
      "Book and Quill",
      "Bowl",
      "Bread",
      "Brown Dye",
      "Carrot on a Stick",
      "Chainmail Boots",
      "Chainmail Chestplate",
      "Chainmail Helmet",
      "Chainmail Leggings",
      "Charcoal",
      "Chorus Fruit",
      "Coal",
      "Cooked Chicken",
      "Cooked Cod",
      "Cooked Mutton",
      "Cooked Porkchop",
      "Cooked Rabbit",
      "Cooked Salmon",
      "Cookie",
      "Cyan Dye",
      "Debug Stick",
      "Diamond Axe",
      "Diamond Boots",
      "Diamond Chestplate",
      "Diamond Helmet",
      "Diamond Hoe",
      "Diamond Horse Armor",
      "Diamond Leggings",
      "Diamond Pickaxe",
      "Diamond Shovel",
      "Diamond Sword",
      "Dried Kelp",
      "Elytra",
      "Empty Map",
      "Enchanted Book",
      "Enchanted Golden Apple",
      "Map or Explorer Map",
      "Glass Bottle",
      "Golden Apple",
      "Golden Axe",
      "Golden Boots",
      "Golden Carrot",
      "Golden Chestplate",
      "Golden Helmet",
      "Golden Hoe",
      "Golden Horse Armor",
      "Golden Leggings",
      "Golden Pickaxe",
      "Golden Shovel",
      "Golden Sword",
      "Gray Dye",
      "Green Dye",
      "Ink Sac",
      "Iron Ingot ‌[Java Edition only]",
      "Iron Axe",
      "Iron Boots",
      "Iron Chestplate",
      "Iron Helmet",
      "Iron Hoe",
      "Iron Horse Armor",
      "Iron Leggings",
      "Iron Pickaxe",
      "Iron Shovel",
      "Iron Sword",
      "Knowledge Book",
      "Lapis Lazuli",
      "Leather Boots",
      "Leather Cap",
      "Leather Horse Armor",
      "Leather Pants",
      "Leather Tunic",
      "Light Blue Dye",
      "Light Gray Dye",
      "Lime Dye",
      "Magenta Dye",
      "Melon Slice",
      "Milk Bucket",
      "Mushroom Stew",
      "Music Disc (Ward)",
      "Music Disc (Wait)",
      "Music Disc (Stal)",
      "Music Disc (Mellohi)",
      "Music Disc (Mall)",
      "Music Disc (Far)",
      "Music Disc (Chirp)",
      "Music Disc (Cat)",
      "Music Disc (Blocks)",
      "Music Disc (13)",
      "Music Disc (11)",
      "Music Disc (Strad)",
      "Music Disc (Pigstep)",
      "Name Tag",
      "Netherite Axe",
      "Netherite Boots",
      "Netherite Chestplate",
      "Netherite Helmet",
      "Netherite Hoe",
      "Netherite Leggings",
      "Netherite Shovel",
      "Netherite Sword",
      "Netherite Pickaxe",
      "Orange Dye",
      "Pink Dye",
      "Poisonous Potato",
      "Potions",
      "Pufferfish",
      "Pumpkin Pie",
      "Purple Dye",
      "Rabbit Stew",
      "Raw Beef",
      "Raw Chicken",
      "Raw Cod",
      "Raw Mutton",
      "Raw Porkchop",
      "Raw Rabbit",
      "Raw Salmon",
      "Red Dye",
      "Rotten Flesh",
      "Saddle",
      "Shears",
      "Shield",
      "Spectral Arrow",
      "Spider Eye",
      "Steak",
      "Stone Axe",
      "Stone Hoe",
      "Stone Pickaxe",
      "Stone Shovel",
      "Stone Sword",
      "Sugar",
      "Suspicious Stew",
      "Tipped Arrows",
      "Totem of Undying",
      "Tropical Fish",
      "Turtle Shell",
      "Wheat",
      "White Dye",
      "Wooden Axe",
      "Wooden Hoe",
      "Wooden Pickaxe",
      "Wooden Shovel",
      "Wooden Sword",
      "Written Book",
      "Yellow Dye",
      "Banner Pattern (Thing)",
      "Banner Pattern (Skull Charge)",
      "Banner Pattern (Creeper Charge)",
      "Banner Pattern (Globe)",
      "Banner Pattern (Flower Charge)",
      "Blaze Powder",
      "Blaze Rod",
      "Book",
      "Brick",
      "Clay",
      "Clock",
      "Compass",
      "Diamond",
      "Dragon's Breath",
      "Emerald",
      "Feather",
      "Fermented Spider Eye",
      "Firework Star",
      "Flint",
      "Glistering Melon Slice",
      "Glowstone Dust",
      "Gold Ingot",
      "Gold Nugget",
      "Ghast Tear",
      "Gunpowder",
      "Heart of the Sea",
      "Honey Bottle",
      "Honeycomb",
      "Iron Ingot ‌[Bedrock Edition only]",
      "Iron Nugget",
      "Leather",
      "Magma Cream",
      "Nautilus Shell",
      "Nether Brick",
      "Nether Quartz",
      "Nether Star",
      "Netherite Ingot",
      "Netherite Scrap",
      "Paper",
      "Phantom Membrane",
      "Popped Chorus Fruit",
      "Prismarine Crystals",
      "Prismarine Shard",
      "Rabbit Hide",
      "Rabbit's Foot",
      "Scute",
      "Shulker Shell",
      "Slimeball",
      "Stick"
    ];
    //chooses one of the items from list
    var items = choices[Math.floor(Math.random() * choices.length)];
    //the numbers
    var maximum = 64;
    var minimum = 0;
    //chooses random number between the numbers
    var randomnumber =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    var number = randomnumber;

    message.channel.send(`You won **${number} ${items}!**`);
  }

  //images crused
  if (command === "cursed") {
    cursed(message);
}

//images finder
if (command === "image" || command === "img") {
  let uReply = args[0];
  var name = uReply;
  image(message);
}

if (message.content.startsWith(`${prefix}YEETT`)) {
  const embed = new Discord.RichEmbed()
  .addField(`╭╮╱╱╭╮╱╱╱╱╭╮╱╭╮` , `┃╰╮╭╯┃╱╱╱╭╯╰┳╯╰╮`)
  .addField(`╰╮╰╯╭┻━┳━┻╮╭┻╮╭╯`, `╱╰╮╭┫┃━┫┃━┫┃╱┃┃`)
  .addField(`╱╱┃┃┃┃━┫┃━┫╰╮┃╰╮`, `╱╱╰╯╰━━┻━━┻━╯╰━╯`);
  message.channel.send(embed);
}
/*
╭╮╱╱╭╮╱╱╱╱╭╮╱╭╮
┃╰╮╭╯┃╱╱╱╭╯╰┳╯╰╮
╰╮╰╯╭┻━┳━┻╮╭┻╮╭╯
╱╰╮╭┫┃━┫┃━┫┃╱┃┃
╱╱┃┃┃┃━┫┃━┫╰╮┃╰╮
╱╱╰╯╰━━┻━━┻━╯╰━╯
*/

if (message.content.startsWith(`${prefix}creeper`)) {
  const embed = new Discord.RichEmbed()
  .setColor('#8FE38F')
  .addField(`██████████` , `█░░░░░░░░█`)
  .addField(`█░██░░██░█`, `█░██░░██░█`)
  .addField(`█░░░██░░░█`, `█░░████░░█`)
  .addField(`█░░█░░█░░█` , `█░░░░░░░░█`)
  .addField(`██████████`, `──█░░░░█`)
  .addField(`──█░░░░█`, `──█░░░░█`)
  .addField(`──█░░░░█` , `──█░░░░█`)
  .addField(`██████████`, `█░░░██░░░█`)
  .addField(`█░░░██░░░█`, `█▄█▄██▄█▄█`);
  message.channel.send(embed);
}

/*
██████████
█░░░░░░░░█
█░██░░██░█
█░░░██░░░█
█░░████░░█
█░░█░░█░░█
█░░░░░░░░█
██████████
──█░░░░█
──█░░░░█
──█░░░░█
──█░░░░█
──█░░░░█
──█░░░░█
██████████
█░░░██░░░█
█░░░██░░░█
█▄█▄██▄█▄█
*/


  //help
  if (message.content.startsWith(`*help`)) {
    const embed = new Discord.RichEmbed()
      .setColor('#3d728d')
      .setTitle("help menu")
      .setThumbnail(client.user.avatarURL)
      .addField(`**${prefix}minesweeper**`, `play minesweeper on discord`)
      .addField(`**${prefix}ore**`, `randomly chooses a ore`)
      .addField(`**${prefix}ping**`, `says how slow I am`)
      .addField(`**${prefix}beep**`, `says name, boop`)
      .addField(
        `**${prefix}slot**`,
        `under construction slot machine idea thingy`
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
      .setTimestamp();
      
    message.channel.send(embed);
  }
});

//cursed images
function cursed(message){

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + "cursed image",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };

    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        //console.log(urls);

        if (!urls.length) {

            return;
        }

        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
      });
  }

  //images
  function image(message){

      var options = {
          url: `http://results.dogpile.com/serp?qc=images&q=${message}`,
          method: "GET",
          headers: {
              "Accept": "text/html",
              "User-Agent": "Chrome"
          }
      };
      request(options, function(error, response, responseBody) {
          if (error) {
              return;
          }

          $ = cheerio.load(responseBody);

          var links = $(".image a.link");

          var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
          //console.log(urls);
          if (!urls.length) {
              return;
          }
          // Send result
          message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });
    }

