// priority: 0

onEvent('entity.loot_tables', event => {
    event.modifyEntity("minecraft:chicken", table => {
        table.addPool(pool => {
            pool.addItem('kubejs:chicken_soul').randomChance(0.5)
        })
    })
})