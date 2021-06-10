const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
    try {
        //const user_mention = message.mentions.users.first();
        //if (message.mentions.users.first()) {
        if (!message.mentions.users.size) {
            message.channel.send(`:zany_face: Ton avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`)
            const embed = new MessageEmbed()
            .setAuthor(message.author.username)
            .setTitle(`Voici votre avatar:`)
            .setImage(message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .setTimestamp()
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
            message.channel.send(embed);
         } else {
         const avatarList = message.mentions.users.map(user => {
             return `:open_mouth: ${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
         })
        message.channel.send(avatarList);
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.AVATAR;
    