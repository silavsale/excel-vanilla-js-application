class Dom {
	constructor(selector) {
		this.$$listeners = {}
		this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
	}

	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html
		}
		return this.$el.outerHTML.trim()
	}

	clear() {
		this.html('')
		return this
	}

	on(eventType, callback) {
		// this.$$listeners[eventType] = callback

		this.$el.addEventListener(eventType, callback)
	}

	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}

	append(node) {
		// console.log(node instanceof Dom)
		// console.log(node)
		if (node instanceof Dom) {
			node = node.$el
		}
		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}

		return this
	}
}

export function $(selector) {
	return new Dom(selector)
}

$.create = (tagName, classes = '') => {
	const nativeElement = document.createElement(tagName)
	if (classes) {
		nativeElement.classList.add(classes)
	}

	return $(nativeElement)
}
