//storing all consts
const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const { fileURLToPath } = require('url');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//logging that bot has been launched in console
client.once('ready', () => {
 console.log('Hey, this bot is online now!');
  });

//splitting command and arguments (just in case if i gonna add bot commands arguments.)
  client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;    

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
   

//something like command handler
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.args && !args.length ) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('It\'s **impossible** to execute that command inside DMs!');
    }    

    try {
        command.execute(message, args);
      } catch (error) {
        console.error(error);
        message.reply('Something went wrong while executing this command!');
      }

});
       //login with token in config.json
       client.login(token);
