const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args, prefix, ayar, emoji) => {
  let erkekRolü = "718948642215559178";
  let kızRolü = "718948934994886676";
  let taglı = "728708299674878022" ;
  const embeddd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .setDescription(
      `**Sunucu Toplam Üye**: **${message.guild.memberCount}**\nToplam Aktif Üye: **${ message.guild.members.filter(b => b.presence.status !== "offline").size      }**\nErkek Üye: **${message.guild.roles.get(erkekRolü).members.size }** \nKız Üye: **${message.guild.roles.get(kızRolü).members.size}** \nTaglı Üye :**${message.guild.roles.get(taglı).members.size}**\nSes Kanalında Bulunan:** ${message.guild.members.filter(a => a.voiceChannel).size
      }**`
    );
  message.channel.send(embeddd);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sunucudaki üyeleri sayar.",
  usage: "say",
  kategori: ""
};
