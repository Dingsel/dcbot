import { ActivityType } from 'discord.js'

const event = {
    name: "ready",
    once: true,
    async execute(client) {

        client.user.setActivity("with Addons", { type: ActivityType.Playing })
        client.user.setStatus("online")

        console.log(`[Bot] Login Successful. ${client.user.username} Online.`)
        
    }
};

export {event}