const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('updates')
    .setDescription('Updates'),
  async execute(interaction) {

    const embed = {
      title: 'Foxxie Productions Updates',
      description: 'DEC Update: Undergoing changes to commands/ displays. View website for details. Thankies for choosing Fox-Bot!',
      color: 0xFF5733, // You can set a color here
    };
    // Send the embedded message
    await interaction.reply({ embeds: [embed] });
  },
};
