const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('brrr'),
	async execute(interaction) {
		await interaction.reply('boop');
	},
};
