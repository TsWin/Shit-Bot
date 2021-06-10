const { MESSAGES } = require("../util/constants");
module.exports.run = async (client, message, args) => {
    const { MessageEmbed } = require("discord.js");
    const NotifAnnonce = message.guild.roles.cache.get("SOME_ID");
    const NotifPub = message.guild.roles.cache.get("SOME_ID");
    const NotifYoutube = message.guild.roles.cache.get("SOME_ID");
    const NotifTwitter = message.guild.roles.cache.get("SOME_ID");
    const NotifTwitch = message.guild.roles.cache.get("SOME_ID");
    const NotifSondage = message.guild.roles.cache.get("SOME_ID");
    const NAEmoji = message.guild.emojis.cache.get("SOME_ID");
    const NPEmoji = message.guild.emojis.cache.get("SOME_ID");
    const NYEmoji = message.guild.emojis.cache.get("SOME_ID");
    const NTwitterEmoji = message.guild.emojis.cache.get("SOME_ID");
    const NTwitchEmoji = message.guild.emojis.cache.get("SOME_ID");
    const NSEmoji = message.guild.emojis.cache.get("SOME_ID");

    
    const embed = new MessageEmbed()
        .setTitle("Rôles")
        .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
        .setColor("#dc143c")
        .addField(
          "Les rôles disponibles:",
          `
          ${NAEmoji} - ${NotifAnnonce.toString()}
          ${NPEmoji} - ${NotifPub.toString()}
          ${NYEmoji} - ${NotifYoutube.toString()}
          ${NTwitterEmoji} - ${NotifTwitter.toString()}
          ${NTwitchEmoji} - ${NotifTwitch.toString()}
          ${NSEmoji} - ${NotifSondage.toString()}
          `
        )
        .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL());
    
        client.channels.cache.get('CHANNEL_ID').send(embed).then(async msg => {
          await msg.react(NAEmoji);
          await msg.react(NPEmoji);
          await msg.react(NYEmoji);
          await msg.react(NTwitterEmoji);
          await msg.react(NTwitchEmoji);
          await msg.react(NSEmoji);
        })
    };
module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;