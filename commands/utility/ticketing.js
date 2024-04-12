const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ticket')
    .setDescription('Create a ticket'),
  async execute(interaction) {
    // Get the user who invoked the command
    const user = interaction.user;

    // Find the server owner
    const serverOwner = await interaction.guild.members.fetch(interaction.guild.ownerId);

    // Send a direct message to the server owner
    serverOwner.send(`${user.username} has opened a ticket. Please assist them.`);

    // Reply to the user in the interaction channel
    const responseEmbed = {
      title: 'Opened Ticket',
      description: `A DM has been sent to ${serverOwner.user.username} for assistance.`,
      color: 0xFF5733, // Set a color
    };

    interaction.reply({ embeds: [responseEmbed] });
  },
};

