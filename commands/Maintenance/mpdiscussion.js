const { MessageEmbed } = require("discord.js")
const { MESSAGES } = require("../../util/constants");
module.exports.run = async (client, message, args) => {  
    let person = message.mentions.users.first();
    const text = args[1];
    if(!person) {
    const iden = args[0];
    if(!text) return message.channel.send(embed)
    const tab = client.guilds.cache.array();
    let user = null
    for(i = 0; i < client.guilds.cache.size; i++) {
    let ajout = tab[i].members.cache;
    user = ajout.filter(user => user.id == iden);
    if(user.size > 0) break;
    }
    if(user.size == 0) return message.channel.send("Utilisateur introuvable !");
    person = user.first().user;
}
const filter = m => m.author.id == person.id;
await person.createDM().then(m => {m.send(`${message.author.tag} :\n${text}`);
const collector = m.createMessageCollector(filter, { time: 900000 });
collector.on('collect', m => {if(m.attachments.size > 0) { message.member.send({files: [{
    attachment: `${m.attachments.first().url}`,
    name: `${m.attachments.first().name}`
  }]})} else {
    message.member.send(`${person.tag} :\n${m.content}`)}});
collector.on('end', collected => message.member.send("Fermé !"));
}) 
}
module.exports.help = MESSAGES.COMMANDS.FUN.MPDISCUSSION;