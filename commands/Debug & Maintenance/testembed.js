const { MESSAGES } = require("../../util/constants");
module.exports.run = (client, message, args, ) => {    
   try {
       const Discord = require('discord.js');
       const exampleEmbed = new Discord.MessageEmbed()
                       .setColor('#0099ff')
                       .setTitle('Some title')
                       .setURL('https://discord.js.org/')
                       .setAuthor('Some name', message.guild.iconURL(),)
                       .setDescription('Some description here')
                       .setThumbnail(message.guild.iconURL())
                       .addFields(
                           { name: 'Regular field title', value: 'Some value here' },
                           { name: '\u200B', value: '\u200B' },
                           { name: 'Inline field title', value: 'Some value here', inline: true },
                           { name: 'Inline field title', value: 'Some value here', inline: true },
                       )
                       .addField('Inline field title', 'Some value here', true)
                       .setImage(message.guild.iconURL())
                       .setTimestamp(Date)
                       .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
                   
                   message.channel.send(exampleEmbed);
       
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

module.exports.help = MESSAGES.COMMANDS.ADMIN.TESTEMBED;