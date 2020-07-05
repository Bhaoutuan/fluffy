
const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('728853399378067537') && !message.member.hasPermission('728853399378067537')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketlemelisin!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1];
      if(!isim) return message.channel.send("Lütfen bir isim girin!").then(m => m.delete(5000));
   let yas = args[2];
      if(!yas) return message.channel.send("Lütfen bir yaş girin!")
await member.setNickname(`✦ ${isim} | ${yas}`);
  member.addRole("718948934994886676");
  member.addRole("718948790786195517");//kadın,kız Rol id
  member.removeRole("718946212002398269"); //kayıtsız id
  message.react('720010191411740683') //emojiid
     const kanal = message.guild.channels.find(c => c.id == "722868415198658700")  //LOG İD
    const embed1 = new Discord.RichEmbed() 
    .addField(`Fluffy Registry`, ` ${member.user} **Hoşgeldin , Seninle Beraber** \`${member.guild.memberCount}\` **Üyeye Ulaştık.**`)
    .setColor("BLACK")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .addField(`Fluffy Registry`, `${member.user} **adlı üyeye** <@&718948934994886676> **rolünü verip ismini**  \`✦ ${isim} ' ${yas}\` **olarak ayarladım!**`)                                                                             
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k" , "kız" , "Kız" , "K"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kız'
} 