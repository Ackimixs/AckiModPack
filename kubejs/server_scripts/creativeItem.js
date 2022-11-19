// priority: 0

onEvent('recipes', event => {

    ['chemical_tank', 'fluid_tank', 'energy_cube'].forEach(item => mekaCreative(item));

    function mekaCreative(item) {
        event.custom({
            "type": "create:mechanical_crafting",
            "pattern": ["AABAA", "ACCCA", "DCECD", "ACCCA", "AAFAA"],
            "key": {
                "A": {
                    "item": `mekanism:ultimate_${item}`
                },
                "B": {
                    "item": 'bloodmagic:etherealslate'
                },
                "C": {
                    "tag" : 'forge:pellets/antimatter'
                },
                "D": {
                  "item": 'botania:gaia_ingot'  
                },
                "E": {
                    "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
                },
                "F": Item.of('tconstruct:creative_slot', '{slot:"upgrades"}').toJson()
            },
            "result": {"item": `mekanism:creative_${item}`},
            "acceptMirrored": true
          })
    }
    [
        [{"item": 'botania:fabulous_pool'}, {"item": 'botania:gaia_ingot'}, {"item": 'botania:creative_pool'}],
        [{"item": 'pipez:ultimate_upgrade'}, {"item": 'pipez:universal_pipe'}, {"item": 'pipez:infinity_upgrade'}],
        [{"item": 'create:blaze_cake'}, {"item": 'create_confectionery:gingerbread_man'}, {"item": 'create:creative_blaze_cake'}],
        [{"item": 'powah:energy_cell_nitro'}, {"item": 'powah:battery_nitro'}, {"item": 'powah:energy_cell_creative'}],
        [{"item": 'ae2:item_storage_cell_256k'}, {"item": 'ae2things:disk_drive_64k'}, {"item": 'ae2:creative_item_cell'}],

    ].forEach(craft => baseCreative(craft[0], craft[1], craft[2]));
    function baseCreative(input1, input2, output) {
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": Item.of('tconstruct:creative_slot', '{slot:"upgrades"}').toJson() ,
            "transitionalItem": {"item": "kubejs:uncompleted_creative_upgrade"},
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        },
                        input1
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        },
                        input2
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        },
                        {
                            "tag": 'forge:pellets/antimatter'
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        },
                        {
                            "tag": 'forge:ingots/cyber_steel'
                        }
                    ],
                    "results": [
                        {
                            "item": "kubejs:uncompleted_creative_upgrade"
                        }
                    ]
                },
            ],
            "results": [
                output
            ],
            "loops": 6,
        })
    }

    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": ["ABA", "CAC", "DED"],
        "key": {
            "A": {
                "tag": 'forge:ingots/cyber_steel'
            },
            "B": {
                "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
            },
            "C": {
                "item": 'pipez:ultimate_upgrade'
            },
            "D": {
                "item": 'powah:crystal_niotic'
            },
            "E": {
                "item": 'bloodmagic:etherealslate'
            },
        },
        "result": Item.of('tconstruct:creative_slot', '{slot:"upgrades"}').toJson()
    })
    
    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": ["ABBCBBA", "BDEFEDB", "BGFHFGB", "CFHAHFC", "BGFHFGB", "BDEFEDB", "ABBCBBA"],
        "key": {
            "A": {
                "item": 'ae2:creative_item_cell'
            },
            "B": {
                "item": 'pipez:infinity_upgrade'
            },
            "C": {
                "item": 'create:creative_blaze_cake'
            },
            "D": {
                "item": 'botania:creative_pool'
            },
            "E": {
                "item": 'powah:energy_cell_creative'
            },
            "G": {
                "item": 'mekanism:creative_energy_cube'
            },
            "H": Item.of('tconstruct:creative_slot', '{slot:"upgrades"}').toJson(),
            "F": {
                "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
            }
        },
        "result": {"item": 'upgradednetherite_creative:creative_upgraded_netherite_ingot'},
        "acceptMirrored": true
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": 'functionalstorage:netherite_upgrade'},
        "transitionalItem": {"item": 'kubejs:uncompleted_creative_upgrade'},
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    },
                    {
                        "item": 'kubejs:yin_netherite'
                    }
                ],
                "results": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    },
                    {
                        "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
                    }
                ],
                "results": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    },
                    {
                        "item": 'upgradednetherite_creative:creative_upgraded_netherite_ingot'
                    }
                ],
                "results": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    },
                    {
                        "item": 'kubejs:yang_netherite'
                    }
                ],
                "results": [
                    {
                        "item": 'kubejs:uncompleted_creative_upgrade'
                    }
                ]
            },
        ],
        "results": [
            {
                "item": 'functionalstorage:creative_vending_upgrade'
            }
        ],
        "loops": 1,
    })

    let parts = ['boots', 'leggings', 'chestplate', 'helmet', 'sword', 'pickaxe', 'shovel', 'bow', 'axe', 'horse_armor']

    for (let part of parts) {
        creativeItem(part)
    }

    function creativeItem(name) {
        event.custom({
            "type": "minecraft:smithing",
            "base": {
              "item": `upgradednetherite_ultimate:ultimate_upgraded_netherite_${name}`
            },
            "addition": {
              "item": 'upgradednetherite_creative:creative_upgraded_netherite_ingot'
            },
            "result": {
              "item": `upgradednetherite_creative:creative_upgraded_netherite_${name}`
            }
        })
    }

    ["helmet", "chestplate", "leggings", "boots"].forEach(part => ultimateArmor(part));

    function ultimateArmor(name) {

        event.remove({output: `upgradednetherite_ultimate:ultimate_upgraded_netherite_${name}`});

        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": [" A ", "BCD", " E "],
            "key": {
                "A": {
                    "tag": `upgradednetherite:upgraded_netherite_${name}`
                },
                "B": {
                    "item": `mekanism:mekasuit_${name === "chestplate" ? "bodyarmor" : name === "leggings" ? "pants" : name}`
                },
                "C": {
                    "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
                },
                "D": {
                    "item": `botania:terrasteel_${name}`
                },
                "E": {
                    "item": `bloodmagic:living${name === "chestplate" ? "plate" : name }`
                }
            },
            "result": {
                "item": `upgradednetherite_ultimate:ultimate_upgraded_netherite_${name}`
            }
        })
    }

    tinkerUp([{"tag": 'forge:nether_stars'}, {"tag": 'forge:nether_stars'}, {"tag": 'forge:nether_stars'}, {"tag": 'forge:nether_stars'}], Item.of('tconstruct:creative_slot', '{slot:"abilities"}').toJson())
    tinkerUp([{"item": 'upgradednetherite:wither_upgraded_netherite_chestplate'}, {"item": 'upgradednetherite:water_upgraded_netherite_chestplate'}, {"item": 'upgradednetherite:poison_upgraded_netherite_chestplate'}, {"item": 'upgradednetherite:phantom_upgraded_netherite_chestplate'}], Item.of('tconstruct:creative_slot', '{slot:"defense"}').toJson())
    tinkerUp([{"tag": 'forge:gems/emerald'}, {"tag": 'forge:ingots/cyber_steel'}, {"tag": 'forge:ingots/cyber_steel'}, {"item": 'bloodmagic:demonslate'}], Item.of('tconstruct:creative_slot', '{slot:"souls"}').toJson())


    function tinkerUp(item, result) {
        event.custom({
            "type": "minecraft:crafting_shaped",
            "pattern": ["ABA", "CDE", "AFA"],
            "key": {
                "A": {
                    "item": "upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot"
                },
                "B": item[0],
                "C": item[1],
                "D": Item.of('tconstruct:creative_slot', '{slot:"upgrades"}').toJson(),
                "E": item[2],
                "F": item[3]
            },
            "result": result,
        })
    }
})