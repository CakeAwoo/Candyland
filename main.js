const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'credits') {
    msg.reply(`Candyland by CakeAwoo and Jellyfish Epik :) OwO `);
  }
});

client.login('NjA5OTM4NzE4MDM1NTQyMDc2.XU-AWA.6cUxA-uslnyjVsxvhEvZXpqYHqo');