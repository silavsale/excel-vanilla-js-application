import {DomListener} from '@core/DomListener'


export class ExcelComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
	}

	// Return pattern of component
	toHTML() {
		return ''
	}

	init() {
		// console.log('$root ===', this.$root)
		this.initDOMListeners()
	}

	destroy() {
		// this.removeDOMListeners()
		this.removeDOMListeners()
	}
}
