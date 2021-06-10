const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: {
    "type": String,
    "default": defaults.prefix
  },
  logChannel: {
    "type": String,
    "default": defaults.logChannel
  },
  welcomeMessage: {
    "type": String,
    "default": defaults.welcomeMessage
  },
  welcomeChannel: {
    "type": String,
    "default": defaults.welcomeChannel
  },
  suggestChannel: {
    "type": String,
    "default": defaults.suggestChannel
  },
  maxPlaylistSize: {
    "type": String,
    "default": defaults.maxPlaylistSize
  },
  roleRegles: {
    "type": String,
    "default": defaults.roleRegles
  },
  staffRole: {
    "type": String,
    "default": defaults.staffRole
  },
  reportChannel: {
    "type": String,
    "default": defaults.reportChannel
  },
  
});

module.exports = mongoose.model("Guild", guildSchema);