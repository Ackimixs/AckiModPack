// priority: 0

onEvent('recipes', event => {

    setBloodAltarRecipe({ "item": "kubejs:chicken_exoskeleton" }, { "item": 'kubejs:chicken' }, 4, 50, 50000, 150)

    const chcikensList = [
        [{ "tag": "forge:dyes/lime" }, "lime"],
        [{ "tag": "forge:dyes/pink" }, "pink"],
        [{ "tag": "forge:dyes/white" }, "white"],
        [{ "tag": "forge:dyes/black" }, "black"],
        [{ "tag": "forge:dyes/brown" }, "brown"],
        [{ "tag": "forge:dyes/blue" }, "blue"],
        [{ "tag": "forge:dyes/cyan" }, "cyan"],
        [{ "tag": "forge:dyes/gray" }, "gray"],
        [{ "tag": "forge:dyes/light_blue" }, "light_blue"],
        [{ "tag": "forge:dyes/light_gray" }, "light_gray"],
        [{ "tag": "forge:dyes/magenta" }, "magenta"],
        [{ "tag": "forge:dyes/orange" }, "orange"],
        [{ "tag": "forge:dyes/purple" }, "purple"],
        [{ "tag": "forge:dyes/red" }, "red"],
        [{ "tag": "forge:dyes/yellow" }, "yellow"],
        [{ "tag": "forge:dyes/green" }, "green"],
        [{ "item": "minecraft:lava_bucket" }, "lava"],
        [{ "item": "minecraft:water_bucket" }, "water"],

        [{ "tag": 'forge:ingots/iron' }, "iron"],
        [{ "tag": 'forge:ingots/gold' }, "gold"],
        [{ "tag": 'forge:ingots/copper' }, "copper"],
        [{ "tag": 'forge:gems/diamond' }, "diamond"],
        [{ "tag": 'forge:gems/emerald' }, "emerald"],
        [{ "item": "minecraft:string" }, "string"],
        [{ "item": "minecraft:magma_cream" }, "magma"],
        [{ "tag": "forge:obsidian" }, "obsidian"],
        [{ "tag": "forge:dusts/glowstone" }, "glowstone"],
        [{ "tag": 'forge:gems/quartz' }, "quartz"],
        [{ "tag": "forge:gems/prismarine" }, "pshard"],
        [{ "tag": 'forge:gems/prismarine' }, "pcrystal"],
        [{ "item": "minecraft:coal" }, "coal"],
        [{ "item": "minecraft:snowball" }, "snowball"],
        [{ "item": "minecraft:nether_wart" }, "netherwart"],
        [{ "item": "minecraft:ender_pearl" }, "ender"],
        [{ "tag": "minecraft:logs" }, "log"],
        [{ "tag": "forge:glass" }, "glass"],
        [{ "item": "minecraft:book" }, "smart"],
        [{ "tag": 'forge:dusts/redstone' }, "redstone"],
        [{ "tag": 'forge:slimeballs' }, "slime"],
        [{ "item": 'minecraft:ghast_tear' }, "ghast"],
        [{ "item": "minecraft:flint" }, "flint"],
        [{ "tag": 'forge:rods/blaze' }, "blaze"],
        [{ "tag": 'forge:sand' }, "sand"],
        [{ "tag": 'forge:gunpowder' }, "gunpowder"],
        [{ "item": 'minecraft:soul_sand' }, "soulsand"],
        [{ "tag": 'forge:leather' }, "leather"],
        [{ "item": 'minecraft:clay_ball' }, "clay"],

        //Modded
        [{ "item": "ae2:cell_component_256k" }, "cfouche"],
        [{ "tag": 'forge:ingots/netherite' }, "netherite"],
        [{ "item": 'create:andesite_alloy' }, "andesite_alloy"],
        [{ "tag": 'forge:ingots/zinc' }, "zinc"],
        [{ "tag": 'forge:ingots/brass' }, "brass"],
        [{ "tag": 'forge:ingots/refined_radiance' }, "refined_radiance"],
        [{ "tag": 'forge:ingots/shadow_steel' }, "shadow_steel"],
        [{ "tag": 'forge:ingots/desh' }, "desh"],
        [{ "tag": 'forge:ingots/calorite' }, "calorite"],
        [{ "tag": 'forge:ingots/ostrum' }, "ostrum"],
        [{ "tag": 'forge:ingots/hellforged' }, "hellforged"],
        [{ "tag": 'forge:ingots/hepatizon' }, "hepatizon"],
        [{ "tag": 'forge:ingots/pig_iron' }, "pig_iron"],
        [{ "tag": 'forge:ingots/rose_gold' }, "rose_gold"],
        [{ "tag": 'forge:ingots/amethyst_bronze' }, "amethyst_bronze"],
        [{ "tag": 'forge:ingots/soulsteel' }, "soulsteel"],
        [{ "tag": 'forge:ingots/knightslime' }, "knightslime"],
        [{ "tag": 'forge:ingots/cobalt' }, "cobalt"],
        [{ "tag": 'forge:ingots/slimesteel' }, "slimesteel"],
        [{ "tag": 'forge:ingots/queens_slime' }, "queens_slime"],
        [{ "tag": 'forge:ingots/manyullyn' }, "manyullyn"],
        [{ "tag": 'forge:ingots/fairy' }, "fairy"],
        [{ "tag": 'forge:ingots/felsteel' }, "felsteel"],
        [{ "tag": 'forge:ingots/electrical_copper' }, "electrical_copper"],
        [{ "tag": 'forge:ingots/duralumin' }, "duralumin"],
        [{ "tag": 'forge:ingots/aluminum' }, "aluminum"],
        [{ "tag": 'forge:ingots/blazing_copper' }, "blazing_copper"],
        [{ "tag": 'forge:ingots/gausum' }, "gausum"],
        [{ "tag": 'forge:ingots/kepu' }, "kepu"],
        [{ "tag": 'forge:ingots/lavium' }, "lavium"],
        [{ "tag": 'forge:ingots/qivium' }, "qivium"],
        [{ "tag": 'forge:ingots/chorus_metal' }, "chorus_metal"],
        [{ "tag": 'forge:ingots/durasteel' }, "durasteel"],
        [{ "tag": 'forge:ingots/crusteel' }, "crusteel"],
        [{ "tag": 'forge:ingots/yokel' }, "yokel"],
        [{ "tag": 'forge:ingots/wavy' }, "wavy"],
        [{ "tag": 'forge:ingots/baolian' }, "baolian"],
        [{ "tag": 'forge:ingots/galu' }, "galu"],
        [{ "tag": 'forge:ingots/magma_steel' }, "magma_steel"],
        [{ "tag": 'forge:ingots/cyber_steel' }, "cyber_steel"],
        [{ "tag": 'forge:ingots/steel' }, "steel"],
        [{ "tag": 'forge:ingots/osmium' }, "osmium"],
        [{ "tag": 'forge:ingots/uranium' }, "uranium"],
        [{ "tag": 'forge:ingots/refined_glowstone' }, "refined_glowstone"],
        [{ "tag": 'forge:ingots/refined_obsidian' }, "refined_obsidian"],
        [{ "tag": 'forge:ingots/lead' }, "lead"],
        [{ "tag": 'forge:ingots/tin' }, "tin"],
        [{ "tag": 'forge:ingots/bronze' }, "bronze"],
        [{ "tag": 'forge:ingots/silver' }, "silver"],
        [{ "tag": 'forge:ingots/nickel' }, "nickel"],
        [{ "tag": 'forge:ingots/electrum' }, "electrum"],
        [{ "tag": 'forge:ingots/invar' }, "invar"],
        [{ "tag": 'forge:ingots/constantan' }, "constantan"],
        [{ "tag": 'forge:ingots/signalum' }, "signalum"],
        [{ "tag": 'forge:ingots/enderium' }, "enderium"],
        [{ "tag": 'forge:ingots/fluix_steel' }, "fluix_steel"],
        [{ "tag": 'forge:ingots/ventium' }, "ventium"],
        [{ "tag": 'forge:ingots/horizonite' }, "horizonite"],
        [{ "tag": 'forge:ingots/falsite' }, "falsite"],
        [{ "tag": "forge:silicon" }, "silicon"],
        [{ "tag": 'forge:gems/certus_quartz' }, "certus_quartz"],
        [{ "item": 'ae2:sky_dust' }, "sky_stone"],
        [{ "tag": 'forge:gems/fluix' }, "fluix"],
        [{ "item": "industrialforegoing:pink_slime_ingot" }, "pink_slime"],
        [{ "item": "powah:crystal_niotic" }, "niotic_crystal"],
        [{ "item": 'powah:crystal_blazing' }, "blazing_crystal"],
        [{ "item": 'powah:steel_energized' }, "energized_steel"],
        [{ "item": "powah:crystal_nitro" }, "crystal_nitro"],
        [{ "item": "powah:uraninite" }, "uraninite"],
        [{"item": "minecraft:dragon_egg"}, "dragon"],
        [{"item": "minecraft:nether_star"}, "nether"]

    ]

    //Ultimate chicken
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": ["ABCBA", "DEEED", "FEGEF", "HEEEH", "CHFHC"],
        "key": {
            "A": {
                "item": 'kubejs:living_chicken'
            },
            "B": {
                "item": 'ae2:cell_component_256k'
            },
            "C": {
                "item": 'rftoolsdim:legendary_essence'
            },
            "D": {
                "item": 'pipez:ultimate_upgrade'
            },
            "E": {
                "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
            },
            "F": {
                "item": 'mekanism:reprocessed_fissile_fragment'
            },
            "G": {
                "tag": 'forge:pellets/antimatter'
            },
            "H": {
                "item": 'kubejs:super_heated_block'
            }
        },
        "result": { "item": 'chickens:chicken_item', "nbt": `{ChickenType:{id:"chickens:ultimate_chicken"}}` },
        "acceptMirrored": true
    })

    for (let chickenData of chcikensList) {

        sequencedAssemblyChicken(
            { "item": "kubejs:living_chicken" },
            { "item": "kubejs:uncompleted_chicken" },
            chickenData[0],
            { "item": 'chickens:chicken_item', "nbt": `{ChickenType:{id:"chickens:${chickenData[1]}_chicken"}}` }, 5
        )

    }


    function setBloodAltarRecipe(input, output, level, consumptionRate, syphon, drainRate) {
        event.custom({
            "type": "bloodmagic:altar",
            "input": input,
            "output": output,
            "upgradeLevel": level,
            "altarSyphon": syphon,
            "consumptionRate": consumptionRate,
            "drainRate": drainRate
        })
    }


    //Item cannot be null
    function sequencedAssemblyChicken(ingredient, transitionalItem, ingotBase, result, loops) {
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": ingredient,
            "transitionalItem": transitionalItem,
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        },
                        ingotBase
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        },
                        {
                            "item": 'advgenerators:turbine_rotor_tier5'
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        },
                        {
                            "item": 'mekanism:ultimate_induction_cell'
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        },
                        {
                            "fluid": 'tconstruct:blazing_blood',
                            "nbt": {},
                            "amount": 500
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_chicken"
                        }
                    ]
                }
            ],
            "results": [
                result
            ],
            "loops": loops,
        })
    }


    //Base industrial foregoing recipe => dissolution chamber
    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "inputFluid": "{FluidName:\"tconstruct:molten_enderium\",Amount:2000}",
        "input": [
            {
                "item": "mekanism:robit"
            },
            {
                "item": 'upgradednetherite:feather_upgraded_netherite_helmet'
            },
            {
                "item": "mekanism:robit"
            },
            {
                "item": "ae2:cell_component_256k"
            },
            {
                "item": "ae2:cell_component_256k"
            },
            {
                "item": 'bloodmagic:altarcapacityrune'
            },
            {
                "item": 'rftoolsbase:machine_frame'
            },
            {
                "item": 'bloodmagic:altarcapacityrune'
            }
        ],
        "processingTime": 300,
        "output": {
            "item": "kubejs:chicken_exoskeleton",
            "count": 1
        }
    })


    //Creating living chicken
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "kubejs:chicken"
            },
            {
                "item": "kubejs:chicken_soul"
            },
            {
                "fluid": "mekanism:oxygen",
                "nbt": {},
                "amount": 1000
            },
            {
                "fluid": "minecraft:water",
                "nbt": {},
                "amount": 1000
            }
        ],
        "results": [
            {
                "item": "kubejs:living_chicken",
                "count": 1
            }
        ],
        "heatRequirement": "heated"
    })
})