module.exports = {
	name: 'help',
	execute(message, args) {
		message.channel.send (`**Prefix:** "." \n**Commands:** ping, help, serverinfo, userinfo`);
	},
};