const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
const TOKEN = require("../../config");
module.exports.run = (client, message, args) => {
  try {
    if (message.author.id === "401067518774476800") {
      const commandName = args[1].toLowerCase();
      const command =
        message.client.commands.get(commandName) ||
        message.client.commands.find(
          (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );
  
      switch (args[0]) {
        case "info":
          if (!command)
            return message.channel.send(
              `There is no command with name or alias \`${commandName}\`, ${message.author}!`
            );
          delete require.cache[
            require.resolve(`../info/${command.help.name}.js`)
          ];
          try {
            const newCommand = require(`../info/${command.help.name}.js`);
            message.client.commands.set(newCommand.help.name, newCommand);
            message.channel.send(
              `:white_check_mark: La commande \`${command.help.name}\` a été reload!`
            );
          } catch (e) {
            message.reply(
              `Le bot n'a pas redémarrer à cause de l'érreur suivante: ${e}`
            );
            message.guild.members.cache
              .get("401067518774476800")
              .send(
                `Le bot n'a finalement pas été remémarré a cause de l'éreur suivante: ${e}`
              );
          }
          break;
        case "admin":
          if (!command)
            return message.channel.send(
              `There is no command with name or alias \`${commandName}\`, ${message.author}!`
            );
          delete require.cache[
            require.resolve(`../admin/${command.help.name}.js`)
          ];
          try {
            const newCommand = require(`../admin/${command.help.name}.js`);
            message.client.commands.set(newCommand.help.name, newCommand);
            message.channel.send(
              `:white_check_mark: La commande \`${command.help.name}\` a été reload!`
            );
          } catch (e) {
            message.reply(
              `Le bot n'a pas redémarrer à cause de l'érreur suivante: ${e}`
            );
            message.guild.members.cache
              .get("401067518774476800")
              .send(
                `Le bot n'a finalement pas été remémarré a cause de l'éreur suivante: ${e}`
              );
          }
          break;
        case "fun":
          if (!command)
            return message.channel.send(
              `There is no command with name or alias \`${commandName}\`, ${message.author}!`
            );
          delete require.cache[require.resolve(`../fun/${command.help.name}.js`)];
          try {
            const newCommand = require(`../fun/${command.help.name}.js`);
            message.client.commands.set(newCommand.help.name, newCommand);
            message.channel.send(
              `:white_check_mark: La commande \`${command.help.name}\` a été reload!`
            );
          } catch (e) {
            message.reply(
              `Le bot n'a pas redémarrer à cause de l'érreur suivante: ${e}`
            );
            message.guild.members.cache
              .get("401067518774476800")
              .send(
                `Le bot n'a finalement pas été remémarré a cause de l'éreur suivante: ${e}`
              );
          }
          break;
        case "maintenance":
          if (!command)
            return message.channel.send(
              `There is no command with name or alias \`${commandName}\`, ${message.author}!`
            );
          delete require.cache[
            require.resolve(`../maintenance/${command.help.name}.js`)
          ];
          try {
            const newCommand = require(`../maintenance/${command.help.name}.js`);
            message.client.commands.set(newCommand.help.name, newCommand);
            message.channel.send(
              `:white_check_mark: La commande \`${command.help.name}\` a été reload!`
            );
          } catch (e) {
            message.reply(
              `Le bot n'a pas redémarrer à cause de l'érreur suivante: ${e}`
            );
            message.guild.members.cache
              .get("401067518774476800")
              .send(
                `Le bot n'a finalement pas été remémarré a cause de l'éreur suivante: ${e}`
              );
          }
          break;
        case "moderation":
          if (!command)
            return message.channel.send(
              `There is no command with name or alias \`${commandName}\`, ${message.author}!`
            );
          delete require.cache[
            require.resolve(`../moderation/${command.help.name}.js`)
          ];
          try {
            const newCommand = require(`../moderation/${command.help.name}.js`);
            message.client.commands.set(newCommand.help.name, newCommand);
            message.channel.send(
              `:white_check_mark: La commande \`${command.help.name}\` a été reload!`
            );
          } catch (e) {
            message.reply(
              `Le bot n'a pas redémarrer à cause de l'érreur suivante: ${e}`
            );
            message.guild.members.cache
              .get("401067518774476800")
              .send(
                `Le bot n'a finalement pas été remémarré a cause de l'éreur suivante: ${e}`
              );
          }
          break;
        case "musique":
          if (!command)
            return message.channel.send(
              `There is no command with name or alias \`${commandName}\`, ${message.author}!`
            );
          delete require.cache[
            require.resolve(`../musique/${command.help.name}.js`)
          ];
          try {
            const newCommand = require(`../musique/${command.help.name}.js`);
            message.client.commands.set(newCommand.help.name, newCommand);
            message.channel.send(
              `:white_check_mark: La commande \`${command.help.name}\` a été reload!`
            );
          } catch (e) {
            message.reply(
              `Le bot n'a pas redémarrer à cause de l'érreur suivante: ${e}`
            );
            message.guild.members.cache
              .get("401067518774476800")
              .send(
                `Le bot n'a finalement pas été remémarré a cause de l'éreur suivante: ${e}`
              );
          }
          break;
        case "tickets":
          if (!command)
            return message.channel.send(
              `There is no command with name or alias \`${commandName}\`, ${message.author}!`
            );
          delete require.cache[
            require.resolve(`../tickets/${command.help.name}.js`)
          ];
          try {
            const newCommand = require(`../tickets/${command.help.name}.js`);
            message.client.commands.set(newCommand.help.name, newCommand);
            message.channel.send(
              `:white_check_mark: La commande \`${command.help.name}\` a été reload!`
            );
          } catch (e) {
            message.reply(
              `Le bot n'a pas redémarrer à cause de l'érreur suivante: ${e}`
            );
            message.guild.members.cache
              .get("401067518774476800")
              .send(
                `Le bot n'a finalement pas été remémarré a cause de l'éreur suivante: ${e}`
              );
          }
          break;
      }
    } else
      message.reply(
        `Cette commande ne peut être utilisée que par les développeurs agrées.`
      );
    message.guild.members.cache
      .get("401067518774476800")
      .send(
        `Il y a eu une tentative de redémarrage par ${message.author} (${message.author.id})`
      );
    
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
};
module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;
