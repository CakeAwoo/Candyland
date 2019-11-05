const login = require('./login');
let token = login.token();

var serverowocount = 0

const Discord = require('discord.js');

const {RichEmbed} = require('discord.js')

const message = require('discord.js')

const guild = require('discord.js')

const Canvas = require('canvas');

const Minesweeper = require('discord.js-minesweeper');

const client = new Discord.Client();

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();


var fs = require("fs");
var mkdirp = require('mkdirp');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  

});




client.on('message', msg => {
  if (msg.content === 'credits') {
	msg.reply(`Candyland by the epik gamers:
	CakeAwoo
	Max the Wolf
	Akiak 
	`);
  }
});

client.on('message', message => {
	if (message.content === 'pvp kill JustCake') {
	  const embed = new RichEmbed()
	   
		.setTitle('You 420 rekt JustCake')
	 .setImage('https://cdn.weeb.sh/images/r11as1tvZ.gif')
	
	  
	  message.channel.send(embed);
	}
  });
  
  

  

  client.on('message', message => {
	if (message.content === 'pvp kill Max the wolf') {
	  const embed = new RichEmbed()
	   
		.setTitle('You 420 rekt Max the wolf')
	 .setImage('https://cdn.weeb.sh/images/r11as1tvZ.gif')
	
	  
	  message.channel.send(embed);
	}
  });
  
  client.on('message', message => {
	if (message.content === 'pvp kill When u h') {
	  const embed = new RichEmbed()
	   
		.setTitle('You 420 rekt When u h')
	 .setImage('https://cdn.weeb.sh/images/r11as1tvZ.gif')
	
	  
	  message.channel.send(embed);
	}
  });
  


//feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed me
client.on('message', msg => {
  if (msg.content === 'my pet feed') {


    msg.reply(`You fed your pet a cookie :cookie:`);

  }
});

//fiiiiiiiiiiiiiiiiiiiiiiiiish
client.on('message', msg => {
  if (msg.content === 'me fish') {


    msg.reply(`You caught a swedish fish :sf:`);

  }
});







//hunt
client.on('message', message => {
	if (message.content === 'me hunt') {
	  const embed = new RichEmbed()
	   
		.setTitle('You gunned down a chocolate bunny suprise mothafucka')
	 .setImage('https://i.imgur.com/Pw5xg2f.gif')
	

	  
	  message.channel.send(embed);
	}
  });







//welcome starts here
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'overworld');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#000000';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#000000';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});

client.on('message', async message => {
	if (message.content === '!join') {
		client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
});
//welcome ends here


//minesweeper
client.on('message', msg => {
	if (msg.content === 'my pet play minesweeper') {

	  msg.reply(`
	  || :one: || || :one: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: ||
	  || :boom: || || :one: || || :zero: || || :zero: || || :zero: || || :zero: || || :one: || || :one: || || :one: || || :zero: || || :zero: || || :zero: ||
	  || :two: || || :two: || || :one: || || :one: || || :one: || || :one: || || :one: || || :boom: || || :three: || || :two: || || :one: || || :zero: ||
	  || :one: || || :boom: || || :one: || || :one: || || :boom: || || :one: || || :one: || || :two: || || :boom: || || :boom: || || :one: || || :zero: ||
	  || :one: || || :one: || || :one: || || :one: || || :one: || || :one: || || :zero: || || :one: || || :two: || || :two: || || :one: || || :zero: ||
	  || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: ||
	  || :zero: || || :one: || || :one: || || :one: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: ||
	  || :zero: || || :one: || || :boom: || || :one: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: ||
	  || :zero: || || :one: || || :one: || || :one: || || :zero: || || :zero: || || :one: || || :one: || || :one: || || :zero: || || :zero: || || :zero: ||
	  || :zero: || || :one: || || :one: || || :one: || || :zero: || || :zero: || || :one: || || :boom: || || :one: || || :zero: || || :one: || || :one: ||
	  || :zero: || || :one: || || :boom: || || :one: || || :zero: || || :zero: || || :one: || || :one: || || :one: || || :zero: || || :one: || || :boom: ||
	  || :zero: || || :one: || || :one: || || :one: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :zero: || || :one: || || :one: ||`);
	
  
	}
  });


  


 
  //CrEeEeEpEr
client.on('message', msg => {
	if (msg.content === 'Creeper') {

	  msg.reply(`Awwww Man`);
	
  
	}
  });


//no u banning y'all really made me do this

client.on('message', msg => {
	if (msg.content === 'No u') {

	  msg.reply(`Hey faggot, Don't use any form of no u   it is prohibited`);
	
  
	}
  });



client.on('message', msg => {
	if (msg.content === 'no u') {

	  msg.reply(`Hey faggot, Don't use any form of no u   it is prohibited`);
	
  
	}
  });


client.on('message', msg => {
	if (msg.content === 'No you') {

	  msg.reply(`Hey faggot, Don't use any form of no u   it is prohibited`);
	
  
	}
  });


client.on('message', msg => {
	if (msg.content === 'no you') {

	  msg.reply(`Hey faggot, Don't use any form of no u   it is prohibited`);
	
  
	}
  });

//pet profile
client.on('message', message => {
  if (message.content === 'my pet') {
    const embed = new RichEmbed()
     
      .setTitle('Your Pet')
   
	  .setColor('#EC0BE6')
	  .setThumbnail('https://i.ibb.co/h2P1psb/image.png')
 
      .setDescription(`Species : Jello Cat 
	  Level : 1
	  Status : Hungry AF
	  Breed : Generic
	  Dovenaz Resistant : false`);
    
    message.channel.send(embed);
  }
});



client.on('message', msg => {
	if (msg.content === 'me sync') {

		var codegen = Math.floor((Math.random() * 11111) + 99999);
	  msg.reply(`sync code:` + codegen);
	
  
	}
  });


  client.on('message', message => {


	var inv = fs.readFileSync("inventory.json");
	var invparsed = JSON.parse(inv);
	var slot1 = invparsed.item1;
	var slot2 = invparsed.item2;
	var slot3 = invparsed.item3;
	var slot4 = invparsed.item4;
	var slot5 = invparsed.item5;
	var slot6 = invparsed.item6;
	var slot7 = invparsed.item7;
	var slot8 = invparsed.item8;
	var slot9 = invparsed.item9;
	var slot10 = invparsed.item10;

	

	if (message.content === 'my inv') {
	  const embed = new RichEmbed()
	   
		.setTitle('Your Inventory')
	 
		.setColor('#EC0BE6')
	
		.setDescription(' Slot 1:'+ slot1 + ' Slot 2:'+ slot2 + ' Slot 3:'+ slot3 + ' Slot 4:'+ slot4 + ' Slot 5:'+ slot5); 
	  
	  message.channel.send(embed);
	}
  });
  
  client.on('message', msg => {
	if (msg.content === 'me register') {
		var codegen = Math.floor((Math.random() * 11111) + 99999);

		var discordtag = user.username
		
	  msg.reply('registered ' + discordtag + 'to the database write down:' + codegen);
	
  
	}
  });


  client.on('message', msg => {
	if (msg.content === 'OwO') {
	var serverowocount = serverowocount + 1;
	  msg.reply('OwO count:' + serverowocount);
	
  
	}
  });

  client.on('message', msg => {
	if (msg.content === 'nigger') {
		msg.reply('THATS RACIST YOU CANT SAY THE NIGGER WORD!!!!!!!!!!!!!!!!!!');
  
	}
  });


  client.on('message', msg => {
	if (msg.content === 'nigga') {
	  msg.reply('THATS RACIST YOU CANT SAY THE NIGGER WORD!!!!!!!!!!!!!!!!!!');
	
  
	}
  });

client.login(token)
