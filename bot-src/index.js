//storing all consts
const Discord = require('discord.js')
const client = new Discord.Client()
const {prefix, token } = require('./config.json')
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
    
      if (command === "ping")
        {message.reply('pong!')
      }

      else if (command === "help")
        {message.channel.send (`**Prefix:** "." \n**Commands:** ping, help, serverinfo, userinfo`)
      }

      else if (command === "serverinfo")
        {message.channel.send (`**Server name:** ${message.guild.name}\n**Amount of members:** ${message.guild.memberCount}\n**Server creation info:** ${message.guild.createdAt}\n**Server region:** ${message.guild.region}`)
      }

      else if (command === `userinfo`)
      {message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id} `)}
    
});