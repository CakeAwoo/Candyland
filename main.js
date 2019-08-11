const Discord = require('discord.js');
const client = new Discord.Client();

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjA5OTM4NzE4MDM1NTQyMDc2.XU-AWA.6cUxA-uslnyjVsxvhEvZXpqYHqo');