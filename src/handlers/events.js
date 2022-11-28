const { readdirSync } = require('fs');

module.exports = async (client) => {

    try {

        const files = readdirSync(`./dcbot/src/events`).filter(files => files.endsWith('.js'));

        for (const file of files) {
            const event = require(`../events/${file}`)
            if(event.once) client.once(event.name, (...args) => event.execute(...args, client))
            else client.on(event.name, (...args) => event.execute(...args, client))
        }

        console.log("[Bot] Events were loaded successfully.");

    } catch(err) {
        return console.log(err);
    }

}
  