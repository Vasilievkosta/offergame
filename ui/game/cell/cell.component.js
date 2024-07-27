import { catchOffer, data, OFFER_STATUSES } from '../../../data/game.data.js'

export function Cell(x, y) {
	const cellEl = document.createElement('td')
	const img = document.createElement('img')
	cellEl.append(img)

	if (x === data.coords.current.x && y === data.coords.current.y) {
		img.src = 'assets/images/offer.png'
		img.addEventListener('click', catchOffer)
	}

	if (data.status === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
		img.src = 'assets/images/caught-offer.png'
	}

	if (data.status === OFFER_STATUSES.miss && x === data.coords.previous.x && y === data.coords.previous.y) {
		img.src = 'assets/images/missed-offer.png'
	}

	return cellEl
}