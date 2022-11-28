const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "ping",
    description: "Get the bot and API latency",
    async execute(interaction, client) {

        const pingCalc = new EmbedBuilder()
        .setTitle("🧠 Calculating latency... ")
        .setColor("Purple")

        const ping = await interaction.reply({ embeds: [pingCalc], fetchReply: true, ephemeral: true })

        const embed = new EmbedBuilder()
        .setTitle("🏓 Pong!")
        .setColor("Purple")
        .addFields(
            {name: "Bot Ping", value: `\`${ping.createdTimestamp - interaction.createdTimestamp} ms\``},
            {name: "API Ping", value: `\`${client.ws.ping} ms\``},
        )

        await interaction.editReply({ 
            embeds: [embed],
        })

    }
}