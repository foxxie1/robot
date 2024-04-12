const axios = require("axios");
const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('foxes')
    .setDescription('Random Foxes!'),
  async execute(interaction) {

    try {
      const FOX_URL = 'https://randomfox.ca/floof/';

      const result = await axios.get(FOX_URL);
      return interaction.reply(result.data.image);
    } catch (error) {
      console.log(error)
      return interaction.reply("Could not fetch fox 🦊.");
    }
  },
};