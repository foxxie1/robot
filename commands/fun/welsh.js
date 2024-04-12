const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("greet")
    .setDescription("greet EN CY")
    .addStringOption((option) =>
      option
        .setName("language")
        .setDescription("The language to greet in.")
        .setRequired(true)
        .addChoices(
          { name: "English", value: "en" },
          { name: "Welsh", value: "cy" }
        )
    ),
  async execute(interaction) {
    const language = interaction.options.getString('language');
    await interaction.reply(language === "en" ? "Hello!" : "Bore Da!");
  },
};