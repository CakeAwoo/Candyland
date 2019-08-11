const myModule = require('./login');
let token = myModule.token();

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



//pet profile
client.on('message', msg => {
  if (msg.content === 'my pet') {


    msg.reply(`Your pet:
    Species : Jello Cat 
    Level : 1
    Status : Hungry AF
    Breed : Generic`);

  }
});





client.login(token);