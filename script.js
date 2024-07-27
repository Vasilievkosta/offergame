import { subscribe } from './data/game.data.js'
import { Game } from './ui/game/game.component.js'
import { Player } from './sound/player.js'

Player()

const root = document.getElementById("root")

let gameEl

subscribe(renderApp)

function renderApp() {
	root.innerHTML = ""
	gameEl = Game()
	root.append(gameEl)
}

renderApp()

