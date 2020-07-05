const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('721388608614825985') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(` | **${ayarlar.prefix}kes** Üyeyi Ses Kanalından Atar\n | **${ayarlar.prefix}çek** Üyeyi Ses Kanalından Çeker\n | **${ayarlar.prefix}k** Kız kayıt sistemi.\n  |  **${ayarlar.prefix}e** Erkek Kayıt sistemi.\n  | **${ayarlar.prefix}tagal**  Aramıza katılmanın en güzel yolunu gösterir.\n` + `| **${ayarlar.prefix}nick** Nick Değiştirir.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=721388608614825985&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/aEUfsU9) **|** [Web Sitesi](https://topbots-tr.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("https://cdn.discordapp.com/attachments/728720592177725480/729010859531042826/fluffy_registry.png")  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};