const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
module.exports.run = (client, message, args, settings) => {
  try {
    message.delete();
  let user = message.guild.member(message.mentions.users.first());
  let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
  let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
  const error30 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #30`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Le rôle \`muted\` n'existe pas`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #30`)
    
  if (!muteRole) return message.channel.send(error30);
  const error31 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #31`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | L'utilisateur n'est pas muté`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #31`)
   
  if (!user.roles.cache.has(muteRole.id)) return  message.channel.send(error31);
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> n'est plus muté pour ${reason}.`);
  var muteList = [
    "cas n˚ 1",
    "cas n˚ 2",
    "cas n˚ 3"
]

let result = Math.floor((Math.random() * muteList.length))


  const embed = new MessageEmbed()
    .setAuthor(`Unmute - ${muteList[result]}| ${user.username}`, user.user.displayAvatarURL())
    .setColor("#ffa500")
    .addFields(
        { name: 'User:', value: `<@${user.id}`, inline: true },
        { name: 'Id:', value: `${user.id}`, inline: true },
        { name: 'Moderateur:', value: `${message.author}`, inline: true },
        { name: 'Raison:', value: `${reason}`, inline: true },


    )
    .setThumbnail(user.user.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Unmuted à:`, message.author.displayAvatarURL());
    
  client.channels.cache.get(settings.logChannel).send(embed);
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
module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;