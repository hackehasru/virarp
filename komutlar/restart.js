const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle('Vira ROLEPLAY RESTART')
  .setDescription('Sunucumuza şu anda ufak bir restart atacaktır lütfen sunucudan çıkış yapınız ve giriş yapmayı da denemeyiniz aktif olduğunda yetkililer tarafında aktif komutu atılacaktır')
  .setImage('https://cdn.discordapp.com/attachments/839604463358705664/890680980346658877/vira_res.gif')

  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["res",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'restart',
  description: 'Sunucu Restart Atılacak Komut',
  usage: '.restart'
};