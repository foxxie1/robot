const { SlashCommandBuilder } = require('discord.js');

const food = [
    {
        name: 'Savory Steak',
        description: 'A succulent, thick-cut piece of seared steak, seasoned to perfection, and bursting with juicy, meaty flavor. A carnivores delight.',
        price: '20 Fox-Bucks 💴',
    },
    {
        name: 'Katsu Curry',
        description: 'A crispy, breaded cutlet served atop a bed of steaming Japanese curry sauce, combining the best of crunchy and comforting flavors.',
        price: '10 Fox-Bucks 💴',
    },
    {
        name: 'Windblume Salad',
        description: 'A refreshing salad composed of crisp lettuce, sweet dandelion greens, and fragrant anemogram petals, drizzled with a zesty vinaigrette that dances on the tongue like the wind itself.',
        price: '8 Fox-Bucks 💴',
    },
  {
     name: 'Grilled Fowl',
        description: 'Tender fowl, marinated in a blend of Mondstadt herbs, roasted over an open flame to create a smoky, succulent masterpiece.',
    price: '10 Fox-Bucks 💴',
  },
    {
     name: 'Fontaine Cream Puffs',
        description: 'Heavenly puffs filled with silky cream and drizzled with rich chocolate, an indulgent treat favored by the residents of Fontaine.',
      price: '5 Fox-Bucks 💴',
  }
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('food')
        .setDescription('View our virtual Food menu!'),
    async execute(interaction) {
        if (interaction.commandName === 'food') {
            const foodMenuEmbed = {
                color: 0xFF5733,
                title: 'Virtual Food Menu',
                fields: food.map((food, index) => ({
                    name: `**${index + 1}. ${food.name}**`,
                    value: `Description: ${food.description}\n**Price: ${food.price}**`,
                })),
            };

            await interaction.reply({ embeds: [foodMenuEmbed] });
        }
    },
};