const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args, settings) => {   
    try {
        message.delete();
    let suggestion = args.join(" ");

    message.channel.send(`:wink: Merci pour votre suggestion`);
    const embed = new MessageEmbed()
    .setColor("#FFFF33")
    .setTitle("Nouvelle Suggestion")
    .setDescription(`${suggestion}`)
    .setFooter(`Suggestion de ${message.author.username}`, message.author.displayAvatarURL())
        client.channels.cache.get(`${settings.suggestChannel}`).send(embed).then(async msg => {
        await msg.react("✅")
        await msg.react("❌")
    });
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.SUGGEST;