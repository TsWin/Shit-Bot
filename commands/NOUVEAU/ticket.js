const { MESSAGES } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const checkimg = new MessageAttachment("../../assets/emoji/check.png");
const crossimg = new MessageAttachment("../../assets/emoji/cross.png");
const lockimg = new MessageAttachment("../../assets/emoji/lock.jpg");
const ticketimg = new MessageAttachment("../../assets/emoji/ticket.png");


module.exports.run = async (client, message, args) => {
try {
  // const guildA = client.guilds.cache.get("707211542915186800")
  //  const ticketimg1 = guildA.emojis.cache.get("714077480537030708")
    message.delete()
 
    let TicketEmbed = new MessageEmbed()
    .setColor("#cd3")
    .setAuthor(`${message.guild.name} support`, message.guild.iconURL())
    .setTitle("Besoin d'aide ?")
    .setDescription("Pour créer un ticket d'aide, cliquez sur la réaction")
    .addField(`Problèmes:`,`Si la réaction ne donne aucune réponse, il faut soit :\n 1) Cliquer deux fois sur la réaction\n2) Verifier si le bot est en ligne\n3) Enoyer un rapport de bug`)
    .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
 
    message.channel.send(TicketEmbed).then(async msg => {
        msg.react(`714077480537030708`)
    })
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
module.exports.help = MESSAGES.COMMANDS.MODERATION.ADDMSGTICKET