const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Fox-Bot help menu'),
  async execute(interaction) {
    // Get all registered slash commands
    const commands = interaction.client.commands;

    // Create formatted strings for each command with clickable syntax
    const commandList = commands.map(command => `\`/${command.data.name}\``).join('\n');

    // Create an embedded message with the list of commands
    const embed = {
      title: '**_Fox-Bot Help Menu!_**',
      description: `Here are the available commands:\n${commandList}`,
      color: 0xFF5733,
    };

    // Send the embedded message
    await interaction.reply({ embeds: [embed] });
  },
};

