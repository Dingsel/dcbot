import { Client, GatewayIntentBits, REST, Routes } from "discord.js"
import { createManifestFromTemplate } from "./src/functions/manifestTamplate.js";
import * as dotenv from "dotenv"
import { generateUUID } from "./src/functions/generateUuids.js";
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
    },
    {
        name: "uuid",
        description: "Generates a unique identifier",
        options: [
            {
                name: "amount",
                description: "Set the number of uuid's to generate",
                type: 4,
                required: false
            }
        ]
    }
]


const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);


(async () => {
    await rest.put(Routes.applicationCommands("1039968930887913552"), { body: commands })
})().catch(e => console.error(e))


client.once('ready', () => {
    console.log('Ready!');
});


client.on("interactionCreate", async (data) => {
    switch (data.commandName) {
        case "manifest": {
            data.reply({
                content: createManifestFromTemplate(data.options.data),
                ephemeral: true
            })
            break;
        }
        case "boop": {
            data.reply({
                content: ":dizzy: **Boop!** :dizzy:",
                ephemeral: true
            })
            break;
        }
        case "uuid": {
            let reply = data.options?.data?.find(x => x.name == "amount")
            let value = Math.abs(reply?.value ?? 1)
            if (11 <= value) value = 10
            data.reply({
                content: generateUUID(Number(value ?? 1)),
                ephemeral: true,
            })
            break;
        }
    }
})


client.login(process.env.TOKEN)