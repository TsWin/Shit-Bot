const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = async (message) => { 
  try {
    const serverQueue = message.client.queue.get(message.guild.id);

  if (!message.member.voice.channel)
    return message.reply("Tu dois d'abbord rejoindre un salon vocal !").catch(console.error);
  if (!serverQueue)
    return message.channel.send("Il n'a rien en cours de lecture pour que je puisse passer à la suivante !").catch(console.error);

  serverQueue.connection.dispatcher.end();
  serverQueue.textChannel.send(`${message.author} ⏭ Musique suivante`).catch(console.error);
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
module.exports.help = MESSAGES.COMMANDS.MUSIQUE.SKIP;
