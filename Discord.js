{\rtf1\ansi\ansicpg936\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const \{ Client, Intents \} = require('discord.js');\
const axios = require('axios');\
const client = new Client(\{ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] \});\
\
const botToken = 'YOUR_DISCORD_BOT_TOKEN';\
const openAiApiKey = 'YOUR_OPENAI_API_KEY';\
\
client.once('ready', () => \{\
    console.log('Bot is ready!');\
\});\
\
client.on('messageCreate', async message => \{\
    if (message.author.bot) return;\
    \
    try \{\
        const response = await axios.post(\
            'https://api.openai.com/v1/engines/davinci-codex/completions',\
            \{\
                prompt: message.content,\
                max_tokens: 50\
            \},\
            \{\
                headers: \{\
                    'Authorization': `Bearer $\{openAiApiKey\}`\
                \}\
            \}\
        );\
\
        const reply = response.data.choices[0].text.trim();\
        message.channel.send(reply);\
    \} catch (error) \{\
        console.error('Error responding to message:', error);\
        message.channel.send('Sorry, I encountered an error.');\
    \}\
\});\
\
client.login(botToken);\
}