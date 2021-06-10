const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args, settings) => {  
    try {
        const embed = new MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle('<:newemote:717029315845423198> Nouveau')
    .setDescription("Voici les nouveautés de la maj `1.8.0-alpha`")
    .addFields(
    { name: '1) Corrections de bugs', value: `Il y a des bugs internes du bot qui on été règlés.`, inline: false },

    { name: '<:newemote:717029315845423198> 2) Ajout de nouvelles commandes', value: `Ajout de nouvelle commandes: plus d'information ci-dessous `, inline: false },

    { name: '<:newemote:717029315845423198> 2) Ajout d\'une base de données', value: `Pour pouvoir choisir le prefix, channel de log et le message de bienvenue et encore plus: ${settings.prefix}\`config info\``, inline: false },
    
    {name: '<:newemote:717029315845423198> 3) Ajout d\'un système de ticket', value: `Nouveau système de ticket à réaction configurable`, inline: false},

    {name: '<:newemote:717029315845423198> 4) Ajout d\'un système de suggestion', value: `Nouveau système de suggestion à channel configurable`, inline: false},

    {name: '<:beta:717026081684586616> 5) Ajout d\'un système de musique', value: `Nouveau système de musique à réaction **BETA**`, inline: false},
    
    {name: '<:beta:717026081684586616> 6) Ajout d\'un système de report', value: `Nouveau système de report avec récéption de report **BETA**`, inline: false},

    {name: '7) Ajout d\'un site web pour le bot', value: `Ajout d'un site web pour permettre au bot d'être mieux hébergé. **EN COURS DE MODIFICATIONS**`}
    )
    .setColor('#b4409f')
    .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
    message.channel.send(embed)
    const embed2 = new MessageEmbed()
            .setColor("#b4409f")//#36393F
            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ format: "png", dynamic: true }) )
            .setTitle(`Voici quelques nouvelle commandes:`)
            .addField(`<:newemote:717029315845423198> NOUVEAU`, `\`addmembercount\`,\`botreport\`, \`botsupport\`, \`giveaway\`, \`lock\`, \`suggest\`, \`sayembed\`, \`ticket\``)
            .setThumbnail(message.guild.iconURL())
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        message.channel.send(embed2)
        const embed3 = new MessageEmbed()
            .setColor("#b4409f")//#36393F
            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ format: "png", dynamic: true }) )
            .setTitle(`Voici des commande en beta:`)
            .setDescription(`Elles marchent mais peuvent contenir des erreurs et ne contiennent pas toutes leurs fonctionalités\nEn cas de problème ou d'erreur merci de faire \`${settings.prefix}botreport\``)
            .addField(`<:beta:717026081684586616> BETA`, `\`report\`,\`getreport\`, \`pause\`, \`loop\`, \`queue\`, \`remove\`, \`skip\`, \`resume\`, \`stop\`, \`volume\``)
            .setThumbnail(message.guild.iconURL())
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        message.channel.send(embed3)
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.MAJ;