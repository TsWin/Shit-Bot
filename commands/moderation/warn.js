const { MESSAGES } = require("../../util/constants");
const fs = require("fs");
const { MessageEmbed } = require("discord.js")
//let warns = JSON.parse(fs.readFileSync("../../warnings.json", "utf8"));

module.exports.run = (client, message, args) => {
    try {
        /*const logchannelid = client.config.logChannel;
    let wUser = message.guil.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!wUser) return message.reply(`Utilisateur introuvable`);
    let reason = args.join(" ").slice(22);

    if (!warns[guild.id],[wUser.id]) warns[wUser.id] = {
        warns: 0
    };
    warns[wUser.id].warns++;

    //fs.writeFile("../../warnings.json", JSON.stringify(warns) => {
        //https://www.youtube.com/watch?v=aP3_oS1sjjU
    //});*/
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
module.exports.help = MESSAGES.COMMANDS.MODERATION.WARN;