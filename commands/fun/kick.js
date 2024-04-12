const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kick a member >:3 (but not really).')
		.addUserOption(option => option.setName('target').setDescription('The member to kick').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		return interaction.reply({ content: `You wanted to kick: ${member.user.username}`, ephemeral: true });
	},
};