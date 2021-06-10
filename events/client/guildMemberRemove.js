const { MessageEmbed } = require("discord.js");
module.exports = (client, member, message) => {
      client.channels.cache.get('707211544122884131').send(`:x: Membre Partit: <@${member.id}>`);
      /*const server = message.channels.cache.find(c => c.name === "Membres:")
      if(!server) {
      return;
      } else {
          let memberCount = server.guild.memberCount;
          server.setName(`Membres: ` + memberCount)
          .then(result => console.log(result))
          .catch(error => console.log(error));
      }*/
    }
