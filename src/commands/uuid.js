import { ApplicationCommandOptionType, EmbedBuilder } from 'discord.js'
import { v4 } from 'uuid'

const command = {
    name: "uuid",
    description: "Generates a unique identifier",
    options: [
        {
            name: "amount",
            description: "Set the number of uuid's to generate",
            type: ApplicationCommandOptionType.Integer,
            required: true
        }
    ],
    async execute(interaction) {
        const amount = interaction.options.getInteger("amount")
        if(amount == 0 || amount > 10) return interaction.reply("⛔ You cannot make that many uuids.")

        const embed = new EmbedBuilder()
        .setTitle(`Generated ${amount} UUIDs`)
        .setColor("Purple")

        function generateUUID(amt) {
            let string = ""
            for (let i = 0; i < amt; i++) {
                string += `\`\`\`j\n${v4()}\`\`\``
            }
            return (string)
        }

        embed.setDescription(generateUUID(amount))

        interaction.reply({
            embeds: [embed],
            ephemeral: true
        })
    }  
}

export {command}