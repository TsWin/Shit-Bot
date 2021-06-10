const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
module.exports.run = async (client, message, args, settings) => {
  try {
    message.delete();
  let user = message.guild.member(message.mentions.users.first());
  let reason = (args[2] || 'Aucune raison spécifiée');
  let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
  let muteTime = (args[1] || '10m');
  var muteList = [
    "cas n˚ 1",
    "cas n˚ 2",
    "cas n˚ 3"
]

let result = Math.floor((Math.random() * muteList.length))

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data: {
        name: 'Muted',
        color: '#000',
        permissions: []
      }
    });

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false
      });
    });
  };
  if (!muteTime) {
    const error29 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #29`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut mettre un temp`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #29`)
    
    return message.channel.send(error29);
}
  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> est muté pour ${reason} pendant ${ms(ms(muteTime))}.`);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
    const embed2 = new MessageEmbed()
    .setAuthor(`| **Unmute** | ${user.user.username}`, user.user.displayAvatarURL())
    .setColor("66f542")
    .addFields(
        { name: 'User:', value: `<@${user.id}>`, inline: true },
        { name: 'Id:', value: `${user.id}`, inline: true },
        { name: 'Moderateur:', value: `${client.user}`, inline: true },
        { name: 'Raison:', value: `Auto`, inline: true },


    )
    .setThumbnail(user.user.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Unmuted à:`, message.author.displayAvatarURL());
  client.channels.cache.get(settings.logChannel).send(embed2);
  }, ms(muteTime));

  const embed = new MessageEmbed()
    .setAuthor(`| **Mute ${muteList[result]}** | ${user.user.username}`, user.user.displayAvatarURL())
    .setColor("#ffa500")
    .addFields(
        { name: 'User:', value: `<@${user.id}>`, inline: true },
        { name: 'Id:', value: `${user.id}`, inline: true },
        { name: 'Moderateur:', value: `${message.author}`, inline: true },
        { name: 'Durée:', value: `${ms(ms(muteTime))}`, inline: true},
        { name: 'Raison:', value: `${reason}`, inline: true },


    )
    .setThumbnail(user.user.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Muted à:`, message.author.displayAvatarURL());
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
  
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;

