const db = require('quick.db')
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  let msg = message;

  try{
let user;
  if (message.mentions.users.first()){
    user = message.mentions.users.first();
  } else if (args[0]  && !message.mentions.users.first()){
    user = message.guild.members.get(args[0])
  }
    
  let member = msg.guild.member(user);
  if (member.id === "667302067588825088") return message.reply('**Batuhanı Sesten Atamazsın Niye Deniyon Olm?!**') .then(m => m.delete(5000))
      if (member.id === "557959615145312257") return message.reply('**Emreyi Sesten Atamazsın Niye Deniyon Olm?!**') .then(m => m.delete(5000))



if (!user) return msg.reply('Sesten Çıkarılacak Kişiyi Etiketleyiniz!') .then(m => m.delete(5000))

await member.setVoiceChannel(null)
  

} catch(neblm){
}

  let nesne = args[0]
  if (!nesne) return message.channel.send('**Bir Kullanıcı Etiketle veya IDsini Gir.**') .then(m => m.delete(5000))

  
  db.set(`gold_${nesne}`, 'gold')

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ${nesne} **Adlı Kullanıcı Başarıyla Sesten Çıkarıldı!**`);
     message.channel.send(embed).then(m => m.delete(5000))

message.react('720010191411740683').catch()
 

 let channel = message.guild.channels.get ('720026237724131421') //: 'Nerde bu kanal aQ';
    if (!channel) return console.log('KaNaal Yoq');
    
    var kyoya = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> **Adlı Yetkili** ${nesne} **Adlı Kullanıcının Bağlantısını Kesti!>**`);
    channel.send(kyoya).catch(console.log)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kes'],
  permLevel: 0
};

exports.help = {
  name: 'çıkar',
  description: 'Kayıt  :3',
  usage: 'cikar'
}; 