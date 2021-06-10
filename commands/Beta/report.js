const {MessageEmbed} = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const mongoose = require("mongoose");
const { Report } = require("../../models/index");
module.exports.run = async (client, message, args, settings) => { 
    try {
        const reportchannel = settings.reportChannel
    var reportList = [
        "Report n˚ 1",
        "Report n˚ 2",
        "Report n˚ 3"
    ]
    
    let result = Math.floor((Math.random() * reportList.length))  
    await message.delete();
    let rUser = message.mentions.members.first();
    let rReason = args.slice(1).join(" ");
    if (!rUser) return message.channel.send(`Pas trouver`);
    if (!rReason) return message.channel.send(`Avec raison`);
        const newReport = new Report({
            _id: mongoose.Types.ObjectId(),
            guildID: message.guild.id,
            guildName: message.guild.name,
            reportNumber: reportList[result],
            getReportInfo: rUser,
            username: rUser.user.username,
            userID: rUser.id,
            reason: rReason,
            reportedBy: message.author,
            reportedByID: message.author.id,
            time: message.createdAt
          });
        newReport.save().then(g => console.log(`Nouveau Report -> ${g.guildName} (${g.guildID})`));
    await message.author.send(':white_check_mark: Votre report a bien été reçu par le staff')
    const embed = new MessageEmbed()
    .setAuthor(`Nouveau Report`)
   .setTitle(`Report sur ${rUser.user.username}__`)
   .setColor(`#FFFF00`)
   .addFields(
        {name: `Nom de l'inculpé:`, value: `<@${rUser.user.id}>`},
       {name: `ID de l'inculpé:`, value: `${rUser.user.id}`},
       {name: `Inculpé à:`, value: `${message.createdAt}`},
       {name: `Dénoncé par:`, value: `${message.author}`},
       {name: `ID du dénonceur:`, value: `${message.author.id}`},
       {name: `Raison:`, value: `${rReason}`})
   client.channels.cache.get(`${reportchannel}`).send(embed);
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.REPORT;
/*const data = await Report.findOne({ 
        guildID: message.guild.id,
        getReportInfo: user_mention,
    });

if (data) {
   const embed = new MessageEmbed()
   .setAuthor(`${data.reportNumber}`)
   .setTitle(`Report sur __${data.username}__`)
   .setColor(`#FFFF00`)
   .addFields(
       {name: `Raporté ID:`, value: `${data.userID}`},
       {name: `Raporté à:`, value: `${data.time}`},
       {name: `Dénoncé par:`, value: `${data.reportedBy}`},
       {name: `Dénonceur ID:`, value: `${data.reportedByID}`},
       {name: `Raison:`, value: `${data.reason}`}
   )*/