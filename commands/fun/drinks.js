const { SlashCommandBuilder } = require('discord.js');

const drinks = [
    {
        name: 'Wine',
        description: 'A selection of wines, ranging from sweet and fruity to robust and bold, made with fresh grapes and dandelions from the estate, and matured in oak barrels.',
        price: '20 Fox-Bucks 💴',
    },
    {
        name: 'Cider',
        description: 'A freshly squeezed, fashionable, and fruity beverage. Said to have a strong sobering effect, tavern patrons often order this as the last drink of the night.',
        price: '5 Fox-Bucks 💴',
    },
    {
        name: 'Beer',
        description: 'A refreshing alcoholic beverage made from fermented grains, hops, yeast, and water.',
        price: '5 Fox-Bucks 💴',
    },
  {
     name: 'Milk',
        description: 'Thick, creamy, fresh milk. High in protein. There are no cows on the estate but there is always plenty of this milk in stock.',
      price: '3 Fox-Bucks 💴',
  },
    {
     name: 'Choccy Milk',
        description: 'A chocolate alternative to satisfy your sweet tooth.',
      price: '5 Fox-Bucks 💴',
  },
    {
     name: 'Hot Tea',
        description: 'Served the British way.',
      price: '2 Fox-Bucks 💴',
  }
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('drinks')
        .setDescription('View our virtual drinks menu!'),
    async execute(interaction) {
        if (interaction.commandName === 'drinks') {
            const drinkMenuEmbed = {
                color: 0xFF5733,
                title: 'Virtual Drink Menu',
                fields: drinks.map((drink, index) => ({
                    name: `**${index + 1}. ${drink.name}**`,
                    value: `Description: ${drink.description}\n**Price: ${drink.price}**`,
                })),
            };

            await interaction.reply({ embeds: [drinkMenuEmbed] });
        }
    },
};