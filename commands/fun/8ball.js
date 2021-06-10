const { MESSAGES } = require("../../util/constants");
const {MessageEmbed} = require("discord.js");
module.exports.run = async (client, message, args, settings) => {   
    try {
        const error23 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #23`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut rajouter un message`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #23`)
    
        let question = message.content.slice(settings.prefix.length+5)
        if(!question) return message.channel.send(error23);
        else{
            let responses=[
                "Oui",
                "Non",
                "Jamais",
                "Absolument",
                "Peut-être",
            ]
            let response = responses[Math.floor(Math.random()*(responses.length)-1)]
            let Embed = new MessageEmbed()
            .setTitle(`8Ball!`)
            .setDescription(`Question: ${question}\nMa réponse: ${response}`)
            .setColor(`RANDOM`)
            message.channel.send(Embed)
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
module.exports.help = MESSAGES.COMMANDS.FUN.BALL;