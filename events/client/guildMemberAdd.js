const { MessageEmbed } = require("discord.js");
module.exports = async (client, member, message, settings) => {
  const newUser = {
    guildID: member.guild.id,
    guildName: member.guild.name,
    USERID: member.id,
    username: member.user.tag,
  }
  await client.createUser(newUser);
      const embed = new MessageEmbed()
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
        .setColor("#35f092")
        .setDescription(`Dites bienvenue au nouveau membre <@${member.id}>`)
        .setTimestamp();
    //const wChannel = settings.welcomeChannel;
    //const wMessage = settings.welcomeMessage;
    client.channels.cache.get(`${settings.welcomeChannel}`).send(`${settings.welcomeMessage}`)

      //client.channels.cache.get('707211543745527930').send(embed);
      //client.channels.cache.get('707211544122884131').send(`:white_check_mark: Nouveau Membre : <@${member.id}>`);
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
