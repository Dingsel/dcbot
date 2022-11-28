require('events').defaultMaxListeners = 40; // see this for info on event listeners: https://nodejs.org/api/events.html

// this is for setting up the bot clients
const { Client, Collection, Partials } = require('discord.js')
const client = new Client({intents: 3276799}, { partials: [Partials.Message, Partials.Channel, Partials.Reaction] })

module.exports = client

// this is adding the global variables for use in other files
client.commands = new Collection();

require('./src/handlers/commands')(client) // loads the bot commands
require('./src/handlers/events')(client) // loads the bot events
require('dotenv').config() // configures dotenv

// logs in the bot
client.login(process.env.TOKEN)