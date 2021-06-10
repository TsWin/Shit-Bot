const MESSAGES = {
    COMMANDS: {
        ADMIN: {
            EVAL: {
                name: 'eval',
                aliases: ['eval'],
                category: 'debug & maintenance',
                description: 'Renvoi un code javascript testé',
                cooldown :5,
                usage: '<code à tester>',
                args: true,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },  
            TESTLOG: {
                name: 'testlog',
                aliases: ['testlog'],
                category: 'debug & maintenance',
                description: 'Commande pour tester le channel de log',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            BOTINFO: {
                name: 'hostinfo',
                aliases: ['hostinfo'],
                category: 'debug & maintenance',
                description: 'Commande info bot',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            RELOAD: {
                name: 'reload',
                aliases: ['reload', 'r'],
                category: 'debug & maintenance',
                description: 'Reload une commande',
                cooldown :5,
                usage: '<catégorie de la commande> <nom de la commande>',
                args: true,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            SETTINGS: {
                name: 'settings',
                aliases: ['settings', 'set'],
                category: 'debug & maintenance',
                description: `Modifier les paramètres du Bot`,
                cooldown :10,
                usage: '<type de paramètre>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            TEST: {
                name: 'test',
                aliases: ['test','t'],
                category: 'debug & maintenance',
                description: 'commande de test',
                cooldown :5,
                usage: 'commande de test',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            TESTEMBED: {
                name: 'testembed',
                aliases: ['testembed', 'embed'],
                category: 'Debug & Maintenance',
                description: 'commande de Testembed',
                cooldown :5,
                usage: ' ',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            TESTMSGEMBED: {
                name: 'testmsgpriv',
                aliases: ['testmsgpriv', 'msgpriv'],
                category: ' Debug & Maintenance',
                description: 'Test de message privée',
                cooldown :5,
                usage: ' ',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
        },
        FUN: {
            MPDISCUSSION: {
                name: 'mpdiscussion',
                aliases: ['mpdiscussion'],
                category: 'fun',
                description: 'Envoie des messages mp',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            DICE: {
                name: 'lancede',
                aliases: ['lancede', 'dice', 'de'],
                category: 'fun',
                description: 'Lance un dé',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            BALL: {
                name: '8ball',
                aliases: ['8ball',],
                category: 'fun',
                description: 'Je réponds à vos questions',
                cooldown :5,
                usage: '<votre_question>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            GIVEAWAY: {
                name: 'giveaway',
                aliases: ['giveaway',],
                category: 'nouveau',
                description: 'Crée un simple giveaway',
                cooldown :5,
                usage: '<temps> <channel> <prix>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            CAT: {
                name: "chat",
                aliases: ['chat', 'cat'],
                category: 'fun',
                description: "Un image de chat",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            DOG: {
                name: "chien",
                aliases: ['chien', 'dog'],
                category: 'fun',
                description: "Une image de chien",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            }
        },
        OUTILS: {
            SAY: {
                name: 'say',
                aliases: ['say','s', 'repeat', 'rep'],
                category: 'outils',
                description: 'Répéte le message de la commande.',
                cooldown :5,
                usage: '<#channel(optionnel)> <votre_message>',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            SAYEMBED: {
                name: 'sayembed',
                aliases: ['sayembed','sem', 'repeatem', 'repem', 'sayeb'],
                category: 'nouveau',
                description: 'Répéte le message de la commande sous forme de embed',
                cooldown :5,
                usage: '<#channel(optionnel)> <votre_message>',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            REPORT: {
                name: "report",
                aliases: ['report'],
                category: 'outils',
                description: "Crée un report",
                cooldown :5,
                usage: 'yes',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            INVITE: {
                name: "invite",
                aliases: ['invite'],
                category: 'outils',
                description: "envoie une invitation du BOT",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            BOTSUPPORT: {
                name: 'botsupport',
                aliases: ['botsupport', 'helpbot'],
                category: 'nouveau',
                description: 'Besoin d\'aide pour le bot',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            SUGGEST: {
                name: 'suggest',
                aliases: ['suggest', 'sugg'],
                category: 'nouveau',
                description: 'Pour crée une suggestion',
                cooldown :5,
                usage: '<votre suggestion>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            BOTREPORT: {
                name: 'botreport',
                aliases: ['botreport', 'botproblem'],
                category: 'nouveau',
                description: 'Pour report un problème avec le bot',
                cooldown :5,
                usage: 'Syntaxe : (prefix}botreport;` `Le type de problème`; `Le contexte du problème`; `Explication du problème`;',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            MAJ: {
                name: "maj",
                aliases: ['maj', 'nouveau', 'update'],
                category: 'outils',
                description: "Une commande qui vous donne les nouveautés du bot",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            MEMBERCOUNT: {
                name: "membres",
                aliases: ['membres',],
                category: 'outils',
                description: "Une commande qui vous donne le nombre de membres sur le serveur",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            BOTINFO: {
                name: "botinfo",
                aliases: ['botinfo',],
                category: 'outils',
                description: "Une commande qui vous donne plus d'information sur le bot",
                cooldown :5,
                usage: '<software | machine | version | utility | siteweb>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            LEVEL: {
                name: "level",
                aliases: ['level', 'lev'],
                category: 'outils',
                description: "soon",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: true,
            },
            ARGSINFO: {
                name: "comptemot",
                aliases: ['comptemot','wordcount'],
                category: 'outils',
                description: "Une commande qui compte le nombres de mots",
                cooldown :5,
                usage: '<vos_mots>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            AVATAR: {
                name: 'avatar',
                aliases: ['avatar'],
                category: 'outils',
                description: `Avoir l'avatar de quelqu'un'`,
                cooldown :10,
                usage: '<la_personne_mentionnée>',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            AVENIR: {
                name: "avenir",
                aliases: ['avenir', 'soon'],
                category: 'outils',
                description: "Ce qu'il y a venir",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            EMOJILIST: {
                name: 'serveuremoji',
                aliases: ['serveuremoji', 'emojilist', 'emolist'],
                category: 'outils',
                description: 'Donne tout les emojis',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            HELP: {
                name: 'help',
                aliases: ['help', 'h'],
                category: 'outils',
                description: 'Commande help',
                cooldown :5,
                usage: '<command_name>',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            PING: {
                name: 'ping',
                aliases: ['ping', 'p'],
                category: 'outils',
                description: 'Renvoie pong',
                cooldown :5,
                usage: '',
                args: false, 
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            SERVEURINFO: {
                name: 'serveurinfo',
                aliases: ['serveurinfo', 'servinfo'],
                category: 'outils',
                description: 'Serveur info',
                cooldown :10,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            TAGINFO: {
                name: 'taginfo',
                aliases: ['taginfo'],
                category: 'outils',
                description: `Avoir le tag de quelqu'un`,
                cooldown :10,
                usage: '<la_personne_mentionnée>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            USERINFO: {
                name: 'userinfo',
                aliases: ['userinfo'],
                category: 'outils',
                description: 'userinfo',
                cooldown :10,
                usage: '<la_personne_mentionnée>',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            USERPERM: {
                name: 'userpermissions',
                aliases: ['userpermissions', 'userperm'],
                category: 'maintenance',
                description: `Avoir les permissions de quelqu'un`,
                cooldown :10,
                usage: '<la_personne_mentionnée>',
                args: true,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            VERSION: {
                name: 'version',
                aliases: ['version', 'v'],
                category: 'outils',
                description: 'Donne la version',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            SAYMP: {
                name: 'saymp',
                aliases: ['saymp', 'dmuser'],
                category: 'outils',
                description: 'Envoie un message privé à la personne mentionée',
                cooldown :5,
                usage: '<@user> <votre_message>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
        },
        MUSIQUE: {
            PLAY: {
                name: 'play',
                aliases: ['play', 'p'],
                category: 'musique',
                description: 'play',
                cooldown :5,
                usage: 'en test',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            LOOP: {
                name: "loop",
                description: "Toggle music loop",
                aliases: ['loop', 'l'],    
                category: 'beta',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: false,
            },
            PAUSE: {
                name: "pause",
                description: "Pause the currently playing music",
                aliases: ['pause'],    
                category: 'beta',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            PLAYLIST: {
                name: "playlist",
                description: "Play a playlist from youtube",
                aliases: ['playlist', 'list'],    
                category: 'musique',
                cooldown :5,
                usage: 'playlist <YouTube Playlist URL | Playlist Name>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            QUEUE: {
                name: "queue",
                description: "Show the music queue and now playing.",
                aliases: ['queue', 'q'],    
                category: 'beta',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            REMOVE: {
                name: "remove",
                description: "Remove song from the queue",
                aliases: ['remove', 'delete'],    
                category: 'beta',
                cooldown :5,
                usage: 'remove <Queue Number>',
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            RESUME: {
                name: "resume",
                description: "Resume currently playing music",
                aliases: ['resume', 'continue'],    
                category: 'beta',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            SKIP: {
                name: "skip",
                description: "Skip the currently playing song",
                aliases: ['skip', 's'],    
                category: 'beta',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            STOP: {
                name: "stop",
                description: "Stops the music",
                aliases: ['stop', 'end', 'disconnect'],    
                category: 'beta',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            VOLUME: {
                name: "volume",
                description: "Change volume of currentply playing voiceConnection",
                aliases: ['volume', 'v', 'vol', 'sound'],    
                category: 'beta',
                cooldown :5,
                usage: '',
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            }
        },
        MODERATION: {
            ADDMSGTICKET: {
                name: "ticket",
                aliases: ['ticket', ],
                category: 'nouveau',
                description: "Crée un ticket",
                cooldown :5,
                usage: '',
                args: false,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            GETREPORT: {
                name: "getreport",
                aliases: ['getreport'],
                category: 'moderation',
                description: "Voir les report d'un utilisateur",
                cooldown :5,
                usage: '<@user>',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: false,
                permissionsNIV5: false,
                permissionsNIV6: false,
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            ADDMEMBERCOUNT: {
                name: "addmembercount",
                aliases: ['addmembercount'],
                category: 'moderation',
                description: "Ajoute un salon de avec le nombre de membres",
                cooldown :5,
                usage: '',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: false,
                permissionsNIV5: false,
                permissionsNIV6: true,
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            CONFIG: {
                name: "config",
                aliases: ['config'],
                category: 'nouveau',
                description: "Permet la configuration du bot",
                cooldown :5,
                usage: '<info>',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: false,
                permissionsNIV5: false,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            BAN: {
                name: "ban",
                aliases: ['ban'],
                category: 'moderation',
                description: "Ban un membre",
                cooldown :5,
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissionsNIV3: false,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            CLEAR: {
                name: "clear",
                aliases: ['clear', 'clean', 'purge'],
                category: 'moderation',
                description: "Supprime des messages",
                cooldown :5,
                usage: '<nombre de messages à supprimer>',
                isUserAdmin: false,
                permissionsNIV3: true,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            KICK: {
                name: "kick",
                aliases: ['kick'],
                category: 'moderation',
                description: "kick un membre",
                cooldown :5,
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissionsNIV3: true,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            MUTE: {
                name: "mute",
                aliases: ['mute'],
                category: 'moderation',
                description: "Mute un utilisateur",
                cooldown: 5,
                usage: '<@user> <temps> <raison>',
                isUserAdmin: true,
                permissionsNIV3: true,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            UNBAN: {
                name: "unban",
                aliases: ['unban'],
                category: 'moderation',
                description: "Unban un membre",
                cooldown :5,
                usage: '<@user>',
                isUserAdmin: true,
                permissionsNIV3: false,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            UNMUTE: {
                name: "unmute",
                aliases: ['unmute'],
                category: 'moderation',
                description: "Unmute un utilisateur",
                cooldown: 5,
                usage: '<@user>',
                isUserAdmin: true,
                permissionsNIV3: true,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            WARN: {
                name: "warn",
                aliases: ['warn'],
                category: 'moderation',
                description: "Warn un membre",
                cooldown :5,
                usage: '<@user> <raison>',
                isUserAdmin: true,
                permissionsNIV3: true,
                permissionsNIV4: true,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: true,
            },
            ANNONCE: {
                name: 'annonce',
                aliases: ['annonce', 'news'],
                category: 'moderation',
                description: 'Crée une annonce',
                cooldown :10,
                usage: '#salon **``Titre`; `Description`; `Texte`; `Couleur en Hexa code (par défaut noir)`; `Lien d\'une image (par défaut icone du serveur)``;**',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: false,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            LOCK: {
                name: 'lock',
                aliases: ['lock'],
                category: 'nouveau',
                description: 'Le rôle choisi ne pourra plus écrire dans tout les salons.',
                cooldown :5,
                usage: '<ROLE_ID> TRUE | FALSE | NULL',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: false,
                permissionsNIV5: true,
                permissionsNIV6: true,
                args: true,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            REGLES: {
                name: 'regles',
                aliases: ['regles', 'rules'],
                category: 'moderation',
                description: 'Envoie les règles du serveur',
                cooldown :30,
                usage: '',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: false,
                permissionsNIV5: false,
                permissionsNIV6: true,
                args: false,
                ownermode: false,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
        },
        REACTIONS: {
            EMOJI: {
                name: "emoji",
                aliases: ['emoji', "emote"],
                category: 'reactions',
                description: "Renvoie des emjis sur notre message!",
                cooldown :0.1,
                usage: '',
                args: false,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            },
            ALLROLES: {
                name: "allroles",
                aliases: ['allroles'],
                category: 'reactions',
                description: "Renvoie un message avec des réactions!",
                cooldown :10,
                usage: '',
                isUserAdmin: false,
                permissionsNIV3: false,
                permissionsNIV4: false,
                permissionsNIV5: false,
                permissionsNIV6: true,
                args: false,
                ownermode: true,
                activated: true,
                maintenancestatus: false,
                guildOwners: true,
            }
        },
    }
}

exports.MESSAGES = MESSAGES;