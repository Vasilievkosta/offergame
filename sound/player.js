import { data, OFFER_STATUSES, subscribe } from '../data/game.data.js'

export function Player() {
	const catchAudio = new Audio()
	catchAudio.src = 'assets/sounds/catch.wav'
	//catchAudio.play()

	subscribe(() => {

		if (data.status === OFFER_STATUSES.caught) {
			catchAudio.currentTime = 0
			catchAudio.play()
		}

	})
}