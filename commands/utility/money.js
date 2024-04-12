const { SlashCommandBuilder } = require('discord.js');

// Store user balances in a JavaScript object
const userBalances = {};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bank')
    .setDescription('Check your Fox-Bucks 💴'),
  async execute(interaction) {
    const userId = interaction.user.id;

    // Check if the user has a balance, initialize to 0 if not
    if (!userBalances[userId]) {
      userBalances[userId] = 0;
    }

    const embedMessage = {
      color: 0xFF5733,
      title: 'Fox-Bucks Balance',
      description: `${interaction.user.username} has ${userBalances[userId]} Fox-Bucks 💴`,
    };

    await interaction.reply({ embeds: [embedMessage] });
    },
};
