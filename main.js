const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const tags = require('common-tags');
const { config } = require('process');
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    ${files.length} adet komut yüklenecek.
‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        console.log(`[KOMUT] | ${props.help.name} Eklendi.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login("Nzk4OTMzODA0Nzk4MDUwMzI0.X_8PFg.MiJEbBpsWuz3YbNBFARfhxQwVKM");


 client.config = {
  

  "token" : "NAH :d",

  "sunucuid": "918964711461097512",

  "chat": "918964713096880137",

  "seskanal": "919295518482522142",

  "footer": "Deasn was here!",

  "sunucuadı": "R H E A",


"taglog": "893783995261788162",
"taglırol": "893783994276122636",
"tag" : "✯", 
"kucuktag" : "✯",
"tag2": "•",

"erkek1": "918964711544983578",
"erkek2": "918964711544983577",
"erkek3": "",

"kız1": "918964711544983580",
"kız2": "918964711544983579",
"kız3": "", 

"kayıtsız": "918964711519830146",
"kayıtsız1": "",

"teyitci": "918964711591137317",




"footer": "Deasn was here!",

"toplantikanal": "",

"katıldırol": "",

"owner": "918964711658250271",

"başOwner" : "918964711658250272",

"yetkilirol1": "",




"yetkilialim": "",

"yetkili1": "",

"yetkili2": "",




"yetkili3": "",

"yetkili4" : "",

"yetkili5" : "",



"yetkili6" : "",

"yetkili7" : "",

"yetkili8" : "",

"yetkili9" : "",


"yönetici1" : "",

"yöneticivermelog" : "",






  "banhammer": "893783994292912142",

  "jailhammer": "893783994292912141",

  "transport": "",

  "mutehammer": "893783994292912140",

  "vmutehammer": "893783994292912139",

  "commandhammer": "893783994292912143",

  "warnhammer" : "",



  "banlog": "893783995043696709",

  "jaillog": "893783995043696708",

  "mutelog": "893783995043696707",

  "vmutelog": "893783995043696707",

  "uyarılog": "",

  "rollog": "893790000938889226", 

  "yetkilog": "919288026725761044",

  "boosterisimlog" : "919287984749150219",

  "inviteLog" : "893783995261788161",



  "onayemoji": "<a:deasn_yes:919289002924847194>",
  "redemoji": "<a:deasn_no:919288968430907413>",
  
  "murphyHG" : "<a:deasn_hi:920375736697774110>",
  "murphyTag" :"<a:deasn_elmas:920375808621699102>",
  "murphyTag2" :"<a:deasn_ay:920375891132022875>",

  "susturuldu" : "<a:deasn_unlem:920376013400191037>", 
  "susturulduKalkti" : "<a:deasn_unlem:920376013400191037>",
  "Cezalandrld" : "<a:deasn_unlem:920376013400191037>",

  "sayı0": "0",
  "sayı1": "1",
  "sayı2": "2",
  "sayı3": "3",
  "sayı4": "4",
  "sayı5": "5",
  "sayı6": "6",
  "sayı7": "7",
  "sayı8": "8",
  "sayı9": "9",


  "jailrol": "893783994276122641",

 "şüphelihesap": "893783994276122642",

  "muterol": "893783994276122640",
  
  "yasaklıTag" : "",
 


  "vip": "918964711557591086",

  "booster": "920370179479851038",

  "ekip": "",

  "uyarı": "893783994276122636",



"abilityHammer" : "",

"publicsorumlusu" : "889100475734056979",
"chatsorumlusu" : "889100475746623489",


"teyitsorumlusu" : "918964711591137317",

"ressam" : "889100475645980726",
"muzisyen" : "889100475658539030",
"yazılımcı" : "889100475645980725",
"streamer" : "889100475666935870",
"tasarım": "893790653983637555",


 }
///////////////////////////////////////////////////////

client.on('messageDelete', message => {
    const data = require("quick.db")
    data.set(`snipe.mesaj.${message.guild.id}`, message.content)
    data.set(`snipe.id.${message.guild.id}`, message.author.id)

  })

// Main Dosyası 

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const taginlo = (client.config.tag)
  const inlosunucu = (client.config.sunucuid)
  const inlokanal = (client.config.taglog)
  const rolinlo = (client.config.taglırol)

  try {

  if (newUser.username.includes(taginlo) && !client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.cache.has(rolinlo)) {
  await client.channels.cache.get(inlokanal).send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${newUser}, tagımızı \`${taginlo}\` aldığı için <@&${rolinlo}> rolünü verdim!`));
  await client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.add(rolinlo);
  }
  if (!newUser.username.includes(taginlo) && client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.cache.has(rolinlo)) {
  await client.channels.cache.get(inlokanal).send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${newUser}, tagımızı \`${taginlo}\` çıkardığı için <@&${rolinlo}> rolü alındı.`));
  await client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.remove(rolinlo);
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});
    //------------------------------------------------------------------------------------------------------------\\

  ///////////////////////////////////////////////////////
client.on("guildMemberAdd", member => {
    var moment = require("moment");
    require("moment-duration-format");
    moment.locale("tr");
    var { Permissions } = require("discord.js");
    var x = moment(member.user.createdAt)
      .add(7, "days")
      .fromNow();
    var user = member.user;
    x = x.replace("birkaç saniye önce", " ");
    if (!x.includes("önce") || x.includes("sonra") || x == " ") {
      const kayıtsız = client.config.kayıtsız;
      const kayıtsız1 = client.config.kayıtsız1;
      var rol = client.config.şüphelihesap;
      var jail = client.config.jailrol;
      var kayıtsız3 = client.config.kayıtsız
      member.roles.add(rol);
      member.roles.remove(client.config.kayıtsız);
      member.roles.remove(client.config.kayıtsız1);

      member.user.send(
        "Selam dostum! Ne yazık ki sana kötü bir haberim var :( Hesabın 1 hafta gibi kısa bir sürede açıldığı için fake hesap kategorisine giriyorsun. Tag alarak veya boost basarak jailden çıkabilirsin. `!tag`"
      );
      setTimeout(() => {}, 1000);
    } else {
    }
  });
  //--------------------------------------------------------------------------------------\\


  client.on("message", async message => {
    if(message.content.toLowerCase() == "tag") 
    return message.channel.send((client.config.tag))
  });
  

client.on("message", async message => {
  if(message.content.toLowerCase() == ".tag") 
  return message.channel.send((client.config.tag))
});


client.on("message", async message => {
  if(message.content.toLowerCase() == "-tag") 
  return message.channel.send((client.config.tag))
});


client.on("message", async message => {
  if(message.content.toLowerCase() == "!tag") 
  return message.channel.send((client.config.tag))
});

client.on("ready", () => {
  client.channels.cache.get(`${client.config.seskanal}`).join();
})


client.on("guildMemberAdd", member => {
  require("moment-duration-format")
  
 member.roles.add(`${client.config.kayıtsız}`)


     const kanal = member.guild.channels.cache.find(r => r.id === "918964712115425281");

     let user = client.users.cache.get(member.id);
     require("moment-duration-format");
       const kurulus = new Date().getTime() - user.createdAt.getTime();  
      const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[gün,]** HH **[saat,]** mm **[dakika,]** ss **[saniye]**`) 
     var kontrol;
   if (kurulus < 1296000000) kontrol = '**Güvenilir değil!** <a:deasn_no:919288968430907413>'
   if (kurulus > 1296000000) kontrol = '**Güvenilir gözüküyor!** <a:deasn_yes:919289002924847194>'
     moment.locale("tr");

     kanal.send(`

<a:deasn_hi:920375736697774110> Sunucuya hoş geldin! ${member} - ( \`${member.id}\` )

Hesabın \`${gecen}\` önce oluşturulmuş. Hesabın; ${kontrol}

Sunucu kurallarımız <#918964712434171954> kanalında belirtilmiştir. Unutma sunucu içerisindeki \`ceza-i işlemlerin\` kuralları okuduğunu varsayarak yapılacak!

Sunucumuz seninle beraber **${member.guild.memberCount}** kişi oldu!

:tada: Tag alarak ailemizin bi parçası olabilirsin, İyi eğlenceler! ||<@&918964711591137317>||
`)
});
      

////----------------------- iltifat-----------------------\\\\

const iltifatlar = [
  'Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.',
  'Mavi gözlerin, gökyüzü oldu dünyamın.',
  'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
  'Huzur kokuyor geçtiğin her yer.',
  'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
  'Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.',
  'Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.',
   'Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.',
   'Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.',
   'Etkili gülüş kavramını ben senden öğrendim.',
   'Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.',
   'Gözlerinle baharı getirdin garip gönlüme.',
   'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
   'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.',
   'Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.',
   'Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.',
   'Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.',
   'Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.',
   'Aynı zaman diliminde yaşamak benim için büyük ödüldür.',
   'Kalbime giden yolu aydınlatıyor gözlerin.  Sadece sen görebilirsin kalbimi. Ve sadece ben hissedebilirim bana karşı olan hislerini.',
   'Onu Bunu Boşver de bize gel 2 bira içelim.',
    'Taş gibi kızsın ama okey taşı… Elden elde gidiyorsun farkında değilsin.',
    'Ben seni çok sevdim...',
    'Mucizelerden bahsediyordum.',
  "Yaşanılacak en güzel mevsim sensin.",
  "Sıradanlaşmış her şeyi, ne çok güzelleştiriyorsun.",
  "Gönlüm bir şehir ise o şehrin tüm sokakları sana çıkar.",
  "Birilerinin benim için ettiğinin en büyük kanıtı seninle karşılaşmam.",
  "Denize kıyısı olan şehrin huzuru birikmiş yüzüne.",
  "Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.",
  "Gece yatağa yattığımda aklımda kalan tek gerçek şey sen oluyorsun.",
  "Ne tatlısın sen öyle. Akşam gel de iki bira içelim.",
  "Bir gamzen var sanki cennette bir çukur.",
  "Gecemi aydınlatan yıldızımsın.",
  "Ponçik burnundan ısırırım seni",
  "Bu dünyanın 8. harikası olma ihtimalin?",
  "fıstık naber?",
  "Kara kara gözlerin, yere değiyor dizlerin, akşam <@!852608747813077052>'a git de yarak görsün gözlerin.",
  "Dilek tutman için yıldızların kayması mı gerekiyor illa ki? Gönlüm gönlüne kaydı yetmez mi?",
  "Süt içiyorum yarım yağlı, mutluluğum sana bağlı.",
  "Müsaitsen aklım bu gece sende kalacak.",
  "Gemim olsa ne yazar liman sen olmadıktan sonra...",
  "Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.",
  "Sabahları görmek istediğim ilk şey sensin.",
  "Mutluluk ne diye sorsalar- cevabı gülüşünde ve o sıcak bakışında arardım.",
  "Hayatım ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.",
  "Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.",
  "Sesini duymaktan- hikayelerini dinlemekten asla bıkmayacağım. Konuşmaktan en çok zevk aldığım kişi sensin.",
  "Üzerinde pijama olsa bile, nasıl oluyor da her zaman bu kadar güzel görünüyorsun? Merhaba, neden bu kadar güzel olduğunu bilmek istiyorum.",
  "Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.",
  "Çocukluk yapsan da gönlüme senin için salıncak mı kursam?",
  "Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.",
  "Hangi çiçek anlatır güzelliğini? Hangi mevsime sığar senin adın. Hiçbir şey yeterli değil senin güzelliğine erişmeye. Sen eşsizsin...",
  "Rotanızı geçen her geminin ışığıyla değil, yıldızlara göre ayarlayın.",
  "Telaşımı hoş gör, ıslandığım ilk yağmursun.",
  "Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi..."
];
// İLTİFATLARI BU ŞEKİLDE İSTEDİĞİNİZ KADAR ÇOĞALTABİLİRSİNİZ
client.on("message", async message => {
  if(message.channel.id !== (client.config.chat)) return;
  let MURPHY = db.get('chatiltifat');
  await db.add("chatiltifat", +1);
  if(MURPHY >= 35) { // 50 yazan yer, 50 mesajda bir iltifat edeceğini gösterir, değiştirebilirsiniz.
    db.delete("chatiltifat");
    const random = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`${(iltifatlar)[random]}`);
  };
});




///////////////////member remove 
client.on('guildMemberRemove' , member => {
  if(member.roles.cache.has((client.config.kayıtsız))) return;
if(member.roles.cache.has((client.config.kayıtsız1))) return;
  db.get(`isimler_${member.user.id}`);
  db.push(`isimler_${member.id}`, `\` ${member.displayName} \` (sunucudan ayrılma)`);
})



    //----------------------TAG-KONTROL----------------------\\     STG    

client.on("guildMemberAdd", member => {
  let sunucuid = (client.config.sunucuid); 
  let tag = (client.config.tag); 
  let rol = (client.config.taglırol); 
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı katıldı, o doğuştan bizden!`)
      .setTimestamp()
     client.channels.cache.get((client.config.taglog)).send(tagalma)
}
})

client.on("guildMemberAdd", async member => {
  member.roles.add(`${client.config.kayıtsız}`);
 });

client.on("guildMemberAdd", async member => {
  member.roles.add(`${client.config.kayıtsız}`);
});


client.on("ready", async () => {
      client.user.setActivity("Rhea ❤️ Deasn", 
        { url: 'https://twitch.tv/.',
        type: 'STREAMING' }); 
})

////////////////////////////////////////////////
  client.on("guildMemberRemove", async member => {
    db.set(`isim.${member.id}`, member.displayName)
        });
        client.on("guildMemberAdd", async member => {
     let erdemnick = db.get(`isim.${member.id}`)
    await member.setNickname(erdemnick)
    member.setNickname(`${client.config.tag2} İsim | Yaş`)
    });


client.on("messageUpdate", async (oldMessage, newMessage) => {
if (newMessage.author.bot || newMessage.channel.type == "dm") return;
    let kanal = '918964715965800482' //log kanalının idsini yazınız //ottomancode
  if (!kanal) return;
if (oldMessage.content == newMessage.content) return;
const embed = new Discord.MessageEmbed()
.setColor('#8A2BE2')
 .setTimestamp()//ottomancode
.setFooter("Deasn was here!")
.setDescription(`Mesajı düzenlenen kullanıcı: ${oldMessage.author} | (\`${oldMessage.author.id}\`) \nMesajın düzenlendiği kanal: ${oldMessage.channel} | (\`${oldMessage.channel.id}\`)`)
.addField('Eski mesaj:', `\`${oldMessage.content}\``)
.addField('Yeni mesaj:', `\`${newMessage.content}\``)
client.channels.cache.get(kanal).send(embed) //ottomancode
})

client.on("messageDelete", async (message) => { //ottomancode
if (message.author.bot || message.channel.type == "dm") return;
    let kanal = '918964715965800482' //log kanalının idsini yazınız
  if (!kanal) return;
const embed = new Discord.MessageEmbed()
.setColor('#8A2BE2') //ottomancode
 .setTimestamp()
.setFooter("Deasn was here!")
.setDescription(`Mesajı silinen kullanıcı: ${message.author} | (\`${message.author.id}\`) \nMesajın silindiği kanal: ${message.channel} | (\`${message.channel.id}\`)`)
.addField('Silinen mesaj:', `\`${message.content}\``)
client.channels.cache.get(kanal).send(embed) //ottomancode
})

