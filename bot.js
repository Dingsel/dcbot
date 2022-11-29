// this is for setting up the bot clients
import { Client, Collection, Partials } from 'discord.js'
const client = new Client({intents: 3276799}, {partials: [Partials.Message, Partials.Channel, Partials.Reaction]})

export {client}
client.commands = new Collection() // this is adding the global vars

import('./src/handlers/commands.js') // loads the bot commands
import('./src/handlers/events.js') // loads the bot events

import * as dotenv from "dotenv"
dotenv.config() // configures dotenv

// logs in the bot
client.login(process.env.TOKEN)