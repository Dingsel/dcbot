const { InteractionType } = require('discord.js');

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {

        if (interaction.type === InteractionType.ApplicationCommand) {
            const command = client.commands.get(interaction.commandName)
            await command.execute(interaction, client).catch((err) => {

                return console.log(err),
                interaction.reply({
                    content: "💥 An error occured, please try again later.",
                    ephemeral: true
                })

            })
            
        }

    }
}