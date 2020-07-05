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
  member.addRole("718948642215559178"); //erkek rol id
  member.addRole("718948790786195517");
  member.removeRole("718946212002398269"); //kayıtsız rol id
  message.react('720010191411740683') //Emojiid

     const kanal = message.guild.channels.find(c => c.id == "722868415198658700") //LOGİD
    const embed1 = new Discord.RichEmbed() 
    .addField(`Fluffy Registry`, `  ${member.user} **Hoşgeldin , Seninle Beraber** \`${member.guild.memberCount}\` **Üyeye Ulaştık.**`)
    .setColor("RED")
    .setFooter(message.author.tag ,message.author.avatarURL)  
    .setTimestamp()
  let embed = new Discord.RichEmbed() 
  .setColor("RANDOM")
  .addField(`Fluffy Registry`, ` ${member.user} **adlı üyeye** <@&718948642215559178> **rolünü verip ismini**  \`✦ ${isim} ' ${yas}\` **olarak ayarladım!**`)                                                                             
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek" , "e" , "Erkek" , "E"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'erkek',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'erkek '
} 