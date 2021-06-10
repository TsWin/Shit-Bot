const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args, settings) => {
const {botowner} = require('../../config.js') 
const fs = require('fs');
const fail = (":x: Tu n'as pas le droit d'exécuter cette commande, si nécéssaire merci de demander à <@401067518774476800>, le créateur du bot.`)");
const log = message.guild.channels.cache.get(settings.logChannel);
//client.channels.cache.get('707239194019496036');
const commandes = client.channels.cache.get('707211543745527933');
let arg1 = args[0];
let arg2 = args[1];
let arg3 = args[2];
let arg4 = args[3];
try {
    if (arg1 === 'enable') {
        if (message.author.id === "401067518774476800") {
        const write = require('../../module.json');
        //editedmessage = message.content.slice (18);
        write [commands.name.args[1]] = {
            activated: args[2]//editedmessage
        }
        fs.writeFile ("./module.json", JSON.stringify(endis, null, 4), err => {
            if (err) throw err;
            
        })
        message.reply(":white_check_mark: Enregistré :white_check_mark:");
        }else message.channel.send(':x: Non autorisée :x:')
    
    } /*else if (message.author.id === botOwnerID) {
      if (message.content.startsWith('!!getremember')) {
        const endis = require('./module.json');
        let reponse = endis [message.author.username].message;
        message.channel.send("Your note :" + reponse);
      }}*/
    switch (arg1) {
        case 'settype':
            switch (arg2) {
                case 'PLAYING':
                    if (message.author.id === botowner) {
                        client.user.setActivity({ type: 'PLAYING'}, {name: '!!help => aide'});//!!help => aide, PLAYING
                        message.reply(`Le type d'action a été modifié pour: PLAYING`)
                        log.forEach(e => {
                            client.channels.cache.find(c => c.log === e).send(`:green_circle: *Bot en ligne*\n:white_check_mark: Tout les services du BOT <@${client.user.id}> sont disponibles. Si le bot a un problème merci de prévenir TS*Win#2509 ou d'éxecuter la commande: \`${settings.prefix}botsupport\``);
                        })
                    }else {fail}
                break;
                case 'LISTENING':
                    if (message.author.id === botowner) {
                        client.user.setActivity({ type: 'LISTENING'}, {name: 'le créateur me coder'});//le créateur me coder, LISTENING
                        message.reply(`Le type d'action a été modifié pour: LISTENING`)
                        log.forEach(e => {
                            client.channels.cache.find(c => c.log === e).send(`:green_circle: *Bot en ligne*\n:white_check_mark: Tout les services du BOT <@${client.user.id}> sont disponibles. Si le bot a un problème merci de prévenir TS*Win#2509 ou d'éxecuter la commande: \`${settings.prefix}botsupport\``);
                        })
                    }else {fail}
                break;
                case 'WATCHING':
                    if (message.author.id === botowner) {
                        client.user.setActivity({ type: 'WATCHING'}, {name: 'le serveur 👀'});//le serveur 👀, WATCHING
                        message.reply(`Le type d'action a été modifié pour: WATCHING`)
                        log.forEach(e => {
                            client.channels.cache.find(c => c.log === e).send(`:green_circle: *Bot en ligne*\n:white_check_mark: Tout les services du BOT <@${client.user.id}> sont disponibles. Si le bot a un problème merci de prévenir TS*Win#2509 ou d'éxecuter la commande: \`${settings.prefix}botsupport\``);
                        })
                    }else {fail}
                break;
                case 'MAINTENANCE':
                    if (message.author.id === botowner) {
                        client.user.setActivity({ type: 'PLAYING'}, {name: `EN MAINTENANCE`});
                        message.reply(`Le type d'action a été modifié pour: EN MAINTENANCE `)
                        log.forEach(e => {
                            client.channels.cache.find(c => c.log === e).send(`:orange_circle: *Bot en Maintenance*\n:x: Certains services du BOT <@${client.user.id}> sont indisponibles. Merci de patienter.`);
                        })
                    }else {fail}
                break;
            }
        break;
        case 'setgame':
            switch (arg2) {
                case 'W':
                    if (message.author.id === botowner) {
                        editedmessage = message.content.slice (21);
                        client.user.setActivity({ type: 'WATCHING'}, {name: `${editedmessage}`})
                        message.reply(`Le jeux a été modifié pour: ${arg3}${arg4} `)
                    } else {fail}
                break;
                case 'P':
                    if (message.author.id === botowner) {
                        editedmessage = message.content.slice (21);
                        client.user.setActivity({ type: 'PLAYING'}, {name: `${editedmessage}`})
                        message.reply(`Le jeux a été modifié pour: ${arg3}${arg4} `)
                    } else {fail}
                break;
                case 'L':
                    if (message.author.id === botowner) {
                        editedmessage = message.content.slice (21);
                        client.user.setActivity({ type: 'LISTENING'}, {name: `${editedmessage}`})
                        message.reply(`Le jeux a été modifié pour: ${arg3}${arg4} `)
                    } else {fail}
                break;
            }
        break;
        case 'status':
            switch (arg2) {
                case 'online':
                    if (message.author.id === botowner) {
                        client.user.setPresence({status: 'online'})
                    } else {fail}
                break;
                case 'idle':
                    if (message.author.id === botowner) {
                        client.user.setPresence({status: 'idle'})
                    } else {fail}
                break;
                case 'dnd':
                    if (message.author.id === botowner) {
                        client.user.setPresence({status: 'dnd'})
                    } else {fail}
                break;
                case 'invisible':
                    if (message.author.id === botowner) {
                        client.user.setPresence({status: 'invisible'})
                    } else {fail}
                break;
            }
        break;    
        case 'demarrage':
            if (message.author.id === botowner) {
                log.forEach(e => {
                    client.channels.cache.find(c => c.log === e).send(`:green_circle: *Bot en ligne*\n:white_check_mark: Tout les services du BOT <@${client.user.id}> sont disponibles. Si le bot a un problème merci de prévenir TS*Win#2509 ou d'éxecuter la commande: \`${settings.prefix}botsupport\``);
                })
            } else {fail}
        break;
        case 'username':
            if (message.author.id === botowner) {
                client.user.setUsername(arg2, 'BOT' )
                message.reply(`My new username is ${client.username}.`)
            } else {fail}
        break;
        case 'shutdown':
            if (message.author.id === botowner) {      
                message.reply(`:warning: The bot <@${client.user.id}> will now shut down.\n`
                                + 'Please confirm with `yes` or deny with `no`.');
                message.channel.awaitMessages(m => m.author.id == message.author.id,
                    {max: 1, time: 30000}).then(collected => {
                if (collected.first().content.toLowerCase() == 'yes') {
                    log.send(`:red_circle: *Bot offline*\n Nous sommes désolés pour cette interruption. Pour plus d'informations merci de contacter les administrateurs.`)
                    log.forEach(e => {
                        client.channels.cache.find(c => c.log === e).send(`:red_circle: *Bot offline*\n Nous sommes désolés pour cette interruption de <@${client.user.id}>. Pour plus d'informations merci de contacter les administrateurs.`);
                    })
                    message.reply(`:white_check_mark: Shutting down... ,<@${client.user.id}>`)
                    .then(client => 
                        {setTimeout(function() {
                        client.destroy();
                        }, 3000)});
                                                    
                    }else
                        message.reply(':x: Operation canceled.');      
                        }).catch(() => {
                            message.reply(':stopwatch: No answer after 30 seconds, operation canceled.');
                        })
            } else {fail}
        break;
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

module.exports.help = MESSAGES.COMMANDS.ADMIN.SETTINGS;