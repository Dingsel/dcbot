import { Client, GatewayIntentBits, REST, Routes } from "discord.js"
import { createManifestFromTemplate } from "./src/functions/manifestTamplate.js";
import * as dotenv from "dotenv"
dotenv.config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
});


const commands = [
    {
        name: "manifest",
        description: "Generates a manifest file for you!",
        options: [
            {
                name: "name",
                description: "Set the Name of the Pack",
                type: 3,
                required: false
            },
            {
                name: "description",
                description: "Set the description point for the manifest",
                type: 3,
                required: false
            },
            {
                name: "entry_point",
                description: "Set the entry point for the manifest",
                type: 3,
                required: false
            }
        ]
    },
    {
        name: "boop",
        description: "Boop!"
    }
]


const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);


(async () => {
    await rest.put(Routes.applicationCommands("1039968930887913552"), { body: commands })
})()


client.once('ready', () => {
    console.log('Ready!');
});


client.on("interactionCreate", async (data) => {
    switch (data.commandName) {
        case "manifest": {
            data.reply(createManifestFromTemplate(data.options.data))
            break;
        }
        case "boop":[
            data.reply(":dizzy: **Boop!** :dizzy:")
        ]
    }
})


client.login(process.env.TOKEN)