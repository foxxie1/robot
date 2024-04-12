const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vote')
    .setDescription('Vote for Fox-Bot'),
  async execute(interaction) {

    const embed = {
      title: 'Fox-Bot Vote',
      description: '☑ | Your daily vote is available! You can vote every 12 hours! https://discordbotlist.com/bots/fox-bot-7991',
      color: 0xFF5733, // You can set a color here
    };
    // Send the embedded message
    await interaction.reply({ embeds: [embed] });
  },
};
