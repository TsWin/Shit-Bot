const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = (client, message, args, footer, createur,) => {
        try {
          const user_mention = message.mentions.users.first();
        if (!message.mentions.users.size) {
        
        const userinfo = new MessageEmbed()
                .setAuthor(`${message.author.username}`, client.user.displayAvatarURL())
                .setDescription("Information sur")
                .setColor("#818386")
                .setThumbnail(`${message.author.displayAvatarURL()}`)
                .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
                .addField("ID", message.author.username)
                .addField("Pseudo:", `${message.member !== null ? `${message.nickname}` : 'None'}`, true)
                .addField("Crée le", message.author.createdAt)
                .addField("A rejoint le serveur le:", message.member.joinedAt)
                .addField("Roles:", `${message.member.roles}`)
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
          message.channel.send(userinfo);
        } else if (user_mention) {
        const userinfo = new MessageEmbed()
                .setAuthor(`${user_mention.username}`, client.user.displayAvatarURL())
                .setDescription("Information sur")
                .setColor("#818386")
                .setThumbnail(`${user_mention.displayAvatarURL()}`)
                .addField("Full Username", `${user_mention.username}#${user_mention.discriminator}`)
                .addField("ID", user_mention.username)
                //.addField("Pseudo:", `${user_mention.guild.membe.nickname !== null ? `${user_mention.guild.member.nickname}` : 'Aucun'}`, true)
                .addField("Crée le", user_mention.createdAt)
                .addField("A rejoint le serveur le:", message.member.joinedAt)
                .addField("Roles:", `${message.member.roles}`)
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
          message.channel.send(userinfo);

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
module.exports.help = MESSAGES.COMMANDS.OUTILS.USERINFO;