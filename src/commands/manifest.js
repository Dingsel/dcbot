import { EmbedBuilder, ApplicationCommandOptionType } from 'discord.js'
import { v4 } from 'uuid'

const command = {
    name: "manifest",
    description: "Generates a manifest file for you!",
    options: [
        {
            name: "name",
            description: "Set the Name of the Pack",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "description",
            description: "Set the description point for the manifest",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "entry_point",
            description: "Set the entry point for the manifest",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async execute(interaction) {
        const entryPoint = interaction.options.getString("entry_point")
        const description = interaction.options.getString("description")
        const name = interaction.options.getString("name")

        const embed = new EmbedBuilder()
        .setTitle(`Your Manifest File`)
        .setColor("Purple")
        .setDescription(`
        \`\`\`JSON
{
    "format_version": 2,
    "header": {
    "name": "${name}",
    "description": "${description}",
    "uuid": "${v4()}",
    "version": [0,0,1],
    "min_engine_version": [1, 19, 50]
    },
    "modules": [
    {
        "type": "data",
        "uuid": "${v4()}",
        "version": "[1,0,0]"
    },
    {
        "language": "javascript",
        "type": "script",
        "uuid": "75501345-486a-45c1-9b26-f439cd17e1b1",
        "version": [1,0,0],
        "entry": "${entryPoint}"
    }
    ],
    "dependencies": [
    {
        "module_name": "@minecraft/server",
        "version": "1.1.0-beta"
    },
    {
        "module_name": "@minecraft/server-gametest",
        "version": "1.0.0-beta"
    },
    {
        "module_name": "@minecraft/server-ui",
        "version": "1.0.0-beta"
    }
    ]
}\`\`\`
        `)

        interaction.reply({
            embeds: [embed],
            ephemeral: true
        })

    }
}

export {command}