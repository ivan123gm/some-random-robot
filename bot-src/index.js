//storing all consts
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token } = require('./config.json');
//login with token in config.json
client.login(token);

//logging that bot has been launched in console
client.once('ready', () => {
 console.log('Hey, this bot is online now!');
  });

//splitting command and arguments (just in case if i gonna add bot commands arguments.)
  client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'ping')
      {message.reply('pong!')}
    
      else if (command === 'hello')
        {message.reply('hello!')}

      else if (command === 'bruh')
        {message.reply('bruh')}
        
      else if (command === 'help')
      {message.channel.send (`Prefix: "." \nCommands: ping, hello, bruh, help`)}
});