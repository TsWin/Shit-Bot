const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = (client, message, args) => {
    try {
    /*const embed = new MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle("Prochaine Maj")
      .setDescription("Dans bientôt une semaine il'y aura une nouvelle maj")
      .addFields(
        {
          name: "1) Corrections de bugs",
          value: `Il y a des bugs internes du bot qui doivent êtres règlés.`,
          inline: false,
        },

        {
          name: "2) Ajout de nouvelles commandes",
          value: `Ajout des commandes: \n-\`lock\`\n-\`config+???\`\n-\`regles\`\n-\`warn\`\n-\`fun commands\` et plus encore`,
          inline: false,
        },

        {
          name: "3) Modification de la base de données",
          value: `Ajout de configuration du channel de log et du message de bienvenue `,
          inline: false,
        },

        {
          name: "4) Modification du site web pour le bot",
          value: `Scripte permettant au bot d'être mieux hébergé.`,
        }
      )
      .setColor("ebe709")
      .setFooter(
        `${message.guild.name} BOT, designed by TS★win#2509,`,
        message.guild.iconURL()
      );
    message.channel.send(embed)*/
    const embed = new MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle("Prochaine Maj")
    .setDescription(`Pour plus d'informations rejoignez le [serveur de support](https://discord.gg/SuBXG2s 'Lien d'invitation discord pour rejoindre le serveur disord de support')`)
    .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`,message.guild.iconURL());
    message.channel.send(embed)
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

module.exports.help = MESSAGES.COMMANDS.OUTILS.AVENIR;