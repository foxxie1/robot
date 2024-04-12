const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fox')
		.setDescription('Send a cute fox picture!'),
	async execute(interaction) {
		await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWJE4S-_YvngxyDXtp9OqeIgqjLNGZNYr0g&usqp=CAU');
	},
};
