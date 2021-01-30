module.exports = {
	name: 'serverinfo',
	execute(message, args) {
		message.channel.send (`**Server name:** ${message.guild.name}\n**Amount of members:** ${message.guild.memberCount}\n**Server creation info:** ${message.guild.createdAt}\n**Server region:** ${message.guild.region}`);
	},
};