import { data } from '../../../data/game.data.js'

export function Scores() {
	const containetElement = document.createElement('div')

	containetElement.append('caught: ' + data.score.caughtCount + '; missCount: ' + data.score.missCount)

	return containetElement
}