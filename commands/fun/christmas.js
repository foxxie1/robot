const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('christmas')
    .setDescription('Get the Christmas countdown timer.'),
  async execute(interaction, client) {
    const christmasDate = new Date('December 25, 2023 00:00:00 GMT-0800'); // Change the date if needed
    const currentDate = new Date();

    const timeDifference = christmasDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    const botVersion = 'v.1'; // Replace with your actual bot version
    const currentTime = new Date().toLocaleTimeString();

    const response = {
      embeds: [{
        title: 'Christmas Countdown',
        description: `🎄 ${days} days, ${hours} hours, ${minutes} minutes until Christmas!`,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL(),
        },
        color: 0xFF5733, // You can set the color as per your preference
        footer: {
          text: `Fox-Bot Version: ${botVersion} | Current Time: ${currentTime}`,
        },
      }],
    };

    await interaction.reply(response);
  },
};
