const {playing,} = require('../../config.js');
module.exports = async (client) => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 6000);
  require("../../util/dashboard")(client);
    console.log(`===================================[WARNING]=====================================\n✅ - | [SYSTEM] Le bot ${client.user.tag} est allumé avec ${client.users.cache.size} users, dans ${client.channels.cache.size} channels de ${client.guilds.cache.size} guild.\n===================================[WARNING]=====================================`);
      //client.user.setPresence(`${playing}`, { type: `${activityType}`}).then((client.user.setStatus(`${Status}`)));
      //client.user.setPresence({ activity: {name: playing}, type: "LISTENING", status: 'online'});
      client.user.setActivity({ type: 'LISTENING'}, {name: playing});
}