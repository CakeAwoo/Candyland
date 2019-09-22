const login = require('./login');
let token = login.token();

const Discord = require('discord.js');

const {RichEmbed} = require('discord.js')

const Canvas = require('canvas');

const Minesweeper = require('discord.js-minesweeper');


const client = new Discord.Client();



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
//pet profile
client.on('message', message => {
  if (message.content === 'my pet') {
    const embed = new RichEmbed()
     
      .setTitle('Your Pet')
   
	  .setColor('#EC0BE6')
	  .setThumbnail('https://i.ibb.co/FqC2Gc4/jellocat.png')
 
      .setDescription(`Species : Jello Cat 
	  Level : 1
	  Status : Hungry AF
	  Breed : Generic
	  Dovenaz Resistant : false`);
    
    message.channel.send(embed);
  }
});




client.login(token)
