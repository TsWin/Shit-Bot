# TSBot (Multifonctional BOT)
> TSBot is a multifonctional BOT built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)


## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**
3. Node.js v12.0.0 or newer

## Installation

```
git clone https://github.com/TsWin/TSMulti-BOT-PRO
cd TSMulti-BOT-PRO
npm install
```

After installation finishes you can use `node .` or `node index.js` to start the bot.

## Configuration

Modify and fill out the values :
* Files:
    * `constants.js` To activate or modifiy permissions for each command
    * `allroles.js` Enter de roles and emotes id's
    * `version.js` Enter the version
    * `info.js` Enter the version
    * `lock.js` Enter the ingnored channels
    * `event/reactions/messageReactionAdd.js` Enter de roles and emotes id's
    * `event/reactions/messageReactionRemove.js` Enter de roles and emotes id's
    * `|> Comming Soon`

* config.js :

```json
{
    "TOKEN": "TOKEN",
"guildID": "707211542915186800",

"colour": "#009999",
"playing": "!!help => aide",
"activityType": "PLAYING",
"Status": "online",
"botowner": "401067518774476800",
"YOUTUBE_API_KEY": "LOCAL FILE FOR SECURITY",
"DBCONNECTION": "LOCAL FILE FOR SECURITY",
"DEFAULTSETTINGS": {
    "prefix": "!!",
    "logChannel": "logs",
    "welcomeMessage": "Bienvenue {{user}} !!!",
    "suggestChannel": "suggestions",
    "welcomeChannel": "général",
    "maxPlaylistSize": 10,
    "roleRegles": "No Regles role",
    "staffRole": "No Staff role",
    "reportChannel": "No Report Channel"
},
"dashboard": {
    "oauthSecret": "LOCAL FILE FOR SECURITY",
    "callbackUrl": "http://localhost:3000/callback",
    "sSecret": "skysayshi",
    "domain": "localhost",
    "port": "3030"
},
}
```
## Features & Commands

> Note: The default prefix is '!!'

* 🎶 Play music from YouTube via url
  * `/play https://www.youtube.com/watch?v=GLvohMXgcBo`
* 🔎 Play music from YouTube via search query
  * `/play under the bridge red hot chili peppers`
* 📃 Play youtube playlists via url
  * `/playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`
* 🔎 Play youtube playlists via search query
  * `/playlist linkin park meteora`
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Media Controls via Reactions
* Reaction ticket system
* Report System
* Support & debug system
* Channel locking system
* Fun commands
* Util commands
* Moderation commands
![reactions](https://i.imgur.com/j7CevsH.png)
* And more comming soon

## Final Word

Thank you very much about visiting my bot. For more questions go to discord: `TS★win#2509`