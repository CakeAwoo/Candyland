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
    Breed : Generic
    Dovenaz Resistant : false`);

  }
});

//feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed me
client.on('message', msg => {
  if (msg.content === 'my pet feed') {


    msg.reply(`You fed your pet a cookie :cookie:`);

  }
});

//feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed me
client.on('message', msg => {
  if (msg.content === 'terms') {


    msg.reply(`UwU Candyland falls under GPL-3.0 but there are more terms
    
    
    1 : No using Candyland for the purpose of spreading weeb shit hentai , Stupid anime , Animemes we aint about that like
    and you can get banned for that`);

  }
});


client.login(token);