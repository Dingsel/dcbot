module.exports = {
    name: "messageCreate",
    async execute(message, client) {

        if(message.content == "!hello") message.reply(`Hello, ${message.author}`)

    }
}