const { SlashCommandBuilder } = require('discord.js');

// Array of faces
const faces = [':D', ':)', ':]', ':P', ':3', ':O', 'UwU', 'OwO', '@w@','^-^', '^o^', 'DwD', '≧◡≦','( ͡° ͜ʖ ͡°)', '◐ω◑', 'º﹃º', 'ʕ •ᴥ•ʔ','^._.^', '>:3'];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('face')
    .setDescription('Send a kawaii face'),
  async execute(interaction) {
    // Select a random face from the array
    const randomFace = faces[Math.floor(Math.random() * faces.length)];
    
    // Send the selected face as a response
    await interaction.reply(randomFace);
  },
};
