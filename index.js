const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const startSelfPingLoop = require("./server.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}

client.once(Events.ClientReady, () => {
  client.user.setActivity(`in ${client.guilds.cache.size} servers`);

  client.guilds.cache.each(guild => {
    console.log(guild.name);
  });

  startSelfPingLoop();
});

client.on('guildCreate', (guild) => {
  // This event is triggered when the bot is added to a new server (guild).
  console.log(`Bot added to server: ${guild.name} (${guild.id})`);
  console.log(`Server member count: ${guild.memberCount}`);
});

client.on('guildDelete', (guild) => {
  // This event is triggered when the bot is removed from a server (guild).
  console.log(`Bot removed from server: ${guild.name} (${guild.id})`);
  console.log(`Server member count at the time of removal: ${guild.memberCount}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction, client);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
    } else {
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  }
});

client.login(token);
process.on("unhandledRejection", (err) => {
  console.error(err);
});
