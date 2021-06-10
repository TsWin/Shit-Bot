const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
module.exports.run = (client, message, args) => {   
    try {
        let messageToBot = args.join('');
    message.delete().catch();
    let mChannel = message.mentions.channels.first()
    let array_of_arguments = args.slice(1).join(" ").split(";");
    const error24 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #24`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut choisir un channel`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #24`)
    
if (!mChannel) return message.channel.send(error24);
if (!args[0]) return message.channel.send("Syntaxe : !!annonce #salon **`Titre`; `Description`; `Texte`; `Couleur en Hexa code (par défaut noir)`; `Lien d'une image (par défaut icone du serveur)`;**");

const embed = new MessageEmbed()
    embed.setAuthor(`${message.author.username}`, client.user.displayAvatarURL());
    embed.setTitle(`${array_of_arguments[0]}`,`\u200b`);
    embed.setDescription(`${array_of_arguments[1]}`,`\u200b`);
    embed.setColor(`#${array_of_arguments[3]}`,`\u200b`);
    embed.addField(`${array_of_arguments[2]}`,`\u200b`);
    embed.setThumbnail(array_of_arguments[4] || message.guild.iconURL(),`\u200b`);
    embed.setTimestamp();
    embed.setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL(),);
    
  
  
mChannel.send(embed);
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
//A FINIR
module.exports.help = MESSAGES.COMMANDS.MODERATION.ANNONCE;