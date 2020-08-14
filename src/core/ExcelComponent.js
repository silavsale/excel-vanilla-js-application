import { DomListener } from '@core/DomListener'


export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.emitter = options.emitter
		this.unsubsribers = []
		console.log(options)
		this.prepare()
	}


	prepare() {}

	// Return pattern of component
	toHTML() {
		return ''
	}

	$emit(event, ...args) {
		this.emitter.emit(event, ...args)
	}

	// subscribe for event
	$on(event, fn) {
		const unsub = this.emitter.subscribe(event, fn)
		this.unsubsribers.push(unsub)
	}

	init() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
		this.unsubsribers.forEach(unsub => unsub())
	}
}
