const { MESSAGES } = require("../../util/constants");
const {MessageEmbed} = require("discord.js");
module.exports.run = async (client, message, args) => {
    try {
        const user_mention = message.guild.member(message.mentions.users.first());  
    const mpmessage = args.slice(1).join(" ")
    if (!user_mention) {
        const error21 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #21`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut mentionner un utilisateur`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #21`)
    message.channel.send(error21);
    }
    if (!mpmessage) {
        const error23 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #23`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut rajouter un message`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #23`)
    message.channel.send(error23);
    }
    try {
    message.channel.send(`<a:green:714873983165530122> | Message envoyé`)
    const destination = message.guild.members.cache.get(user_mention.user.id)
    const destinationembed = new MessageEmbed()
    .setAuthor(`Message reçu de ${message.author.username} du serveur ${message.guild.name}`)
    .setDescription(`${mpmessage}`)
    .setColor(`#ff0`)
    .setTimestamp()
    .setFooter(`Heure d'arrrivé:`)
    destination.send(destinationembed);
    } catch (error) {
        message.reply(`<a:red:714873983157141584> | Message non-envoyé`)
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.SAYMP;