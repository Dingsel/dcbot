import { readdirSync } from 'fs'
import { client } from '../../bot.js'

try {

    const files = readdirSync(`./dcbot/src/events`).filter(files => files.endsWith('.js'))

    for (const file of files) {
        const { event } = await import(`../events/${file}`)
        if(event.once) client.once(event.name, (...args) => event.execute(...args, client))
        else client.on(event.name, (...args) => event.execute(...args, client))
    }

    console.log("[Bot] Events were loaded successfully.")

} catch(err) {
    console.log(err);
}
