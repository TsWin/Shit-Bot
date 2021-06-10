const version = (`V1.8.0`);
const { MESSAGES } = require('../../util/constants.js');
const ms = require("ms");
const { MessageEmbed } = require("discord.js")
module.exports.run = (client, message, args, settings) => {
try {
    switch (args[0]) {
    case 'machine':
        message.channel.send(`:signal_strength: __**Information du Bot:**__ \nHeure de démarrage: ${client.readyAt}, \nDurée d'activation:` + ms(client.uptime) + `minutes`);
        message.channel.send('Pinging...')
        .then((m) => {
            let ping = m.createdTimeStamp - message.createdTimeStamp;
            m.edit(`🏓 Pong!\nBot Latency: \`${client.ws.ping}\`ms`)
            //`🏓 Pong! \nBot Latency: \`${ping}\`ms. \nAPI Latency: \`${client.ws.ping}\`ms.`
        }) 
    break;
    case 'pingshard':
            message.channel.send(`Le ping des serveurs ou je suis est de ${guild.shard.ping}ms.`)
    case 'software':
        message.channel.send(`:pencil: Ce bot a été crée par \`TS★win#2509\`.\nJ'ai été programmé avec du discord.js. Pour plus d'information tapez \`${settings.prefix}help\`.\nSi vous voullez contacter le créateur du bot tapez \`${settings.prefix}botsupport\`.`)
    break;
    case 'version':
        message.channel.send(`:tools: Mon système d'exploitation est à la version \`${version}\`.`);
    break;
    case 'utility':
        message.channel.send(`:lock_with_ink_pen: Je suis le bot privé de ${message.guild.name}}`)
    break;
    case 'siteweb':
        message.channel.send(`:chart_with_upwards_trend: Voici le beau site web que TS★win#2509 a crée: https://tsbots.glitch.me`)
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
module.exports.help = MESSAGES.COMMANDS.OUTILS.BOTINFO