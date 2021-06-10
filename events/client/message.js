const {Client, Collection} = require('discord.js');
const {botowner} = require('../../config.js');
const { MessageEmbed } = require("discord.js");
//const guildowner = message.guild.ownerID;

module.exports = async (client, message) => {
        const settings = await client.getGuild(message.guild);
        if (!message.content.startsWith(settings.prefix) || message.author.bot) return;
        const guildownersid = ['622541545916334080', '401067518774476800',]
        const args = message.content.slice(settings.prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const user = message.mentions.users.first();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
        if (!command) return message.reply(`La commande \`${commandName}\` ne semble pas exister. Essayez à nouveau!`);
        //if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("tu n'as pas les permissions pour taper cette commande!");
        
        const error15 = new MessageEmbed()
          .setTitle(`<:outage:714873982557487204> Erreur #15`)
          //.setDescription(`Une erreur est survenu, type:`)
          .addField(`Type d'erreur`,`<a:red:714873983157141584> | Tu n'as pas la permission de kick`)
          .setColor(`#ff0000`)
          .setTimestamp()
          .setFooter(`${message.author.username} -> Error #15`);
//======================================================================================================
        const error14 = new MessageEmbed()
          .setTitle(`<:outage:714873982557487204> Erreur #14`)
          //.setDescription(`Une erreur est survenu, type:`)
          .addField(`Type d'erreur`,`<a:red:714873983157141584> | Tu n'as pas la permission de ban des membres`)
          .setColor(`#ff0000`)
          .setTimestamp()
          .setFooter(`${message.author.username} -> Error #14`)

//======================================================================================================
        const error17 = new MessageEmbed()
          .setTitle(`<:outage:714873982557487204> Erreur #17`)
          //.setDescription(`Une erreur est survenu, type:`)
          .addField(`Type d'erreur`,`<a:red:714873983157141584> | Tu n'as pas la permission de gérer channels`)
          .setColor(`#ff0000`)
          .setTimestamp()
          .setFooter(`${message.author.username} -> Error #17`)

//======================================================================================================
        const error18 = new MessageEmbed()
          .setTitle(`<:outage:714873982557487204> Erreur #18`)
          //.setDescription(`Une erreur est survenu, type:`)
          .addField(`Type d'erreur`,`<a:red:714873983157141584> | Tu n'as pas la permission de gérer les messages`)
          .setColor(`#ff0000`)
          .setTimestamp()
          .setFooter(`${message.author.username} -> Error #18`)
//======================================================================================================
        const errorOutOfClass = new MessageEmbed()
          .setTitle(`<:outage:714873982557487204> Erreur #NaN`)
          //.setDescription(`Une erreur est survenu, type:`)
          .addField(`Type d'erreur`,`<a:red:714873983157141584> | Tu n'as pas la permission administrative`)
          .setColor(`#ff0000`)
          .setTimestamp()
          .setFooter(`${message.author.username} -> Error #NaN`) 
        if (command.help.guildOwners === true  && !guildownersid.includes(message.author.id) ) return message.reply(`Le bot ne peut être utilisé que par le fondateur et les personnes qu'il a désigné.`);
        if (command.help.permissionsNIV2 === true && !message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(error18);
        if (command.help.permissionsNIV3 === true && !message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(error15);
        if (command.help.permissionsNIV4 === true && !message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(error14);
        if (command.help.permissionsNIV5 === true && !message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(error17);
        if (command.help.permissionsNIV6 === true && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(errorOutOfClass);
        console.log(commandName);
        
        
          if (command) {
          let ownermode = await (command.help.ownermode);
          let cmdstatus = await (command.help.activated);
          let maintenancestatus = await (command.help.maintenancestatus);
          if (!botowner.includes(message.author.id) && ownermode == true) {
           return message.reply(`:x: Le mode créateur seulement est activé pour cette commande.`)
          };
          if (cmdstatus == false) {
            return message.reply(`:x: La commande est désactivée.`)
          }  
          else if (maintenancestatus == true) {
            return message.reply(`La commande \`${commandName}\` est en maintenance. \nMerci de votre compréhension.`)
          };
        }try {
              if (command.help.args && !args.length) {
                 //message.channel.send(`Il me faut des arguments pour cette commande, ${message.author}!`);
                if (command.help.usage) {//noArgsReply += `\nVoici comment utiliser la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\``
                const error20 = new MessageEmbed()
                  .setTitle(`<:outage:714873982557487204> Erreur #20`)
                  //.setDescription(`Une erreur est survenu, type:`)
                  .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il me faut des arguments pour cette commande`)
                  .addField(`Utilisation:`, `\`${settings.prefix}${command.help.name} ${command.help.usage}\``)
                  .setColor(`#ff0000`)
                  .setTimestamp()
                  .setFooter(`${message.author.username} -> Error #20`)
                  //console.log(error)
                  
              
               return message.channel.send(error20);
              }  
            }
    
              if (command.help.isUserAdmin && !user) return message.reply('Il faut mentionner un utilisateur.');
              if (command.help.isUserAdmin === true && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply("tu ne peux pas utiliser cette commande sur cet utilisateur.");
              if (command.help.isUserAdmin === true && message.guild.member(user).hasPermission('MANAGE_CHANNELS')) return message.reply("tu ne peux pas utiliser cette commande sur cet utilisateur.");
              if (command.help.isUserAdmin === true && message.guild.member(user).hasPermission('ADMINISTRATOR')) return message.reply("tu ne peux pas utiliser cette commande sur cet utilisateur.");
    
              if (!client.cooldowns.has(command.help.name)) {
                client.cooldowns.set(command.help.name, new Collection());
              }
            
              const timeNow = Date.now();
              const tStamps = client.cooldowns.get(command.help.name);
              const cdAmount = (command.help.cooldown || 5) * 1000;
            
              if (tStamps.has(message.author.id)) {
                const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;
            
                if (timeNow < cdExpirationTime) {
                  timeLeft = (cdExpirationTime - timeNow) / 1000;
                  //return message.reply(`Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\`.`);
                  const error19 = new MessageEmbed()
                  .setTitle(`<:outage:714873982557487204> Erreur #19`)
                  //.setDescription(`Une erreur est survenu, type:`)
                  .addField(`Type d'erreur`,`<a:red:714873983157141584> | Cooldown actif`)
                  .addField(`Informations:`, `Merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\``)
                  .setColor(`#ff0000`)
                  .setTimestamp()
                  .setFooter(`${message.author.username} -> Error #19`)
                  return message.channel.send(error19)
                }
              }
              
              tStamps.set(message.author.id, timeNow);
              setTimeout(() => tStamps.delete(message.author.id), cdAmount);
    
              console.log(`${message.author.tag} (${message.author.id}): used ${command.help.name}`);
              command.run(client, message, args, settings,);
             } catch (error) {
                console.error(error);
                message.guild.members.cache.get("401067518774476800").send(`L'utilisateur: <@${message.author.id}>(${message.author.discriminator}) (${message.author.id}) a éxecuté une commande érronée. Il est sur le serveur ${message.guild.name}\nVoici l'erreur:\n${error}`);
                message.reply(`Une erreur est survenue lors de l'éxecution de cette commande! Merci de ne pas spam la commande erronée. Un message sera envoyé dès que je suis prêt. <@${botowner}> a été prévenu de mon dysfonctionnement.`);
            }
        }
