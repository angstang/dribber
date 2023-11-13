require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login("MTE3MzQ0ODg1NzQwNTg4MjM4OA.GtXCre.85XywG8vxvDeFZaDOVdvdk_u9fFEfhgA3dKTFs");
