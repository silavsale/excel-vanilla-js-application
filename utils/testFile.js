// function toCell(row) {
// 	return function(_, col) {
// 		console.log(`${col + 1} | ${row + 1} - `)
// 		// return col, row
// 	}
// }

// const rowsCount = 2

// for (let row = 0; row < rowsCount; row++) {
// 	const cells = new Array(3)
// 		.fill('')
// 		.map(toCell(row))
// 		.join('')

// 	console.log('row:', row, ',cells', cells)
// }


class Rectangle {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	getArea() {
		return this.x * this.y
	}
}


const rectangle = new Rectangle(5, 2)

console.log('rectangle.getArea()', rectangle.getArea())

const myRectangle = {
	x: 4,
	y: 3
}

myRectangle.getArea = rectangle.getArea

console.log('myRectangle.getArea', myRectangle.getArea())

