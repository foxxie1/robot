const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fight')
    .setDescription('Fox-Bot VS Arcane!'),
  async execute(interaction) {
    await interaction.reply('https://foxxiefox.files.wordpress.com/2023/08/fight.jpg?w=1024');
  },
};
