const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('battle')
    .setDescription('Bot Battle! Tag a bot for Fox-Bot to battle.')
    .addUserOption(option =>
      option
        .setName('opponent')
        .setDescription('The bot to battle against')
        .setRequired(true)),
  async execute(interaction, client) {
    const botOpponent = interaction.options.getUser('opponent');

    if (!botOpponent.bot) {
      // Check if the mentioned user is a bot
      await interaction.reply('You can only battle against other bots.');
      return;
    }

    // Simulate the battle (replace this with your battle logic)
    const winner = Math.random() > 0.5 ? 'Fox-Bot' : botOpponent.username;
    // Get the avatars of both bots
    const foxBotAvatar = client.user.displayAvatarURL({ dynamic: true, format: 'png' });
    const opponentAvatar = botOpponent.displayAvatarURL({ dynamic: true, format: 'png' });
    const embed = {
          title: `Battle Result: ${winner} wins the battle!`,
          description: '',
          color: 0xFF5733, // You can set a color here
          image: 
            {
              url: `${opponentAvatar}`,
            },
          thumbnail: 
            {
              url: `${foxBotAvatar}`,
            },
          };

        return interaction.reply({ embeds: [embed] })
      },
    };