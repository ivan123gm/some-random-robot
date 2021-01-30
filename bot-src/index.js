//storing all consts
const fs = require('fs')
const Discord = require('discord.js')
const {prefix, token} = require('./config.json');
const { fileURLToPath } = require('url');

const client = new Discord.Client()
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//login with token in config.json
client.login(token)

//logging that bot has been launched in console
client.once('ready', () => {
 console.log('Hey, this bot is online now!')
  });

//splitting command and arguments (just in case if i gonna add bot commands arguments.)
  client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (!client.commands.has(command)) return;

    try {
	client.commands.get(command).execute(message, args);
    } catch (error) 
	{console.error(error);
	message.reply('something went wrong while executing this command!');
}

});
