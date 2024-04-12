const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bonk')
    .setDescription('Bonk a member!')
    .addUserOption(option =>
      option
        .setName('target')
        .setDescription('The member to bonk')
        .setRequired(true)),

  async execute(interaction, client) {
    const targetMember = interaction.options.getMember('target');

    if (targetMember) {
      const bonker = interaction.user.username;
      const botVersion = 'v.1'; // Replace with your actual bot version
      const currentTime = new Date().toLocaleTimeString();

      const embed = {
        color: 0xFF5733, // Orange color
        title: `**${bonker} bonked ${targetMember.user.username}!**`,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL(),
        },
        image: {
          url: 'https://media.tenor.com/oHjfWJorYB8AAAAC/bonk.gif', // URL to the bonk GIF
        },
        footer: {
          text: `Fox-Bot Version: ${botVersion} | Current Time: ${currentTime}`,
        },
      };

      await interaction.reply({ embeds: [embed] });
    }
  },
};

