const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle('Vira ROLEPLAY AKTİF')
  .setDescription('Sunucumuz şu anda aktiftir. Giriş Yapabilirsiniz herhangi bir sorunla karşılaşırsanız eğer desteğe gelip yönetim ekibimiz ile iletişime geçebilirsiniz')
  .addField(`Sunucu Ip Adresimiz`,`ip`, true)
  .addField(`TeamSpeak 3 Adresimiz`,`ip` , true)
  .setImage('https://cdn.discordapp.com/attachments/839604463358705664/890677025008930826/vira_aktif.gif')
  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["online",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'aktif',
  description: 'Sunucu Aktifse Atılacak Komut',
  usage: '.aktif'
};