export class Emitter {
	constructor() {
		this.listiners = {}
	}

	emit(event, ...args) {
		// console.log(args)
		if (!Array.isArray(this.listiners[event])) {
			return false
		}
		this.listiners[event].forEach(listiner => {
			listiner(...args)
		})

		return true
	}

	subscribe(event, fn) {
		this.listiners[event] = this.listiners[event] || []
		this.listiners[event].push(fn)

		return () => {
			this.listiners[event] = this.listiners[event].filter(listiner => listiner !== fn)
			// console.log('this.listiners[event]', this.listiners[event])
		}
	}
}

// const emitter = new Emitter()

// const unsub = emitter.subscribe('go', data => console.log('Sub', data))


// setTimeout(() => {
// 	emitter.emit('go', 'after 2 sec')
// }, 2000)

// setTimeout(() => {
// 	unsub()
// }, 3000)

// setTimeout(() => {
// 	emitter.emit('go', 'after 4 sec')
// }, 4000)
