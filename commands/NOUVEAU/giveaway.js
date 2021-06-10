const { MESSAGES } = require("../../util/constants");
const ms = require("ms")
const {MessageEmbed} = require("discord.js");
module.exports.run = async (client, message, args, settings) => { 
    try {
    const error22 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #22`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut choisir un channel`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #22`)
    const error26 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #26`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut choisir un nombre valide`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #26`)
    const error29 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #29`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut mettre un temp`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #29`)
    const error34 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #34`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut rajouter un prix`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #34`)
    const error35 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #35`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Ce n'est pas le bon format du temps`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #35`)
  
        if(!args[0]) return message.channel.send(error29);
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(error35);
        
    
        if(isNaN(args[0][0])) return message.channel.send(error26);
        let channel = message.mentions.channels.first()
        
    
        if(!channel) return message.channel.send(error22);
        let prize = args.slice(2).join(" ")
        
    
        if(!prize) return message.channel.send(error34);
        message.channel.send(`*Giveaway crée dans ${channel}*`)
        let Embed = new MessageEmbed()
        .setTitle(`Nouveau giveaway!`)
        .setDescription(`${message.author} host un giveaway pour comme récompense **${prize}**`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(`BLUE`)
        let m = await channel.send(Embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.get("🎉").count<=1){
                message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`)
                return message.channel.send(`Pas assez de personnes ont réagis pour définir un gagnant :confused:`)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            channel.send(`Le gagnant du giveaway pour **${prize}** est... ${winner}`)
        }, ms(args[0]));  
        

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
module.exports.help = MESSAGES.COMMANDS.FUN.GIVEAWAY;