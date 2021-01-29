
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

client.login('insert-your-token-here');

client.once('ready', () => {
 console.log('Hey, this bot is online now!');
  });

  client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping')
      {message.reply('pong!')}

      else if (command === 'hello')
        {message.reply('hello!')};

});
