// import { Client, GatewayIntentBits, REST, Routes } from "discord.js"
// import { createManifestFromTemplate } from "./src/functions/manifestTamplate.js";
// import * as dotenv from "dotenv"
// import { generateUUID } from "./src/functions/generateUuids.js";
// dotenv.config()

// const client = new Client({
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.GuildMessages,
//     ]
// });


// const commands = [
//     {
//         name: "manifest",
//         description: "Generates a manifest file for you!",
//         options: [
//             {
//                 name: "name",
//                 description: "Set the Name of the Pack",
//                 type: 3,
//                 required: false
//             },
//             {
//                 name: "description",
//                 description: "Set the description point for the manifest",
//                 type: 3,
//                 required: false
//             },
//             {
//                 name: "entry_point",
//                 description: "Set the entry point for the manifest",
//                 type: 3,
//                 required: false
//             }
//         ]
//     },
//     {
//         name: "ping",
//         description: "Get the bot ping"
//     },
//     {
//         name: "boop",
//         description: "Boop!"
//     },
//     {
//         name: "uuid",
//         description: "Generates a unique identifier",
//         options: [
//             {
//                 name: "amount",
//                 description: "Set the number of uuid's to generate",
//                 type: 4,
//                 required: false
//             }
//         ]
//     }
// ]


// const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);


// (async () => {
//     await rest.put(Routes.applicationCommands("1039968930887913552"), { body: commands })
// })().catch(e => console.error(e))


// client.once('ready', () => {
//     console.log('Ready!');
// });


// client.on("interactionCreate", async (data) => {
//     switch (data.commandName) {
//         case "manifest": {
//             data.reply({
//                 content: createManifestFromTemplate(data.options.data),
//                 ephemeral: true
//             })
//             break;
//         }
//         case "boop": {
//             data.reply({
//                 content: ":dizzy: **Boop!** :dizzy:",
//                 ephemeral: true
//             })
//             break;
//         }
//         case "ping": {
//             const ping = await data.reply({
//                 content : "🧠 Calculating Latency...",
//                 ephemeral: true,
//                 fetchReply: true
//             })
//             const edit = ping.createdTimestamp - data.createdTimestamp

//             await data.editReply(`Pong! 🏓\nBot Ping: ​\`${edit}ms\``)
//             break;
//         }
//         case "uuid": {
//             let reply = data.options?.data?.find(x => x.name == "amount")
//             let value = Math.abs(reply?.value ?? 1)
//             if (11 <= value) value = 10
//             data.reply({
//                 content: generateUUID(Number(value ?? 1)),
//                 ephemeral: true,
//             })
//             break;
//         }
//     }
// })


// client.login(process.env.TOKEN)

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
client.login('MTA0NjU0ODAzMzU1MjI3MzQ2OQ.G0Fmz6.AbHhMa3GsbPeBnJg20adVvza-Tql-bqOKoKeFk')