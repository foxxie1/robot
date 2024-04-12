const axios = require("axios");
const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("genshin")
    .setDescription("Genshin Impact!")
    .addStringOption((option) =>
      option
        .setName("character")
        .setDescription("The character.")),
  async execute(interaction, client) {
    const characterName = interaction.options.getString("character");

    try {
      const GENSHIN_URL = `https://api.genshin.dev/characters/${characterName}`;

      const result = await axios.get(GENSHIN_URL);

      const embed = new EmbedBuilder()
        .setTitle(result.data.name)
        .setDescription(result.data.description)
      .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL() })

      return interaction.reply({ embeds: [embed] });
    } catch {
      return interaction.reply("Could not fetch Genshin character info qwq.");
    }
  },
};