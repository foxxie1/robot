const axios = require("axios");
const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('anime')
    .setDescription('Anime!'),
  async execute(interaction, client) {

    try {
      const ANIME_URL = `https://www.animecharactersdatabase.com/api_series_characters.php?character_id=${getRandomInt(1, 130000)}`;

      const result = await axios.get(ANIME_URL);

      const embed = new EmbedBuilder()
        .setTitle(result.data.name)
        .setDescription(result.data.desc)
        .addFields([{ name: 'Origin', value: result.data.origin, inline: true }])
        .setImage(result.data.anime_image)
      .setThumbnail(result.data.character_image)
      .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL() })
      .setColor(0xFF5733)


      return interaction.reply({ embeds: [embed] });
    } catch {
      return "Could not fetch anime OwO.";
    }
  },
};