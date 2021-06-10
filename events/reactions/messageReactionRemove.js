module.exports = (client, messageReaction, user) => {
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
    if (member.user.bot) return;
  
    if (["ding", "megaphone", "youtube", "twitter", "twitch", "statistic"].includes(emoji) && message.channel.id === channel.id) {
      switch (emoji) {
        case "ding":
            member.roles.remove(NotifAnnonce);
            message.channel.send(`Le rôle ${NotifAnnonce.name} a été enlevé avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "megaphone":
            member.roles.remove(NotifPub);
            message.channel.send(`Le rôle ${NotifPub.name} a été enlevé avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "youtube":
            member.roles.remove(NotifYoutube);
            message.channel.send(`Le rôle ${NotifYoutube.name} a été enlevé avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "twitter":
            member.roles.remove(NotifTwitter);
            message.channel.send(`Le rôle ${NotifTwitter.name} a été enlevé avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "twitch":
            member.roles.remove(NotifTwitch);
            message.channel.send(`Le rôle ${NotifTwitch.name} a été enlevé avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
        case "statistic":
            member.roles.remove(NotifSondage);
            message.channel.send(`Le rôle ${NotifSondage.name} a été enlevé avec succès!`)
            .then(message => 
                {setTimeout(function() {
                message.delete();
            }, 3000)});
        break;
      };
    };
  }