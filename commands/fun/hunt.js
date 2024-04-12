const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('foxhunt')
    .setDescription('Fox-Hunt!'),
  async execute(interaction) {
    // Array of possible locations
    const locations = ['Cave', 'Valley', 'Forest'];

    // Randomly select one location
    const randomIndex = Math.floor(Math.random() * locations.length);
    const selectedLocation = locations[randomIndex];

    const embed = {
      title: 'Fox-Hunt Game',
      description: 'Fox-Bot is missing. Pick a possible location: Cave, Valley, Forest',
      color: 0xFF5733, // You can set a color here
    };

    // Create buttons for "Cave," "Valley," and "Forest"
    const caveButton = {
      type: 2, // Button type
      style: 1, // Button style (PRIMARY)
      custom_id: 'location_cave', // Custom ID (make sure it's unique)
      label: 'Cave', // Button label
    };

    const valleyButton = {
      type: 2, // Button type
      style: 1, // Button style (PRIMARY)
      custom_id: 'location_valley', // Custom ID (make sure it's unique)
      label: 'Valley', // Button label
    };

    const forestButton = {
      type: 2, // Button type
      style: 1, // Button style (PRIMARY)
      custom_id: 'location_forest', // Custom ID (make sure it's unique)
      label: 'Forest', // Button label
    };

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
      components: [
        {
          type: 1,
          components: [caveButton, valleyButton, forestButton], // Add all buttons here
        },
      ],
    });

    // Handle button interactions
    const filter = (buttonInteraction) =>
      buttonInteraction.customId.startsWith('location_');
    console.log(interaction, interaction.channel)
    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      time: 15000, // 15 seconds to click a button
    });

    collector.on('collect', (buttonInteraction) => {
      const selectedButton = buttonInteraction.customId.split('_')[1];
      if (selectedButton === selectedLocation.toLowerCase()) {
        // Correct location selected
        buttonInteraction.update({
          components: [
            {
              type: 2,
              style: 3, // Success style (GREEN)
              customId: buttonInteraction.customId,
              label: buttonInteraction.label, // Fixed label here
              disabled: true, // Disable the button
            },
            // Set other buttons to red (DANGER)
            {
              type: 2,
              style: 4, // Danger style (RED)
              customId: valleyButton.custom_id,
              label: valleyButton.label,
              disabled: true,
            },
            {
              type: 2,
              style: 4, // Danger style (RED)
              customId: forestButton.custom_id,
              label: forestButton.label,
              disabled: true,
            },
          ]
        });

        buttonInteraction.reply({ content: 'Congratulations! You found Fox-Bot!', ephemeral: true });
      } else {
        // Incorrect location selected
        buttonInteraction.update({
          components: [
            {
              type: 2,
              style: 4, // Danger style (RED)
              customId: buttonInteraction.customId,
              label: buttonInteraction.label, // Fixed label here
              disabled: true, // Disable the button
            },
          ],
        });
        buttonInteraction.reply({ content: 'You searched, but Fox-Bot was not there. Keep searching!', ephemeral: true });
      }
    });
  },
};


