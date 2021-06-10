const mongoose = require("mongoose");
const { Guild, User } = require("../models/index");
const { Report } = require("../models/index");

module.exports = client => {
client.createGuild = async guild => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    const createGuild = await new Guild(merged);
    createGuild.save().then(g => console.log(`Nouveau serveur -> ${g.guildName} (${g.guildID})`));
}   
client.getGuild = async guild => {
    const data = await Guild.findOne({ guildID: guild.id});
    if (data) return data;
    return client.config.DEFAULTSETTINGS;
};
client.updateGuild = async (guild, settings) => {
  let data = await client.getGuild(guild);
  if (typeof data !== "object") data = {};
  for (const key in settings) {
    if (data[key] !== settings[key]) data[key] = settings[key];
  }
  return data.updateOne(settings); 
};
client.createUser = async user => {
  const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
  const createUser = await new User(merged);
  createUser.save().then(u => console.log(`Nouvel user -> ${u.guildName} (${u.guildID}) ${u.username}`));
}   
client.getUser = async user => {
  const data = await User.findOne({ userID: user.id});
  if (data) return data;
  else return;
};
client.updateuser = async (user, settings) => {
let data = await client.getUser(user);
if (typeof data !== "object") data = {};
for (const key in settings) {
  if (data[key] !== settings[key]) data[key] = settings[key];
}
return data.updateOne(settings); 
}
/*client.updateReport = async (guild, settings) => {
  let data = await client.getReport(guild);
  if (typeof data !== "object") data = {};
  for (const key in settings) {
    if (data[key] !== settings[key]) data[key] = settings[key];
  }
  return data.updateOne(settings); 
}*/
/*client.createReport = async report => {
  const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, report);
  const createReport = await new Report(merged);
  createReport.save().then(g => console.log(`Nouveau Report -> ${g.guildName} (${g.guildID})`));
}
client.getReport = async report => {
  const data = await Report.findOne({ 
    guildID: guild.id,
    username: rUser.user.username,
    userID: rUser.id,
    reason: rReason,
    rID: message.author.id,
    time: message.createdAt
  });
  if (data) return data;
  return message.reply(`No report`)
};*/
}