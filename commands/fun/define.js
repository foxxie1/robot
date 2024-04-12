const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios'); // You can use 'axios' or another HTTP client library

module.exports = {
  data: new SlashCommandBuilder()
    .setName('define')
    .setDescription('Define a word')
    .addStringOption(option =>
      option.setName('word')
        .setDescription('The word to define')
        .setRequired(true),
    ),
  async execute(interaction) {
    const word = interaction.options.getString('word');

    try {
      const response = await axios.get(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(word)}`);
      const data = response.data;

      if (data.list && data.list.length > 0) {
        const definition = data.list[0].definition.substring(0, 1000);
        await interaction.reply(`Definition of "${word}":\n${definition}`);
      } else {
        await interaction.reply(`No definition found for "${word}"`);
      }
    } catch (error) {
      console.error(error);
      await interaction.reply('An error occurred while fetching the definition.');
    }
  },
};
