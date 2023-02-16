import { world } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

function Tpa() {
	const players = [...world.getPlayers()];
	let tpa = new ModalFormData()
	tpa.title(`§fTpa`)
	tpa.body(`§fPlease Enter The Player Name`)
	tpa.dropdown(`§fPlayer Name`, players.map(plr => plr.name))
	tpa.show(player).then(({ formValues: [dropdown] }) => {
		const Players = players[dropdown];
		player.runCommandAsync(`tp @s ${Players.name}`)
		player.tell(`§aTeleported To §b${Players.name}`)
	})
} 