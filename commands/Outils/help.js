const { MessageEmbed } = require('discord.js');
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');
const { MESSAGES } = require("../../util/constants");
//const fs = require("fs");
module.exports.run = (client, message, args, settings) => {        
    try {
        if (!args.length) {
        const embed = new MessageEmbed()
            .setColor("#b4409f")
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ format: "png", dynamic: true }) )
            .setTitle(`:bookmark_tabs: Liste des commandes`)//Nombre de commandes: ${client.commands.size}
            .setDescription(`Besoin d'aide avec le bot faites ${settings.prefix}botsupport\nPour plus d'informations sur une commande, tapez \`${settings.prefix}help <command_name>\`.`)
            .addField(`\u200b`,`\u200b`)
            .setThumbnail(message.guild.iconURL())
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        for (const category of categoryList) {
            embed.addField(
                `<a:annim_arr:714873983484297246> ${category}`,
                `\`${client.commands.filter(cat => cat.help.category === category.toLocaleLowerCase()).map(cmd => cmd.help.name).join('`, `')}\``
            );
        };
        //const categoryList2 = require('../NOUVEAU');
        /*fs.readdir("../NOUVEAU", (err, files) => {
                if(err) return client.log(err, "boldred");
            
                files.forEach(file => {
                    if(!file.endsWith(".js")) return;
            const commandFiles = fs.readdirSync('./commands/').filter(files => files.endsWith('.js'));
console.log(commandFiles);
for(const files of commandFiles) {
    const command = require(`./commands/${files}`);
        const embed2 = new MessageEmbed()
            .setColor("#b4409f")//#36393F
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ format: "png", dynamic: true }) )
            .setTitle(`Voici quelques nouveautés:`)
            .addField(`\u200b`,`\u200b`)
            .setThumbnail(message.guild.iconURL())
            .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
            
                embed2.addField(
                    `<:newemote:717029315845423198> NOUVEAU`,
                    `${map(command).join('`, `')}\``
                );message.channel.send(embed2)
            };
            */
        return message.channel.send(embed);
        }else {
            const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
            const error37 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #37`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Cette commande n'existe pas`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #37`)
    
            if (!command) return message.channel.send(error37);
            const embed = new MessageEmbed()
                .setColor("#b4409f")
                .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ format: "png", dynamic: true }) )
                .setTitle(`\`${command.help.name}\``)
                .addField("Description", `${command.help.description} (cd: ${command.help.cooldown}secs)`)
                .addField("Utilisation", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
            if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
            return message.channel.send(embed);
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.HELP;