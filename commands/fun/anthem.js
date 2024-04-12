const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anthem")
    .setDescription("Anthem EN CY")
    .addStringOption((option) =>
      option
        .setName("country")
        .setDescription("Pick country")
        .setRequired(true)
        .addChoices(
          { name: "English", value: "en" },
          //{ name: "Welsh", value: "cy" }//
        )
    ),
  async execute(interaction) {
    const language = interaction.options.getString('country');
    if (language === "en") {
      await interaction.reply("https://www.youtube.com/watch?v=Yj7uKNt3Ghg");
    } else if (language === "cy") {
      // Handle Welsh option here if needed
    }
  },
};

