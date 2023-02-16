import { system, Items, ItemStack, world } from "@minecraft/server";
const illegalitems = [
    "minecraft:light_block",
    "minecraft:lit_smoker",
    "minecraft:daylight_detector_inverted",
    "minecraft:powered_comparator",
    "minecraft:lit_blast_furnace",
    "minecraft:lit_furnace",
    "minecraft:camera",
    "minecraft:end_gateway",
    "minecraft:fire",
    "minecraft:soul_fire",
    "minecraft:frosted_ice",
    "minecraft:flowing_lava",
    "minecraft:unknown",
    "minecraft:flowing_water",
    "minecraft:barrier",
    "minecraft:command_block",
    "minecraft:chemistry_table",
    "minecraft:debug_stick",
    "minecraft:command_block_minecart",
    "minecraft:repeating_command_block",
    "minecraft:spawn_egg",
    "minecraft:spawner",
    "minecraft:structure_block",
    "minecraft:structure_void",
    "minecraft:info_update",
    "minecraft:info_update2",
    "minecraft:reserved3",
    "minecraft:reserved4",
    "minecraft:reserved6",
    "minecraft:movingblock",
    "minecraft:moving_block",
    "minecraft:movingBlock",
    "minecraft:invisiblebedrock",
    "minecraft:invisible_bedrock",
    "minecraft:bedrock",
    "minecraft:glowingobsidian",
    "minecraft:compoundcreator",
    "minecraft:underwater_torch",
    "minecraft:chemical_heat",
    "minecraft:end_portal",
    "minecraft:end_portal_frame",
    "minecraft:colored_torch",
    "minecraft:hard_stained_glass_pane",
    "minecraft:hard_glass_pane",
    "minecraft:allow",
    "minecraft:chain_command_block",
    "minecraft:client_request_placeholder_block",
    "minecraft:deny",
    "minecraft:npc_spawn",
    "minecraft:stickyPistonArmCollision",
    "minecraft:sticky_piston_arm_collision",
    "minecraft:piston_arm_collision",
    "minecraft:netherreactor",
    "minecraft:mob_spawner",
    "minecraft:border_block",
    "minecraft:bubble_column",
    "minecraft:jigsaw",
    "minecraft:portal",
    "minecraft:chicken_spawn_egg",
    "minecraft:bee_spawn_egg",
    "minecraft:cow_spawn_egg",
    "minecraft:pig_spawn_egg",
    "minecraft:sheep_spawn_egg",
    "minecraft:wolf_spawn_egg",
    "minecraft:polar_bear_spawn_egg",
    "minecraft:ocelot_spawn_egg",
    "minecraft:cat_spawn_egg",
    "minecraft:mooshroom_spawn_egg",
    "minecraft:bat_spawn_egg",
    "minecraft:parrot_spawn_egg",
    "minecraft:rabbit_spawn_egg",
    "minecraft:llama_spawn_egg",
    "minecraft:horse_spawn_egg",
    "minecraft:donkey_spawn_egg",
    "minecraft:chicken_spawn_egg",
    "minecraft:mule_spawn_egg",
    "minecraft:skeleton_horse_spawn_egg",
    "minecraft:zombie_horse_spawn_egg",
    "minecraft:tropical_fish_spawn_egg",
    "minecraft:cod_spawn_egg",
    "minecraft:pufferfish_spawn_egg",
    "minecraft:salmon_spawn_egg",
    "minecraft:dolphin_spawn_egg",
    "minecraft:sea_turtle_spawn_egg",
    "minecraft:panda_spawn_egg",
    "minecraft:fox_spawn_egg",
    "minecraft:creeper_spawn_egg",
    "minecraft:enderman_spawn_egg",
    "minecraft:silverfish_spawn_egg",
    "minecraft:skeleton_spawn_egg",
    "minecraft:wither_spawn_egg",
    "minecraft:stray_spawn_egg",
    "minecraft:slime_spawn_egg",
    "minecraft:spider_spawn_egg",
    "minecraft:zombie_spawn_egg",
    "minecraft:zombified_piglin_spawn_egg",
    "minecraft:husk_spawn_egg",
    "minecraft:drowned_spawn_egg",
    "minecraft:squid_spawn_egg",
    "minecraft:glow_squid_spawn_egg",
    "minecraft:cave_spider_spawn_egg",
    "minecraft:witch_spawn_egg",
    "minecraft:guardian_spawn_egg",
    "minecraft:elder_guardian_spawn_egg",
    "minecraft:endermite_spawn_egg",
    "minecraft:magma_cube_spawn_egg",
    "minecraft:strider_spawn_egg",
    "minecraft:hoglin_spawn_egg",
    "minecraft:piglin_spawn_egg",
    "minecraft:zoglin_spawn_egg",
    "minecraft:piglin_brute_spawn_egg",
    "minecraft:goat_spawn_egg",
    "minecraft:axolotl_spawn_egg",
    "minecraft:ghast_spawn_egg",
    "minecraft:blaze_spawn_egg",
    "minecraft:shulker_spawn_egg",
    "minecraft:vindicator_spawn_egg",
    "minecraft:evoker_spawn_egg",
    "minecraft:vex_spawn_egg",
    "minecraft:villager_spawn_egg",
    "minecraft:wandering_trader_spawn_egg",
    "minecraft:zombie_villager_spawn_egg",
    "minecraft:phantom_spawn_egg",
    "minecraft:pillager_spawn_egg",
    "minecraft:ravager_spawn_egg",
    "minecraft:allay_spawn_egg",
    "minecraft:tadpole_spawn_egg",
    "minecraft:frog_spawn_egg",
    "minecraft:warden_spawn_egg",
    "minecraft:pumpkin_stem",
    "minecraft:melon_stem",
    "minecraft:lava",
    "minecraft:water",
    "minecraft:lit_redstonelamp",
    "minecraft:powered repeater",
    "minecraft:lit_redstone_ore",
    "minecraft:lit_deepslate_redstone_ore",
    "minecraft:standing_sign",
    "minecraft:wall_sign",
    "minecraft:pistonarmcollision",
    "minecraft:stickypistonarmcollision",
    "minecraft:chalkboard",
    "minecraft:lava_cauldron",
    "minecraft:border",
    "minecraft:glow_stick",
    "minecraft:reeds",
    "minecraft:double_stone_slab",
    "minecraft:double_wooden_slab",
    "minecraft:monster_egg",
    "minecraft:stone_monster_egg",
    "minecraft:farmland"
];
const air = new ItemStack(Items.get("minecraft:stick"), 0);
system.runSchedule(() => {
    var _a;
    for (const player of world.getPlayers()) {
        const container = player.getComponent("inventory").container;
        for (let r = 0; i < 36; i++) {
            const item = container.getItem(i);
            if (!item)
                continue;
            const itemName = (_a = item.nameTag) !== null && _a !== void 0 ? _a : "";
            if (itemName.length > 30) {
                if (player.hasTag("admin"))
                    return;
                else {
                    container.setItem(i, air);
                    player.runCommandAsync("tag @s[tag=!admin] add ban");
                }
            }
            else if (item.getLore().length > 0) {
                if (player.hasTag("admin"))
                    return;
                else {
                    container.setItem(i, air);
                    player.runCommandAsync("tag @s[tag=!admin] add ban");
                }
            }
            for (let i = 0; i < container.size; i++) {
                const item = container.getItem(i);
                if (!item || !illegalitems.includes(item.typeId))
                    continue;
                if (player.hasTag("admin"))
                    return;
                else {
                    player.runCommandAsync("tag @s[tag=!admin] add ban");
                    world.say(`Â§c${player.name} obtained illegal item. ${item.typeId}`);
                    container.setItem(i, air);
                }
            }
        }
    }
});
