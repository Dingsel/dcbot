import { readdirSync } from 'fs'
import { client } from '../../bot.js'

try {

    const files = readdirSync(`./dcbot/src/commands`).filter(files => files.endsWith('.js'))
    const cmdArray = [];

    for (const file of files) {
        const { command } = await import(`../commands/${file}`)
        client.commands.set(command.name, command)
        cmdArray.push(command)
    }

    client.on("ready", () => {
        client.application.commands.set(cmdArray);
    })
    
    console.log("[Bot] Commands were loaded successfully.");

} catch(err) {
    console.log(err);
}

