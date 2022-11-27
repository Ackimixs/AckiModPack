// priority: 0

onEvent('ui.main_menu', event => {
	event.replace(ui => {

	  ui.background('kubejs:ui/space.png')
      ui.minecraftLogo(40)

	  //Main message
	  ui.label(l => {
		l.name = Text.aqua('AckISEN')
		l.height = 24
		l.x = ui.width / 2 - (l.width / 2) - 50
		l.y = ui.height / 2 - (l.height / 2) - 50
		l.action = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	  })

      //Single player button
	  ui.button(b => {
		b.name = 'Singleplayer'
        b.width = ui.width / 4
		b.x = ui.width / 2 - (b.width / 2)
		b.y = ui.height / 2 - (b.height / 2)
		b.action = 'minecraft:singleplayer'
	  })

      //Multiplayer button
	  ui.button(b => {
		b.name = 'Multiplayer'
        b.width = ui.width / 4
		b.x = ui.width / 2 - (b.width / 2)
		b.y = ui.height / 2 - (b.height / 2) + 24
		b.action = 'minecraft:multiplayer'
	  })

      //Options button
      ui.button(b => {
		b.name = 'Options'
        b.width = ui.width / 4
		b.x = ui.width / 2 - (b.width / 2)
		b.y = ui.height / 2 - (b.height / 2) + 48
		b.action = 'minecraft:options'
	  })

      //Quit button
      ui.button(b => {
		b.name = 'Quit game'
		b.x = ui.width - b.width - 10
		b.y = ui.height - b.height - 10
		b.action = 'minecraft:quit'
	  })

      //Issue tracker button
      ui.button(b => {
		b.name = 'Have any issues?'
		b.x = 10
		b.y = ui.height - b.height - 10
		b.action = 'https://github.com/Ackimixs/MyModpack/issues'
	  })
	})
  })