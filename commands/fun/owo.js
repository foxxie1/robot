const owoify = require("owoify-js").default;
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("owo")
    .setDescription("OwOify")
    .addStringOption((option) => option.setName("text").setDescription("Text to owoify")),
  async execute(interaction) {
    const text = interaction.options.getString("text");
    const owo = owoify(text);

    return interaction.reply(owo);
  }
};