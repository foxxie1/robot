const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nuke')
    .setDescription('Initiates the nuke process'),

  async execute(interaction) {
    // Respond with the initial message
    await interaction.reply('Initiating nuke process...');
    
    // Simulate the nuke process
    const nukeProcess = [
      'Accessing mainframe...',
      'Decrypting firewalls...',
      'Injecting malware...',
      'Bypassing security protocols...',
      'Engaging hacking process...',
      'Uploading virus...',
      'Executing final stage...',
      'Target system compromised.',
    ];

    for (const step of nukeProcess) {
      await interaction.followUp(step);
      await sleep(2000); // Delay between messages (2 seconds)
    }

    // Completion message
    await interaction.followUp('Nuke process completed.');
  },
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
