// priority: 0

//console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.hide.items', event => {
	event.hide(/chickens:spawn_egg/)
	event.hide('kubejs:uncompleted_chicken')
	event.hide('kubejs:uncompleted_creative_upgrade')
	event.hide('chickens:colored_egg')

	event.hide('beyond_earth:steel_ingot')
	event.hide('beyond_earth:steel_block')
	event.hide('beyond_earth:steel_nugget')

	event.hide('mekanism:tin_deepslate_ore')
	event.hide('mekanism:tin_ore')
	event.hide('mekanism:dust_tin')
	event.hide('mekanism:ingot_tin')
	event.hide('mekanism:block_tin')
	event.hide('mekanism:nugget_tin')

	event.hide('mekanism:bronze_deepslate_ore')
	event.hide('mekanism:bronze_ore')
	event.hide('mekanism:dust_bronze')
	event.hide('mekanism:ingot_bronze')
	event.hide('mekanism:block_bronze')
	event.hide('mekanism:nugget_bronze')

	event.hide('mekanism:lead_deepslate_ore')
	event.hide('mekanism:lead_ore')
	event.hide('mekanism:dust_lead')
	event.hide('mekanism:ingot_lead')
	event.hide('mekanism:block_lead')
	event.hide('mekanism:nugget_lead')
})

onEvent('rei.remove.categories', event => {
	event.yeet('chickens:chicken_breeding')
})