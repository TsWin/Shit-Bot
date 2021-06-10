const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = (client, message, args) => {
    try {
        //const Discord = require("discord.js");
        //const command = args.shift().toLowerCase();
const error26 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #26`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut choisir un nombre valide`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #26`);
//======================================================================================================
const error27 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #27`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Le montant des messages à supprimer doit être compris entre 2 et 100.`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #27`)
    
//======================================================================================================
const error28 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #28`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il y a eu une erreur lors de la suppression des messages!`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #28`)
    
            const amount = parseInt(args[0]);
            if (isNaN(amount)) {
                return message.channel.send(error26);
            } else if (amount < 2 || amount > 100) {
                return message.channel.send(error27);
            }
            message.channel.bulkDelete(amount + 1, true).catch(err => {
                console.error(err);
                message.channel.send(error28);
                
            });
            message.channel.send(`${amount} messages suprimés !`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 5000)});
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
// FINIR PERM + EMBED LOG
module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;