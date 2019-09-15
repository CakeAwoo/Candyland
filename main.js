const login = require('./login');
let token = login.token();

const Discord = require('discord.js');

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

client.on('message', msg => {
	if (msg.content === 'pvp kill JustCake') {

	
		

	msg.reply('https://cdn.weeb.sh/images/r11as1tvZ.gif');

	}
  });
  

  

  client.on('message', msg => {
	if (msg.content === 'pvp kill Max the Wolf') {

	
		

	msg.reply('https://cdn.weeb.sh/images/r11as1tvZ.gif');

	}
  });
  
  client.on('message', msg => {
	if (msg.content === 'pvp kill When u h') {

	
		

	msg.reply('https://cdn.weeb.sh/images/r11as1tvZ.gif');

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

//fiiiiiiiiiiiiiiiiiiiiiiiiish
client.on('message', msg => {
  if (msg.content === 'me fish') {


    msg.reply(`You caught a swedish fish :sf:`);

  }
});







//hunt
client.on('message', msg => {
  if (msg.content === 'me hunt') {


    msg.reply(`You gunned down a Chocolate bunny suprise mothafucka`);

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
//thx https://github.com/discordjs/guide/blob/master/code-samples/popular-topics/canvas/index.js



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

client.on('message', message => {
  if (message.content === 'testing 123') {
    const embed = new RichEmbed()
     
      .setTitle('A slick little embed')
   
      .setColor(0xFF0000)
      
      .setDescription('Hello, this is a slick embed!');
    
    message.channel.send(embed);
  }
});


client.login(token)
