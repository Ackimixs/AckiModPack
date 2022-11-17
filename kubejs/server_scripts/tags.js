// priority: 0

onEvent('tags.fluids', event => {
    event.add('forge:molten_blaze', 'kubejs:molten_blaze')
})

onEvent('tags.items', event => {
    event.removeAllTagsFrom('beyond_earth:steel_ingot')
    event.removeAllTagsFrom('beyond_earth:steel_nugget')
    event.removeAllTagsFrom('beyond_earth:steel_block')

    event.removeAllTagsFrom('mekanism:bronze_deepslate_ore')
    event.removeAllTagsFrom('mekanism:bronze_ore')
    event.removeAllTagsFrom('mekanism:dust_bronze')
    event.removeAllTagsFrom('mekanism:ingot_bronze')
    event.removeAllTagsFrom('mekanism:nugget_bronze')
    event.removeAllTagsFrom('mekanism:block_bronze')

    event.removeAllTagsFrom('mekanism:lead_deepslate_ore')
    event.removeAllTagsFrom('mekanism:lead_ore')
    event.removeAllTagsFrom('mekanism:dust_lead')
    event.removeAllTagsFrom('mekanism:ingot_lead')
    event.removeAllTagsFrom('mekanism:nugget_lead')
    event.removeAllTagsFrom('mekanism:block_lead')

    event.removeAllTagsFrom('mekanism:tin_deepslate_ore')
    event.removeAllTagsFrom('mekanism:tin_ore')
    event.removeAllTagsFrom('mekanism:dust_tin')
    event.removeAllTagsFrom('mekanism:ingot_tin')
    event.removeAllTagsFrom('mekanism:nugget_tin')
    event.removeAllTagsFrom('mekanism:block_tin')
})