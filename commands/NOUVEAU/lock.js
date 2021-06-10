const { MESSAGES } = require("../../util/constants");
const validateFlag = f => f === 'true' || f === 'false' || f === 'null';
const { MessageEmbed } = require("discord.js")
const IGNORED = new Set([
]);

module.exports.run = (client, message, args) => {
  try {
    const error36 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #36`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il faut choisir un rôle`)
    .setColor(`#ff0000`)
    .setTimestamp()
    .setFooter(`${message.author.username} -> Error #36`)
    
    if(args.length !== 2) 
  return message.channel.send('?lock <ROLE_ID> TRUE | FALSE | NULL'); 
    let roleId = args[0];
    let flag = args[1];
    if(!isNaN(roleId) && validateFlag(flag.toLowerCase())) {
      if(message.guild.roles.cache.has(roleId)) {
        flag = flag.toLowerCase() === 'true' ? true : (flag.toLowerCase() === 'false' ? false : null);
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        channels.forEach(channel => {
          if(!IGNORED.has(channel.id)) {
            channel.updateOverwrite(roleId, {
              SEND_MESSAGES: !flag
            }).then(g => {
              console.log(`Updated ${g.name} (${g.id})`);
              message.reply(`:white_check_mark: Fait`); 
              if(flag) {
                if(!g.name.endsWith('🔒')) {
                  g.edit({ name: g.name + ' 🔒'});
                }
              } else {
                g.edit({ name: g.name.replace(/\s*🔒/, '')});
              }
            })
            .catch(err => console.log(err));
          } else {
            console.log(`Ignoré: ${channel.name} (${channel.id})`);
          }
        });
      }
      else {
        message.channel.send(error36);
      }
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
module.exports.help = MESSAGES.COMMANDS.MODERATION.LOCK;