module.exports = async (client, messageReaction, user, settings) => {
    var userTickets = new Map();
    const cdseconds = 5;
    const { MessageEmbed, MessageAttachment } = require("discord.js");
    //const checkimg = new MessageAttachment("../../assets/emoji/check.png");
    //const crossimg = new MessageAttachment("../../assets/emoji/cross.png");
    //const lockimg = new MessageAttachment("../../assets/emoji/lock.jpg");
    //const ticketimg = new MessageAttachment("../../assets/emoji/ticket.png");
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '707211543489675290');
    const NotifAnnonce = message.guild.roles.cache.get("707211543330291795");
    const NotifPub = message.guild.roles.cache.get("707211543325966405");
    const NotifYoutube = message.guild.roles.cache.get("707211543325966404");
    const NotifTwitter = message.guild.roles.cache.get("707211543325966403");
    const NotifTwitch = message.guild.roles.cache.get("707211543325966402");
    const NotifSondage = message.guild.roles.cache.get("707211543325966401");
    const Verification = message.guild.roles.cache.get("707211543330291803");
    if (member.user.bot) return;

    if (messageReaction.partial) {
        await messageReaction.fetch();
        return;
    }
  
    if (["ding", "megaphone", "youtube", "twitter", "twitch", "statistic", "✅"].includes(emoji) && message.channel.id === channel.id) {
      switch (emoji) {
        case "ding":
            member.roles.add(NotifAnnonce);
            message.channel.send(`Le rôle ${NotifAnnonce.name} a été ajouté avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "megaphone":
            member.roles.add(NotifPub);
            message.channel.send(`Le rôle ${NotifPub.name} a été ajouté avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "youtube":
            member.roles.add(NotifYoutube);
            message.channel.send(`Le rôle ${NotifYoutube.name} a été ajouté avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "twitter":
            member.roles.add(NotifTwitter);
            message.channel.send(`Le rôle ${NotifTwitter.name} a été ajouté avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "twitch":
            member.roles.add(NotifTwitch);
            message.channel.send(`Le rôle ${NotifTwitch.name} a été ajouté avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "statistic":
            member.roles.add(NotifSondage);
            message.channel.send(`Le rôle ${NotifSondage.name} a été ajouté avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
      };
    };
    if (emoji === ":green:") {
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
    if (emoji === ":red:") {
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
    if([`lock2`, `ticket`].includes(emoji)) {//<:lock2:714080230419071017>`, `<:ticket:714077480537030708>
        switch(emoji) {
 
            case `ticket`:
 
            var TicketList = [
                "ticket-001",
                "ticket-002",
                "ticket-003"
            ]
 
            let result = Math.floor((Math.random() * TicketList.length))
 
            var bool = false;
            const staffrole = message.guild.roles.cache.find(r => r.name === 'Ticket-Support');//
            if (!staffrole) return message.reply(`No role`)
            if(bool == true) return;
            //message.guild.createChannel(TicketList[result], "text").then((createChan) => {
                let guild = message.guild;;
            guild.channels.create(TicketList[result], {
                type: 'text',
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: message.author.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    },
                    {
                        allow: 'VIEW_CHANNEL',
                        id: staffrole.id
                    }
                ]
            })
            .then(ch => {
                let embedTicketOpen = new MessageEmbed()
            .setTitle("Bonjour,")
            .setColor("#cd3")
            .setTimestamp()
            .setDescription("Vous venez d'ouvrir un ticket, Merci de suivre les instructions du staff.")
            //.addField(`@here`, `Un nouveau ticket est en attente`)
            .setFooter(`Ticket ouvert à:`)
            ch.send(`@here Un nouveau ticket est en attente.`)
            ch.send(embedTicketOpen).then( async msg => {
                await msg.react("714080230419071017")
            })
            userTickets.set(message.author.id, ch.id); // Once our channel is created, we set the map with a key-value pair where we map the user's id to their ticket's channel id, indicating that they have a ticket opened.
            }).catch(err => console.log(err));
        
            break;
 
            case `lock2`:
 
            message.channel.send("**Le salon se fermera dans 10 de secondes...**")
 
            setTimeout(() => {
                message.channel.delete()
            }, cdseconds * 1500)
 
            let embedTicketClose = new MessageEmbed()
            .setTitle(`Le ticket ${message.channel.name} a été fermer`)
            .setColor("#cd3")
            .setTimestamp()
            .setFooter("Ticket fermée à")
 
            client.channels.cache.get(`${settings.logChannel}`).send(embedTicketClose);
            break;
        }   
    }
}