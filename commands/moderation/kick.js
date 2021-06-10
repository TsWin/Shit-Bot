const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
module.exports.run = (client, message, args, settings) => {
  try {
    message.delete();
    
    let user = message.mentions.users.first();
    const error25 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #25`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | L'utilisateur n'existe pas`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #25`);
    let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
    user ? message.guild.member(user).kick(reason) : message.channel.send(error25);
    message.delete();
    message.channel.send(`${user} a été kick.`)
    var kickList = [
      "cas n˚ 1",
      "cas n˚ 2",
      "cas n˚ 3"
  ]
  
  let result = Math.floor((Math.random() * kickList.length))

  /*const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
  client.channels.cache.get('707211544122884130').send(embed);*/
  const embed = new MessageEmbed()
    .setAuthor(`**Ban - ${kickList[result]}** | ${user.username}`, user.user.displayAvatarURL())
    .setColor("#ffa500")
    .addFields(
        { name: 'User:', value: `${user}`, inline: true },
        { name: 'Id:', value: `${user.id}`, inline: true },
        { name: 'Moderateur:', value: `${message.author}`, inline: true },
        { name: 'Raison:', value: `${reason}`, inline: true },


    )
    .setThumbnail(user.user.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Kick à:`, message.author.displayAvatarURL());
    
  client.channels.cache.get(settings.logChannel).send(embed);
  //client.channels.cache.get('707211544122884131').send(`:warning: Membre kick: <@${member.id}>`); // A MODIFIER SPECIAL SERVEUR

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
  
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;