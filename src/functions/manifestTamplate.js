import { v4 } from "uuid";

function findData(name, data) {
  const found = data?.find(x => x.name == name)
  if (!found) return null
  console.log(found)
  return found.value
}

export function createManifestFromTemplate(data) {
  return (`\`\`\`JSON
{
    "format_version": 2,
    "header": {
      "name": "${findData("name", data) ?? "Name"}",
      "description": "${findData("description", data) ?? "Description"}",
      "uuid": "${v4()}",
      "version": [0,0,1],
      "min_engine_version": [1,19,0]
    },
    "modules": [
      {
        "type": "data",
        "uuid": "${v4()}",
        "version": "[1,0,0]"
      },
      {
        "language": "javascript",
        "type": "script",
        "uuid": "75501345-486a-45c1-9b26-f439cd17e1b1",
        "version": [1,0,0],
        "entry": "${findData("entry_point", data) ?? "scripts/main.js"}"
      }
    ],
    "dependencies": [
      {
        "module_name": "@minecraft/server",
        "version": "1.0.0-beta"
      },
      {
        "module_name": "@minecraft/server-gametest",
        "version": "1.0.0-beta"
      },
      {
        "module_name": "@minecraft/server-ui",
        "version": "1.0.0-beta"
      }
    ]
}\`\`\``)
}