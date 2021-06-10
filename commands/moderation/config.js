const { MESSAGES } = require("../../util/constants");
const {MessageEmbed} = require("discord.js");
module.exports.run = async (client, message, args, settings,) => {    
    try {
        //await message.reply(`Merci de crée un salon \`statut-bot\`. Ensuite merci de taper la commande \`addinterchannel\` dans le salon\`statut-bot\`.`)
    //
    const getSetting = args[0];
    const newSetting = args.slice(1).join(" ");
    switch(getSetting) {
        case "info": {
            //message.reply(`Voici toutes les options disponibles pour la commande \`config\`:\n-logchannel\n-prefix\n-welcomemessage\n-suggestchannel\n-welcomechannel\n-maxplaylistsize\n-addroleregles\n-staffrole`)
            const infoembed = new MessageEmbed()
            .setColor("#ff0000")//#36393F
            .setAuthor(`Panel de configuration`, client.user.displayAvatarURL({ format: "png", dynamic: true }))
            .setDescription(`:gear: Voici les options disponibles:`)
            .addFields(
                { name: '📄•logchannel', value: `\`${settings.prefix}config logchannel <idchannel>\``, inline: true },
                { name: '📡•prefix', value: `\`${settings.prefix}config prefix <nouveau_prefix>\``, inline: true },
                { name: '👋•welcomemessage', value: `\`${settings.prefix}config welcomemessage <votre_message>\``, inline: true },
                { name: '🛂•welcomechannel', value: `\`${settings.prefix}config welcomechannel <channel_id>\``, inline: true },
                { name: '🤷‍•suggestgchannel', value: `\`${settings.prefix}config suggestgchannel <channel_id>\``, inline: true },
                { name: '🚷•reportchannel', value: `\`${settings.prefix}config reportchannel <channel_id>\``, inline: true },
                { name: '🔢•maxplaylistsize', value: `\`${settings.prefix}config maxplaylistsize <nombre>\``, inline: true },
                { name: '🚯•addroleregles', value: `\`${settings.prefix}config addroleregles <role_id>\``, inline: true },
                { name: '👮•staffrole', value: `\`${settings.prefix}config staffrole <role_id>\``, inline: true },)
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
                message.channel.send(infoembed);
        }
        break;
        case "logchannel": {
            if (newSetting) {
                await client.updateGuild(message.guild, { logChannel: newSetting });
                return message.channel.send(`:gear: Log channel mis à jour: \`${settings.logChannel}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Log channel actuel: \`${settings.logChannel}\``)
        }
        break;  
        case "prefix": {
            if (newSetting) {
                await client.updateGuild(message.guild, { prefix: newSetting });
                return message.channel.send(`:gear: Prefix mis à jour: \`${settings.prefix}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Prefix actuel: \`${settings.prefix}\``)
        }
        break;
        case "welcomemessage": {
            if (newSetting) {
                await client.updateGuild(message.guild, { welcomeMessage: newSetting });
                return message.channel.send(`:gear: Welcome message mis à jour: \`${settings.welcomeMessage}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Welcome message actuel: \`${settings.welcomeMessage}\``)
        }
        break;
        case "suggestchannel": {
            if (newSetting) {
                await client.updateGuild(message.guild, { suggestChannel: newSetting });
                return message.channel.send(`:gear: Salon de suggestion mis à jour: \`${settings.suggestChannel}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Salon de suggestion actuel: \`${settings.suggestChannel}\``)
        }
        break;
        case "reportchannel": {
            if (newSetting) {
                await client.updateReport(message.guild, { reportChannel: newSetting });
                return message.channel.send(`:gear: Report channel mis à jour: \`${settings.reportChannel}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Report channel actuel: \`${settings.reportChannel}\``)
        }
        break;
        case "welcomechannel": {
            if (newSetting) {
                await client.updateGuild(message.guild, { welcomeChannel: newSetting });
                return message.channel.send(`:gear: Salon de message de bienvenue mis à jour: \`${settings.welcomeChannel}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Salon de message de bienvenue actuel: \`${settings.welcomeChannel}\``)
        }
        break;
        case "maxplaylistsize": {
            if (newSetting) {
                await client.updateGuild(message.guild, { maxPlaylistSize: newSetting });
                return message.channel.send(`:gear: Nombre de morceaux maximum par playlist mis à jour: \`${settings.maxPlaylistSize}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Nombre de morceaux maximum par playlist actuel: \`${settings.maxPlaylistSize}\``)
        }
        break;
        case "addroleregles": {
            if (newSetting) {
                await client.updateGuild(message.guild, { roleRegles: newSetting });
                return message.channel.send(`:gear: Identifiant du rôle à donner mis à jour: \`${settings.roleRegles}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Identifiant du rôle à donner actuel: \`${settings.roleRegles}\``)
        }
        break;
        case "staffrole": {
            if (newSetting) {
                await client.updateGuild(message.guild, { staffRole: newSetting });
                return message.channel.send(`:gear: Role staff mis à jour: \`${settings.staffRole}\`-> \`${newSetting}\``);
            }
            message.channel.send(`Role staff actuel: \`${settings.staffRole}\``)
        }
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
module.exports.help = MESSAGES.COMMANDS.MODERATION.CONFIG;