const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = (client, message, args, createur,) => {    
        try {
            function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        let verifLevels = ['NONE', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH'];
        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
            "singapore": ":flag_sg: Singapore",
            "us-central": ":flag_us: U.S. Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. East",
            "us-south": ":flag_us: U.S. South",
            "us-west": ":flag_us: U.S. West",
            "eu-west": ":flag_eu: Western Europe",
            "vip-us-east": ":flag_us: VIP U.S. East",
            "london": ":flag_gb: London",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russia",
            "southafrica": ":flag_za:  South Africa"
        };
        const serveurinfo = new MessageEmbed()
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .addField("Nom", message.guild.name, true)
            .addField("ID", message.guild.id, true)
            .addField(":crown: Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
            .addField(":united_nations: Région", region[message.guild.region], true)
            .addField(":busts_in_silhouette: Total", `${message.guild.members.cache.size}`, true)
            .addField(":bust_in_silhouette: Humains", `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
            .addField(":robot: Bots", `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
            .addField(":passport_control: Verification Level", verifLevels[message.guild.VerificationLevels], true)
            .addField(":speech_balloon: Channels", message.guild.channels.cache.size, true)
            .addField(":fleur_de_lis: Roles", message.guild.roles.cache.size, true)
            .addField(":new: Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
            .setImage(message.guild.iconURL())
            .setThumbnail(message.guild.iconURL())
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        message.channel.send(serveurinfo);
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.SERVEURINFO;
