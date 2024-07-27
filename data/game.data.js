export const OFFER_STATUSES = {
	default: 'default',
	caught: 'caught',
	miss: 'miss'
}

export const data = {
	settings: {
		rowsCount: 4,
		columnsCount: 4,
		pointsToWin: 10,
		maximumMisses: 3,
		decreaseDaltaInMs: 200,
		isMuted: false
	},
	status: OFFER_STATUSES.default,
	coords: {
		current: {
			x: 0,
			y: 1
		},
		previous: {
			x: 2,
			y: 2
		}
	},
	score: {
		missCount: 0,
		caughtCount: 0
	}
}

let subscribers = []

function notify() {
	subscribers.forEach(subscriber => subscriber())
}

export function subscribe(newSubcriber) {
	subscribers.push(newSubcriber)
}

let stepIntervalId

function runStepInterval() {
	stepIntervalId = setInterval(() => {
		missOffer()
		moveOfferToRandomPosition()
		notify()
	}, 2000)
}

runStepInterval()

function moveOfferToRandomPosition() {
	let newX = null
	let newY = null
	do {
		newX = getRandom(data.settings.columnsCount - 1)
		newY = getRandom(data.settings.rowsCount - 1)

	} while (data.coords.current.x === newX && data.coords.current.y === newY)

	//missOffer()

	data.coords.current.x = newX
	data.coords.current.y = newY


}

function missOffer() {
	data.status = OFFER_STATUSES.miss
	data.score.missCount++

	data.coords.previous = { ...data.coords.current }

	setTimeout(() => {
		data.status = OFFER_STATUSES.default
		notify()
	}, 500)
}

export function catchOffer() {
	data.status = OFFER_STATUSES.caught
	data.score.caughtCount++

	data.coords.previous = { ...data.coords.current }

	setTimeout(() => {
		data.status = OFFER_STATUSES.default
		notify()
	}, 500)

	moveOfferToRandomPosition()
	notify()
	clearInterval(stepIntervalId)
	runStepInterval()
}

function getRandom(N) {
	return Math.floor(Math.random() * (N + 1))
}
