const { play } = require("../../include/play");
const { YOUTUBE_API_KEY } = require("../../config");
const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js")

module.exports.run = async (message, args, settings) => { 
  try {
    const { channel } = message.member.voice;

  if (!args.length)
    return message.reply("Utilisation: /playlist <YouTube Playlist URL | Playlist Name>").catch(console.error);
  if (!channel) return message.reply("Tu dois d'abbord rejoindre un salon vocal !").catch(console.error);
  const error12 = new MessageEmbed()
  .setTitle(`<:outage:714873982557487204> Erreur #12`)
  //.setDescription(`Une erreur est survenu, type:`)
  .addField(`Type d'erreur`,`<a:red:714873983157141584> | Je n'ai pas les permissions de me conecter à un vocal`)
  .setColor(`#ff0000`)
  .setTimestamp()
  .setFooter(`${message.author.username} -> Error #12`)
//======================================================================================================
const error13 = new MessageEmbed()
  .setTitle(`<:outage:714873982557487204> Erreur #13`)
  //.setDescription(`Une erreur est survenu, type:`)
  .addField(`Type d'erreur`,`<a:red:714873983157141584> | Je n'ai pas les permissions de parler dans un vocal`)
  .setColor(`#ff0000`)
  .setTimestamp()
  .setFooter(`${message.author.username} -> Error #13`)
  
  const permissions = channel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT"))
    return message.channel.send(error12);
  if (!permissions.has("SPEAK"))
    return message.channel.send(error13);

  const search = args.join(" ");
  const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
  const url = args[0];
  const urlValid = pattern.test(args[0]);

  const serverQueue = message.client.queue.get(message.guild.id);
  const queueConstruct = {
    textChannel: message.channel,
    channel,
    connection: null,
    songs: [],
    loop: false,
    volume: 100,
    playing: true
  };

  let song = null;
  let playlist = null;
  let videos = [];

  if (urlValid) {
    try {
      playlist = await youtube.getPlaylist(url, { part: "snippet" });
      videos = await playlist.getVideos(settings.maxPlaylistSize || 10, { part: "snippet" });
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const results = await youtube.searchPlaylists(search, 1, { part: "snippet" });
      playlist = results[0];
      videos = await playlist.getVideos(settings.maxPlaylistSize || 10, { part: "snippet" });
    } catch (error) {
      console.error(error);
    }
  }

  videos.forEach(video => {
    song = {
      title: video.title,
      url: video.url,
      duration: video.durationSeconds
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      message.channel
        .send(`✅ **${song.title}** a été ajoutée à la liste de ${message.author}`)
        .catch(console.error);
    } else {
      queueConstruct.songs.push(song);
    }
  });

  message.channel
    .send(
      `${message.author} 📃 a ajouté une playlist - **${playlist.title}** <${playlist.url}>

${queueConstruct.songs.map((song, index) => index + 1 + ". " + song.title).join("\n")}
  `,
      { split: true }
    )
    .catch(console.error);

  if (!serverQueue) message.client.queue.set(message.guild.id, queueConstruct);
  const errorLog2 = new MessageEmbed()
  .setTitle(`<:outage:714873982557487204> Nouvelle erreur`)
  .setDescription(`:bust_in_silhouette: Utilisateur: <@${message.author.id}>#${message.author.discriminator} ID: ${message.author.id}`)
  .setColor(`#ff0000`)
  .addField(`\u200b`,`Information de l'erreur:`)
  .addField(`\u200b`,`:information_source: Commande: ${message.content}`)
  .addField(`\u200b`,`<a:red:714873983157141584> Erreur: ${error}`)
  .setTimestamp()
  .setFooter(`Heure: `)
  if (!serverQueue) {
    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      play(queueConstruct.songs[0], message);
    } catch (error) {
      console.error(`Je n'ai pas pu rejoindre le salon vocal: \nErreur: ${error}`);
      message.client.queue.delete(message.guild.id);
      client.guilds.cache.get("712237315728080957").channels.cache.get("716333318055919617").send(errorLog2);
      await channel.leave();
      return message.channel.send(`Je n'ai pas pu rejoindre le salon: \nErreur: ${error}`).catch(console.error);
    }
  }
  } catch (error) {
    const error1 = new MessageEmbed()
    .setTitle(`<:outage:714873982557487204> Erreur #1`)
    //.setDescription(`Une erreur est survenu, type:`)
    .addField(`Type d'erreur`,`<a:red:714873983157141584> | Il y a eu une erreur lors de l'éxécution de la commande.\nSi l'erreur persiste merci de contacter le support du bot.`)
    .setColor(`#ff0000`)
    .setTimestamp()
    //.setFooter(`${message.author.username} -> Error #1`)
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
  
  }
module.exports.help = MESSAGES.COMMANDS.MUSIQUE.PLAYLIST