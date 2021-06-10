const {Client, Collection} = require('discord.js');

const {loadCommands, loadEvents} = require("./util/loader")

const now = Date.now();
const footer = ".setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())"
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    client.channels.cache.get("700343084822560768").send(x.join(" "));
});
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");
client.queue = new Map();
["commands", "cooldowns", "newUsers"].forEach(x => client[x] = new Collection())
//client.commands = new Collection();

const {dashboard: port} = require("./config");
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen('3000');
setInterval(() => {
  http.get(`http://eva-clan-bot.glitch.me/`);
}, 280000);

loadCommands(client);
loadEvents(client);
client.mongoose.init();
  

client.login(client.config.TOKEN);