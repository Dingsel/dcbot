import { v4 } from "uuid";

export function generateUUID(ammount) {
    let str = ""
    for (let i = -1; i < ammount; i++) {
        str += v4() + "\n"
    }
    return (`\`\`\`${str}\`\`\``)
}
