const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gn')
		.setDescription('Nighty Night  EN CY')
    .addStringOption((option) =>
      option
        .setName("language")
        .setDescription("Gn language")
        .setRequired(true)
        .addChoices(
          { name: "English", value: "en" },
          { name: "Welsh", value: "cy" }
        )
    ),
  async execute(interaction) {
    const language = interaction.options.getString('language');
    await interaction.reply(language === "en" ? `Night night ${interaction.user.username}, sleep well ^^` : `Nos nos ${interaction.user.username}, cysgu'n dda ^^`);
  },
};