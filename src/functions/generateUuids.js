import { v4 } from "uuid";

export function generateUUID(ammount) {
    let str = ""
    for (let i = 0; i < ammount; i++) {
        str += `\`\`\`fix\n${v4()}\`\`\``
    }
    return (str)
}
