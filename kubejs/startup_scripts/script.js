// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create("chicken_exoskeleton").displayName("Chicken exoskeleton").maxStackSize(16)
	event.create("chicken_soul").displayName("Chicken Soul")
	event.create("chicken").displayName("Chicken")
	event.create("uncompleted_chicken").displayName("Uncompleted Chicken")
	event.create("living_chicken").displayName("Living Chicken")
	event.create("yin_netherite").displayName("Yin Netherite")
	event.create("yang_netherite").displayName("Yang Netherite")
	event.create("uncompleted_creative_upgrade").displayName("Uncompleted Creative Upgrade")
	event.create('dragon_essence').displayName('Dragon Essence')
})

onEvent('block.registry', event => {
	
	//Super heated block make it with tinker smeltry later
	event.create('super_heated_block')
		.material('metal')
		.hardness(5.5)
		.displayName('Super Heated Block')
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
})

onEvent('fluid.registry', event => {

	// Basic fluid look like water
	event.create('cryogenic_fluid')
		.thinTexture(0x80dfff)
		.bucketColor(0x80dfff)
	  	.displayName('Cryogenic Fluid')
	
	
	event.create('molten_blaze')
		.thickTexture(0xFC7C24)
		.bucketColor(0xFC7C24)
		.displayName('Molten Blaze') 
  })