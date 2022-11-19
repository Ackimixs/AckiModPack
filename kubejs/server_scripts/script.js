// priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('recipes', event => {

  event.remove({ output: 'mekanism:steel_casing' })
  event.remove({ output: 'thermal:machine_frame' })
  event.remove({ output: 'rftoolsbase:machine_frame' })

  event.remove({ output: 'powah:dielectric_paste' })
  event.remove({input: 'minecraft:redstone', type: 'botania:mana_infusion'})
  
  event.remove({ output: 'chickens:colored_egg' })

  event.remove({ output: 'angelring:resonant_angel_ring' })
  event.remove({ output: 'angelring:reinforced_angel_ring' })
  event.remove({ output: 'angelring:hardened_angel_ring' })
  event.remove({ output: 'angelring:leadstone_angel_ring' })
  event.remove({ output: 'angelring:energetic_angel_ring' })
  event.remove({ output: 'angelring:itemdiamondring' })

  event.remove({ output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'})

  event.remove({ output: 'beyond_earth:steel_block' })
  event.remove({ output: 'beyond_earth:steel_ingot' })
  event.remove({ output: 'beyond_earth:steel_nugget' })

  event.remove({ output: 'mekanism:bronze_deepslate_ore' })
  event.remove({ output: 'mekanism:bronze_ore' })
  event.remove({ output: 'mekanism:dust_bronze' })
  event.remove({ output: 'mekanism:block_bronze' })
  event.remove({ output: 'mekanism:ingot_bronze' })
  event.remove({ output: 'mekanism:nugget_bronze' })

  event.remove({ output: 'mekanism:lead_deepslate_ore' })
  event.remove({ output: 'mekanism:lead_ore' })
  event.remove({ output: 'mekanism:dust_lead' })
  event.remove({ output: 'mekanism:block_lead' })
  event.remove({ output: 'mekanism:ingot_lead' })
  event.remove({ output: 'mekanism:nugget_lead' })

  event.remove({ output: 'mekanism:tin_deepslate_ore' })
  event.remove({ output: 'mekanism:tin_ore' })
  event.remove({ output: 'mekanism:dust_tin' })
  event.remove({ output: 'mekanism:block_tin' })
  event.remove({ output: 'mekanism:ingot_tin' })
  event.remove({ output: 'mekanism:nugget_tin' })


  tinkerMelting("forge:rods/blaze", "kubejs:molten_blaze", 100, 800, 30)
  tinkerAlloy([{
    "tag": "forge:molten_blaze",
    "amount": 250
  },
  {
    "tag": "tconstruct:blood",
    "amount": 250
  }
  ],
    "tconstruct:blazing_blood", 250, 800
  )

  createMechanicalCrafting(["  A  ", " BCB ", "DEFED", "BGHGB", " BAB "],
  {
    "A": {
      "tag": 'forge:plastic'
    },
    "B": {
      "tag": 'forge:dusts/steel'
    },
    "C": {
      "tag": 'forge:gears/diamond'
    },
    "D": {
      "item": 'bloodmagic:infusedslate'
    },
    "E": {
      "item": 'powah:energized_steel_block'
    },
    "F": {
      "item": 'thermal:machine_frame'
    },
    "G": {
      "tag": 'computercraft:turtle'
    },
    "H": {
      "tag": 'industrialforegoing:machine_frame/simple'
    }
  }, {"item": 'mekanism:steel_casing'})

  tinkerBassin(
    {"tag": 'industrialforegoing:machine_frame/simple'},
    true,
    'tinkers_reforged:molten_duralumin', 80,
    'rftoolsbase:machine_frame',
    70    
  )

  tinkerBassin(
    {"item": 'mekanism:superheating_element'},
    true,
    'tconstruct:blazing_blood', 1200,
    'kubejs:super_heated_block',
    100
  )
  
  
  manaPool({"item": "minecraft:redstone"}, {"item": 'powah:dielectric_paste'}, 1)


  minecraftShappedRecipe(
    ["ABA", "BCB", "ABA"],
    {
      "A": {
        "item": 'powah:dielectric_paste'
      },
      "B": {
        "item": 'botania:mana_glass'
      },
      "C": {
        "item": 'rftoolsbase:machine_frame'
      }
    },
    {"item": 'thermal:machine_frame'}
  )


  //Angel Ring

  minecraftShappedRecipe(["ABC", "BDB", "EBA"], 
    {
      "A": {
        "item": 'powah:steel_energized'
      },
      "B": {
        "tag": 'forge:gems/mana_diamond'
      },
      "C": {
        "item": 'cyclic:charm_home'
      },
      "D": {
        "item": 'sophisticatedbackpacks:diamond_backpack'
      },
      "E": {
        "item": 'cyclic:charm_world'
      },
    },
    {"item": 'angelring:itemdiamondring'})

    minecraftShappedRecipe(["ABC", "DED", "CFA"], 
    {
      "A": {
        "item": 'powah:battery_hardened'
      },
      "B": {
        "item": 'thermal:redstone_servo'
      },
      "C": {
        "item": 'thermal:upgrade_augment_2'
      },
      "D": {
        "tag": 'forge:ingots/signalum'
      },
      "E": {
        "item": 'angelring:itemdiamondring'
      },
      "F": {
        "item": 'thermal:rf_coil'
      }
    },
    {"item": 'angelring:energetic_angel_ring'})

    minecraftShappedRecipe(["ABC", "DED", "CFA"],
    {
      "A": {
        "item": 'powah:battery_blazing'
      },
      "B": {
        "tag": 'forge:plastic'
      },
      "C": {
        "item": 'thermal:upgrade_augment_3'
      },
      "D": {
        "item": 'ae2:controller'
      },
      "E": {
        "item": 'angelring:energetic_angel_ring'
      },
      "F": {
        "item": 'bloodmagic:infusedslate'
      }
    },
    {"item": 'angelring:leadstone_angel_ring'}
    )

    minecraftShappedRecipe(["ABC", "DED", "CFA"],
    {
      "A": {
        "item": 'powah:battery_niotic'
      },
      "B": {
        "tag": 'forge:gems/dragonstone'
      },
      "C": {
        "tag": 'forge:ingots/gausum'
      },
      "D": {
        "item": 'mekanism:advanced_induction_cell'
      },
      "E": {
        "item": 'angelring:leadstone_angel_ring'
      },
      "F": {
        "item": 'bloodmagic:demonslate'
      }
    },
    {"item": 'angelring:hardened_angel_ring'}
    )

    minecraftShappedRecipe(["ABC", "DED", "CFA"],
    {
      "A": {
        "item": 'powah:battery_spirited'
      },
      "B": {
        "item": 'botania:life_essence'
      },
      "C": {
        "tag": 'forge:ingots/cyber_steel'
      },
      "D": {
        "item": 'mekanism:elite_induction_cell'
      },
      "E": {
        "item": 'angelring:hardened_angel_ring'
      },
      "F": {
        "item": 'createaddition:electric_motor'
      }
    },
    {"item": 'angelring:reinforced_angel_ring'}
    )

    minecraftShappedRecipe(["ABC", "DED", "CFA"],
    {
      "A": {
        "item": 'powah:battery_nitro'
      },
      "B": {
        "item": 'botania:gaia_ingot'
      },
      "C": {
        "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot'
      },
      "D": {
        "item": 'mekanism:ultimate_induction_cell'
      },
      "E": {
        "item": 'angelring:reinforced_angel_ring'
      },
      "F": {
        "item": 'bloodmagic:etherealslate'
      }
    },
    {"item": 'angelring:resonant_angel_ring'}
  )

  minecraftShappedRecipe(["ABC", "BDB", "EFG"],
  {
    "A": {
      "item": 'upgradednetherite:feather_upgraded_netherite_ingot'
    },
    "B": {
      "tag": 'forge:nether_stars'
    },
    "C": {
      "item": 'upgradednetherite:phantom_upgraded_netherite_ingot'
    },
    "D": Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:netherite_chicken"}}').toJson(),
    "E": {
      "item": 'upgradednetherite:fire_upgraded_netherite_ingot'
    },
    "F": {
      "item": 'minecraft:dragon_egg'
    },
    "G": {
      "item": 'upgradednetherite:gold_upgraded_netherite_ingot'
    },
  },
  {"item": 'kubejs:yin_netherite'}
)

minecraftShappedRecipe(["ABC", "BDB", "EFG"],
  {
    "A": {
      "item": 'upgradednetherite:water_upgraded_netherite_ingot'
    },
    "B": {
      "tag": 'forge:nether_stars'
    },
    "C": {
      "item": 'upgradednetherite:ender_upgraded_netherite_ingot'
    },
    "D": Item.of('chickens:chicken_item', '{ChickenType:{id:"chickens:cfouche_chicken"}}').toJson(),
    "E": {
      "item": 'upgradednetherite:poison_upgraded_netherite_ingot'
    },
    "F": {
      "item": 'minecraft:dragon_head'
    },
    "G": {
      "item": 'upgradednetherite:wither_upgraded_netherite_ingot'
    },
  },
  {"item": 'kubejs:yang_netherite'}
  )


  dissolutionChamber("{FluidName:'tinkers_reforged:molten_cyber_steel',Amount:144}",[
    {
      "tag": 'forge:pellets/plutonium'
    },
    {
        "item": 'botania:gaia_ingot'
    },
    {
        "tag": 'forge:pellets/polonium'
    },
    {
        "item": 'kubejs:yin_netherite'
    },
    {
        "item": 'kubejs:yang_netherite'
    },
    {
        "tag": 'forge:pellets/polonium'
    },
    {
        "item": 'bloodmagic:etherealslate'
    },
    {
        "tag": 'forge:pellets/plutonium'
    }
  ], 300, 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot', 1)

  
  minecraftShappedRecipe([" A ", "ABA", " A "],
  
  {
    "A": {
      "item": "kubejs:dragon_essence"
      
    },
    "B": {
      "tag": 'forge:eggs'
    }
  },
  {"item": 'minecraft:dragon_egg'}
  )

  minecraftShappedRecipe([" A ", "ABA", " A "],
    {
      "A": {
        "item": "kubejs:dragon_essence"
      },
      "B": {
        "tag": 'forge:heads'
      }
    },
    {"item": 'minecraft:dragon_head'}
  )

  function dissolutionChamber(inputFluid, input, processingTime, output, count) {
    event.custom({
      "type": "industrialforegoing:dissolution_chamber",
      "inputFluid": inputFluid,
      "input": input,
      "processingTime": processingTime,
      "output": {"item": output, "count": count}
    })
  }

  function minecraftShappedRecipe(pattern, key, result) {
    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": pattern,
      "key": key,
      "result": result
    })
  }

  function tinkerBassin(cast, castConsumed, fluid, fluidAmount, result, coolingTime) {
    event.custom({
      "type": "tconstruct:casting_basin",
      "cast": cast,
      "cast_consumed": castConsumed,
      "fluid": {
        "name": fluid,
        "amount": fluidAmount
      },
      "result": result,
      "cooling_time": coolingTime
    })
  }

  function createMechanicalCrafting(pattern, key, result) {
    event.custom({
      "type": "create:mechanical_crafting",
      "pattern": pattern,
      "key": key,
      "result": result,
      "acceptMirrored": true
    })
  }


  function tinkerMelting(input, output, amount, temp, time) {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": input
      },
      "result": {
        "fluid": output,
        "amount": amount
      },
      "temperature": temp,
      "time": time
    })
  }
  
  function tinkerAlloy(inputs, output, amount, temp) {
    event.custom({
      "type": "tconstruct:alloy",
      "inputs": inputs,
      "result": {
        "fluid": output,
        "amount": amount
      },
      "temperature": temp
    })
  }

  function manaPool(input, output, manaAmount) {
    event.custom({
      "type": "botania:mana_infusion",
      "input": [
        input
      ],
      "output": output,
      "mana": manaAmount
    }) 
  }

})