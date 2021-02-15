const Discord = require('discord.js');
const cheerio = require('cheerio');
const request = require('request');

module.exports.run = async(bot, message, args) => {
    if (!message.content.startsWith(process.env.PREFIX)) return;

    image(message.toString());

    //images
    function image(messageRequest) {

        var options = {
            url: `http://results.dogpile.com/serp?qc=images&q=" + "cursed image" + ${messageRequest}`,
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
            var messageUrl = urls[Math.floor(Math.random() * urls.length)];
            //console.log(messageUrl);
            message.channel.send(messageUrl);
        });

    }

}

module.exports.help = {
    name: "cursed",
    aliases: [""]
}