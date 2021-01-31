const { DiscordAPIError, Channel } = require("discord.js");

module.exports = {
	name: 'userinfo',
	execute(message, args) {
		message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id} `);
	},
};