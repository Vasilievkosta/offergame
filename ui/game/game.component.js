import { Setting } from './settings/settings.component.js'
import { Scores } from './scores/scores.component.js'
import { Grid } from './grid/grid.component.js'


export function Game() {
	const containetElement = document.createElement('div')

	const settingsElement = Setting()
	containetElement.append(settingsElement)

	const scorsesElement = Scores()
	containetElement.append(scorsesElement)

	const gridElement = Grid()
	containetElement.append(gridElement)

	return containetElement
}