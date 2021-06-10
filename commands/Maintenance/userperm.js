const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")
module.exports.run = (client, message, args,) => {
    /*const PERMISSIONS = {
        ADMINISTRATOR: 'Administrator',
        VIEW_AUDIT_LOG: 'View audit log',
        MANAGE_GUILD: 'Manage server',
        MANAGE_ROLES: 'Manage roles',
        MANAGE_CHANNELS: 'Manage channels',
        KICK_MEMBERS: 'Kick members',
        BAN_MEMBERS: 'Ban members',
        CREATE_INSTANT_INVITE: 'Create instant invite',
        CHANGE_NICKNAME: 'Change nickname',
        MANAGE_NICKNAMES: 'Manage nicknames',
        MANAGE_EMOJIS: 'Manage emojis',
        MANAGE_WEBHOOKS: 'Manage webhooks',
        VIEW_CHANNEL: 'Read text channels and see voice channels',
        SEND_MESSAGES: 'Send messages',
        SEND_TTS_MESSAGES: 'Send TTS messages',
        MANAGE_MESSAGES: 'Manage messages',
        EMBED_LINKS: 'Embed links',
        ATTACH_FILES: 'Attach files',
        READ_MESSAGE_HISTORY: 'Read message history',
        MENTION_EVERYONE: 'Mention everyone',
        USE_EXTERNAL_EMOJIS: 'Use external emojis',
        ADD_REACTIONS: 'Add reactions',
        CONNECT: 'Connect',
        SPEAK: 'Speak',
        MUTE_MEMBERS: 'Mute members',
        DEAFEN_MEMBERS: 'Deafen members',
        MOVE_MEMBERS: 'Move members',
        USE_VAD: 'Use voice activity'
    };
    let perms = message.member.permissions;

// Check if a member has a specific permission on the guild!
    let has_kick = perms.has("KICK_MEMBERS");
    const user_mention = message.mentions.users.first();
    if (message.mentions.users.first()) { 
        message.channel.send(`Voici les permissions de la personne mentionée: ${has_kick} \n${user_mention.username}: `);
    } else 
        return message.reply(':wrench: Il faut mentionner un utilisateur');*/
    }
module.exports.help = MESSAGES.COMMANDS.OUTILS.USERPERM;
