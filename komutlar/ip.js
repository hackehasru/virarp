const Discord = require('discord.js');

module.exports.run = async (Octopus, message, args) => {
  let msg = await message.channel.send("Sunucu IP : ip");
  let msg1 = await message.channel.send("TS IP : ip");
  let msg2 = await message.channel.send("Sunucu Aktifdir.");
  let testembed = new Discord.RichEmbed()
  .setColor("0xe2ff00")
  .setDescription("İyi Roller Dileriz. :sunglasses:")
  message.channel.send(testembed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['t'], 
  permLevel: 4,
  kategori:"yapımcı"
};

exports.help = {
  name: 'ip', 
  description: 'taslak', 
  usage: 'ip'
};
