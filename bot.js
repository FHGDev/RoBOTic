const d = require('discord.js');
const bot = new d.Client();
const prefix = process.env.prefix

bot.on("ready", ready => {
  console.log("RoBOTic Version 0.0.1 Loaded!")
  bot.user.setGame("j!help | Serving the owner.")
})

bot.on("message", message => {
  if (message.content == prefix + "help") {
    message.channel.send("Only a help command. More later! :grin:")
  }
  if (message.content == prefix + "ping") {
    message.channel.send("PONG! :ping_pong: My ping is " + bot.ping + "ms.")
  }
})

bot.login(process.env.tok)
