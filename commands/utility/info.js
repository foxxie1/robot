const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

function getTotalMemberCount(client) {
  let totalMembers = 0;

  // Iterate through all the guilds the bot is in
  client.guilds.cache.forEach((guild) => {
    totalMembers += guild.memberCount;
  });

  return totalMembers;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get Fox-Bot info'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .addFields([
        {
          name: "Servers",
          value: `I am in ${interaction.client.guilds.cache.size}`,
        },
        {
          name: "Users",
          value: `${getTotalMemberCount(interaction.client)}`,
        },
      ])
      .setColor(0xFF5733)
      .setTitle('Fox-Bot info')
      .setThumbnail(interaction.client.user.displayAvatarURL({ dynamic: true }))
    .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL() });

    return interaction.reply({ embeds: [embed] });
  },
};

