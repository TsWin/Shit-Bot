const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, messageReaction, args, user)=> {       
        try {
          const Verification = message.guild.roles.cache.get("707211542915186804");
        const member = message.guild.members.cache.get(message.author.id);
        //const emoji = messageReaction.emoji.name;
        const regles1 = new MessageEmbed()
                .addField("Server Owner:", message.guild.owner.user.tag, true)
                .setTitle("Règles du serveur:")
                .setDescription(":arrow_forward: Principal")
                .setColor("eb0909")
                .addField("Numéro 1" , "- Le non respect sera sanctionné.")
                .addField("Numéro 2" , "- Tout message ou image déplacé(e), injurieux(se), violent(e), raciste, sexiste, pornographique, ect... est strictement interdit.")
                .addField("Numéro 3" , "- Toute forme de harcèlement sera sévèrement punie.")
                .addField("Numéro 4" , "- Tout abus de majuscules ou de flood est interdit.")
                .addField("Numéro 5" , "- Le language SMS est toléré, cependant, un abus sera sanctionné.")
                .addField("Numéro 6" , "- Ce serveur est francophone, merci d'écrire et de parler en français.")
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        const regles2 = new MessageEmbed()    
                .setTitle("Règles du serveur page 2:")
                .setDescription(':arrow_forward: Savoir-vivre')
                .setColor("eb0909")
                .addField("Numéro 7" , "- Les propos portant sur la politique, la religion ou autres sont interdits.")
                .addField("Numéro 8" , "- Toute forme de nuisance sonore dans les salons vocaux pourra être sanctionnée.")
                .addField("Numéro 9" , "- Toute forme de spam sera sévèrement punie.")
                .addField("Numéro 10" , "- Les trolls sont strictements interdit, et sévèrement punis.")
                .addField("Numéro 11" , "- Un abus de mentions sera sanctionné.")
                .addField("Numéro 12" , "- Les émojis et images à caractères épileptiques sont interdits.")
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        const regles3 = new MessageEmbed()
                .setTitle("Règles du serveur page 3:")
                .setDescription(':arrow_forward: Bonne Conduite')
                .setColor("eb0909")
                .addField("Numéro 13" , "- Tout spoil sera sanctionné.")
                .addField("Numéro 14", "- Toute contestation de l'autorité d'un membre de l'équipe de Modération pourra être sanctionnée.")
                .addField("Numéro 15", "- Si votre nickname n'est pas adapté, le staff se réserve le droit de changer votre surnom. ")
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        const reglesfin = new MessageEmbed()
                .setTitle(":arrow_down: Pour pouvoir accéder au serveur merci de cliquer sur la réaction en dessous. :arrow_down:")
                .setDescription(`Merci de votre compréhension\n${message.guild.name},`)    
                .setColor("eb0909") 
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
        message.channel.send(regles1);
        message.channel.send(regles2);
        message.channel.send(regles3);
        ///message.channel.send(reglesfin);
        message.channel.send(reglesfin).then(async msg => {
                 msg.react('714873983165530122');
                 msg.react('714873983157141584');
        
        /*const filter = (reaction) => {
                return [':green:', ':red:'].includes(reaction.emoji.name);//'✅', '❌'
            };
            
            msg.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                    let author = message.author
        if (reaction.emoji.name === ":green:") {
                member.roles.add(Verification);
                const embed = new MessageEmbed()
                .setAuthor(`${client.user.username}`, message.guild.iconURL())
                .setTitle(`Merci d'avoir accepté le règlement`)
                .setTimestamp()
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
                message.channel.send(embed)
                .then(message => 
                    {setTimeout(function() {
                    message.delete();
                }, 3000)});
        }
        if (reaction.emoji.name === ":red:") {
            const embed = new MessageEmbed()
                .setAuthor(`${client.user.username}`, message.guild.iconURL())
                .setTitle(`Merci d'avoir pas accepté le règlement`)
                .setTimestamp()
                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
                message.channel.send(embed)
                .then(embed => 
                    {setTimeout(function() {
                        embed.delete();
                    }, 3000)})
                .then(message =>
                    {setTimeout(function() {
                        message.member(user).kick(`Règlement non accepté`)
                    }, 5000)});
        }
})
        })
                /*const filter = (reaction) => {
                        return ['✅', '❌'].includes(reaction.emoji.name);
                    };
                    
                    msg.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
                        .then(collected => {
                            const reaction = collected.first();
                            let author = message.author
                        
                        if (reaction.emoji.name === '✅') {
                                
                                const embed = new MessageEmbed()
                                .setAuthor(`${client.user.username}`, message.guild.iconURL())
                                .setTitle(`Merci d'avoir accepté le règlement`)
                                .setTimestamp()
                                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
                                message.channel.send(embed)
                                .then(embed => 
                                        {setTimeout(function() {
                                        embed.delete();
                                }, 3000)});
                        } else if (reaction.emoji.name === '❌') {
                                const embed = new MessageEmbed()
                                .setAuthor(`${client.user.username}`, message.guild.iconURL())
                                .setTitle(`Merci d'avoir pas accepté le règlement`)
                                .setTimestamp()
                                .setFooter(`${message.guild.name} BOT, designed by TS★win#2509,`, message.guild.iconURL())
                                message.channel.send(embed)
                                .then(embed => 
                                        {setTimeout(function() {
                                        embed.delete();
                                }, 3000)});}
                })/*.catch(collected => {
                        message.channel.send(`temps écoulé`)
                        .then(message => 
                                {setTimeout(function() {
                                message.delete();
                        }, 3000)});
                        })
                
                
        })
        }catch {
                message.reply(`Pour que la réaction soit ajoutée, ili faut qu'un salon \`reglement\` éxiste.`)
        }

           // guild.channels.cache.find(channel => channel.name === "╠➩📚・règlement")*/  
})    
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
module.exports.help = MESSAGES.COMMANDS.MODERATION.REGLES;