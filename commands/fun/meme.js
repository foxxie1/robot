const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');
const MEME_URL = "https://www.reddit.com/r/dankmeme.json?sort=top&t=week";

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Get a meme from reddit!'),             
  async execute(interaction) {
    try {
      const memes = await fetchMemes();

      if (!memes.length) {
        return interaction.reply("Fresh out of memes.");
      }

      const index = Math.floor(Math.random() * memes.length);
      return interaction.reply(memes[index].url);
    } catch (e) {
      return interaction.reply("Could not fetch memes.");
    }
  },
};

async function fetchMemes() {
  const { data } = await axios.get(MEME_URL);
  return data.data.children
    .filter((post) => !post.data.over_18)
    .map((post) => post.data);
}