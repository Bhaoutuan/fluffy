const Discord = require('discord.js');

exports.run = async (client, message) => {
  const yasak = client.emojis.get('701884491647549502');
 
  const elmas = client.emojis.get('694626540977127424');
  const emoji = client.emojis.get('694639615809814699');
      message.delete()
  const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ***<@${message.author.id}> Fluffy Tag Sistemi***

 **Sol Altta İsiminizin Yanında Mikrofon Ses ve Ayarlar Menüsü var.**
 **Ayarlar Menüsüne Tıklıyorsunuz.**
 **"HESABIM" Bölümünde Düzenleye Tıklayın**
 **Kullanıcı Adınızın Başına "✦" Tagını Ekleyin.**
 **Şifrenizi Yazıp Kaydete Tıklayın.**       
`,true)
        .setFooter(`Ailemize Katılmak Mı İstiyorsun? Devam Etmelisin... Yardımlar Yolda Geliyor...`)
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  aliases: ['taginfo'],
  permLevel: 0,
};

exports.help = {
  name: "tagal",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "tagal",
};