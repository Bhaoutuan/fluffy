const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if(!message.member.roles.has("728853399378067537")) return message.channel.send(`Bu komutu kullanabilmek için Gerekli yetkiye sahip değilsin.`);

  if (!message.member.voiceChannel) {
    return message.channel.send("**Ses kanalında olman lazım!** :x:").then(m => m.delete(5000));
  }

  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı) return message.channel.send("**Kullanıcıyı etiketlemelisin** :x:").then(m => m.delete(5000));

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);

  if (!member.voiceChannel) return message.channel.send("**Etiketlenen kullanıcı bir ses kanalında değil** :x:").then(m => m.delete(5000));

  const voiceChannel = message.member.voiceChannel.id;
  if (!voiceChannel) return;

  member.setVoiceChannel(voiceChannel);
  
   message.react('720010191411740683')

  const voiceChannel1 = message.member.voiceChannel.name;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      message.author +
        " **Tarafından** " +
        kullanıcı +
        " **Kullanıcısı** `" +
        voiceChannel1 +
        "`** Sesli Kanalına Çekildi.**"
    )
    .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL}`
    )
    .setTimestamp();
  message.channel.send(embed).then(m => m.delete(5000));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 0
};
exports.help = {
  name: "çek",
  description: "çek",
  usage: "çek"
};