const {MessageEmbed} = require("discord.js");
const mongoose = require("mongoose");
const { Report } = require("../../models/index");
const { MESSAGES } = require("../../util/constants");
module.exports.run = async (client, message, args) => {  
try {
    const error21 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #21`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut mentionner un utilisateur`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #21`)
    
    const user_mention = message.mentions.members.first();
    if (!user_mention) return message.channel.send(error21);
        const data = await Report.findOne({ 
            guildID: message.guild.id,
            getReportInfo: user_mention,
        });

    if (data) {
       const embed = new MessageEmbed()
       .setAuthor(`${data.reportNumber}`)
       .setTitle(`Report sur __${data.username}__`)
       .setColor(`#FFFF00`)
       .addFields(
           {name: `Nom de l'inculpé:`, value: `<@${data.userID}>`},
           {name: `ID de l'inculpé:`, value: `${data.userID}`},
           {name: `Inculpé à:`, value: `${data.time}`},
           {name: `Dénoncé par:`, value: `${data.reportedBy}`},
           {name: `ID du dénonceur:`, value: `${data.reportedByID}`},
           {name: `Raison:`, value: `${data.reason}`}
       )
       message.channel.send(embed);
    } else {
     message.reply(`No data`) 
    }
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
module.exports.help = MESSAGES.COMMANDS.MODERATION.GETREPORT;