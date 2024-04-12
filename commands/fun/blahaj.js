const axios = require("axios");
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('blahaj')
    .setDescription('Random Blahaj!'),
  async execute(interaction, client) {
    try {
      const blahaj_URL = 'https://blahaj.transgirl.dev/images/random';

      const result = await axios.get(blahaj_URL);

      console.log(client)

      // Create an embed with the Blahaj image
      const embed = new EmbedBuilder()
        .setColor(0xFF5733)
        .setTitle('Random Blahaj!')
        .setImage(result.data.url)
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL() });

      return interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      return interaction.reply("Could not fetch Blahaj 🦈.");
    }
  },
};
