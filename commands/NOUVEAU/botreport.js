const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } =require("discord.js");
module.exports.run = async (client, message, args, settings) => {   
    try {
      if (message.deletable) message.delete();
      let array_of_arguments = args.join(" ").split(";");
      if (!args[0])
        return message.channel.send(
          `:wrench: Syntaxe : ${settings.prefix}botreport \`Le type de problème\`; \`Le contexte du problème\`; \`Explication du problème\`;`
        );

      const embed = new MessageEmbed();
      embed.setAuthor(
        `${message.author.username}`,
        client.user.displayAvatarURL()
      );
      embed.setTitle(`Nouveau report pour: \n${array_of_arguments[0]}`, `\u200b`);
      embed.setDescription(`${array_of_arguments[1]}`, `\u200b`);
      embed.setColor(`#FF0000`);
      embed.addField(`${array_of_arguments[2]}`, `\u200b`);
      embed.setTimestamp();
      embed.setFooter(
        `${message.guild.name} BOT, designed by TS★win#2509,`,
        message.guild.iconURL()
      );
      client.guilds.cache.get("712237315728080957").channels.cache.get("717298862611759166").send(embed);  
      message.reply(`:wink: Merci de votre collaboration.`)
    } catch (error) {
        const error1 = new MessageEmbed()
        .setTitle(`<:outage:714873982557487204> Erreur #1`)
        //.setDescription(`Une erreur est survenu, type:`)
        .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il y a eu une erreur lors de l'éxécution de la commande.\nSi l'erreur persiste merci de contacter le support du bot.`)
        .setColor(`#ff0000`)
        .setTimestamp()
        .setFooter(`${message.author.username} -> Error #1`)
        console.log(error)
        const errorLog = new MessageEmbed()
        .setTitle(`<:outage:714873982557487204> Nouvelle erreur`)
        .setDescription(`:bust_in_silhouette: Utilisateur: <@${message.author.id}>#${message.author.discriminator} ID: ${message.author.id}`)
        .setColor(`#ff0000`)
        .addField(`\u200b`,`Information de l'erreur:`)
        .addField(`\u200b`,`:information_source: Commande: ${message.content}`)
        .addField(`\u200b`,`<a:red:714873983157141584> Erreur: ${error}`)
        .setTimestamp()
        .setFooter(`Heure: `)
        client.guilds.cache.get("712237315728080957").channels.cache.get("716333318055919617").send(errorLog);
    message.channel.send(error1);
    }
    
}
module.exports.help = MESSAGES.COMMANDS.OUTILS.BOTREPORT;