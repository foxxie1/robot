const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hi')
    .setDescription('Say hello!'),
  async execute(interaction) {
    const botVersion = 'v.1'; // Replace with your actual bot version
    const currentTime = new Date().toLocaleTimeString();

    const embedMessage = {
      title: 'Hello!',
      description: 'Hai, I am Fox-Bot, your personal foxboy companion :fox: .',
      color: 0xFF5733, // You can set a color here
      author: {
        name: interaction.client.user.username,
        iconURL: interaction.client.user.avatarURL(),
      },
      footer: {
        text: `Fox-Bot Version: ${botVersion} | Current Time: ${currentTime}`,
      },
    };

    // Send the embedded message
    await interaction.reply({ embeds: [embedMessage] });
  },
};
