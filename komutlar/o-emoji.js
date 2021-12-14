const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if(!message.member.roles.cache.has("918964711658250271") && !message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "Bu komutu kullanabilmek için `Emojileri yönet` veya `Bot Komut` yetkisine sahip olmalısınız"
    );
  let link = args[0];
  let isim = args[1];
  let guild = message.guild;
  if (!link)
    return message.channel.send("Emojinin alınacağı linki girmelisin.");
  if (!isim) return message.channel.send("Emojinin ismini belirlemedin.");

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Emoji Eklendi", message.guild.iconURL)
    .setDescription(`**${isim}** ismiyle yeni bir emoji oluşturuldu.`)
   .setFooter("Deasn was here!");

  guild
    .emojis.create(`${link}`, `${isim}`)
    .then(emoji => message.channel.send(embed));
  message.react((client.config.onayemoji)).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["addemoji", "emojioluştur", "ee"],
  permLevel: 0
};
exports.help = {
  name: "emojiekle",
  description: "Sunucuya emoji eklersiniz",
  usage: "emojiekle <link> <isim>"
};
