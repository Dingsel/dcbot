const { readdirSync } = require('fs')

module.exports = (client) => {

    try {
        
        const files = readdirSync(`./dcbot/src/commands`).filter(files => files.endsWith('.js'))
        const cmdArray = [];

        for (const file of files) {
            const command = require(`../commands/${file}`)
            client.commands.set(command.name, command)
            cmdArray.push(command)
        }

        client.on("ready", () => {
            client.application.commands.set(cmdArray);
        })
        
        console.log("[Bot] Commands were loaded successfully.");

    } catch(err) {
        return console.log(err);
    }

};