const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('support')
    .setDescription('Support Fox-Bot'),
  async execute(interaction) {

    const embed = {
      title: 'Fox-Bot Support',
      description: 'Support Foxxie Productions at: https://www.patreon.com/foxxie1',
      color: 0xFF5733, // You can set a color here
    };
    // Send the embedded message
    await interaction.reply({ embeds: [embed] });
  },
};
