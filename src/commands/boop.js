const command = {
    name: 'boop',
    description: 'Boop!',
    async execute(interaction) {

        interaction.reply({
            content: "💫 **Boop!** 💫",
            ephemeral: true
        })

    }
}

export {command}