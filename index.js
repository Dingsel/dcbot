import * as dotenv from "dotenv"
import { Client, EmbedBuilder, REST, Routes } from 'discord.js'
import { ESLint } from "eslint"


dotenv.config()
const client = new Client({ intents: ['MessageContent', 'GuildMessages'] })

const commands = [
    {
        name: "debug",
        description: "Checks your code for errors!"
    }
]

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    await rest.put(Routes.applicationCommands("1039968930887913552"), { body: commands })
})().catch(e => console.error(e))

//slash commands
client.on("interactionCreate", async (data) => {
    const d = data
    switch (d.commandName) {
        case "debug": {
            //const input = data.options._hoistedOptions.find((x) => x.name == "code").value
            //debug(input)
            const channel = await client.channels.fetch(d.channelId)
            channel.messages.fetch({ limit: 1 }).then(async messages => {
                let lastMessage = messages.first();
                const content = lastMessage.content

                let embed = new EmbedBuilder()

                try {
                    const formated = content.split("```js\n")[1].split("```")[0]
                    const dbg = await debug(formated)
                    embed.setColor(dbg == "No Errors Found!" ? "Green" : "Red")
                    embed.setTitle("Debug Results")
                    embed.setDescription(dbg);

                } catch (error) {
                    embed.setColor("Red")
                    embed.setTitle("No code found")
                    embed.setDescription("The last message was not formatted correctly.\nPlease use:\n` ```js      \n//Your Code\n```         `\nto format the message.");
                }

                data.reply({
                    embeds: [embed]
                })
            })
        }
    }
})

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.TOKEN)

async function debug(str) {
    const linter = new ESLint({ fix: true })

    const results = await linter.lintText(str)


    if (results[0].errorCount == 0) return "No Errors Found!"

    const formatter = await linter.loadFormatter("compact");

    const resultText = formatter.format(results);

    console.warn(resultText)

    return resultText
}