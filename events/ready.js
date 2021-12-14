const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Adet [MURPHY] Komutlar Yüklendi.`);
  console.log(`(${client.user.username}) Adındaki Bot Hazır`);
  client.user.setPresence({ activity: { name: "Rhea ❤️ Deasn" }, status: "dnd", type: 'STREAMING', url: 'https://twitch.tv/.'});
    console.log(`Aktif`);

};
 