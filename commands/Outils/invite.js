const { MESSAGES } = require("../../util/constants");
const {MessageEmbed} = require("discord.js");
module.exports.run = (client, message, args,) => {
try {
    if (message.author.id === `401067518774476800` ) {
            const invite = new MessageEmbed()
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL(),)
            .setTitle("Voici la démarche à suivre pour pouvoir m'inviter:")
            .setDescription(`Ce lien est privé, merci de n'en faire usage qu'une fois. Si vous avez accès à ce message c'est que vous avez établi des conditions avec mon créateur, merci de les respecter.`)
            .addField("Lien", `https://discord.com/api/oauth2/authorize?client_id=714567568526147666&permissions=8&scope=bot`)
            .setThumbnail(message.guild.iconURL())
            .setImage(message.guild.iconURL())
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        message.author.send(invite);
        message.reply(`Vous avez reçu une invitation confidentielle dans vos MP`);
        }else {
            message.reply(`:x: Vous n'êtes pas autorisé à avoir accès à ce lien confidentiel, merci de contacter le serveur de support pour les condition d'accisition. `)
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.INVITE;