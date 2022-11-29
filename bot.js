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
client.login('MTAxMDUxMTU1ODU0NTI2MDU2NQ.GqrS3y.R6FKcX8_VDAt4wNIM7FjoofFeUB8iL9HuGKcyU')