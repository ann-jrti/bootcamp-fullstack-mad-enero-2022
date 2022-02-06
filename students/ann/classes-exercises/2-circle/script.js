
class Circle {
    constructor (radius, color) {
        this.radius = radius,
        this.color = color
    }
    calculateArea() {
        const result = Math.PI * Math.pow(this.radius, 2)
        return result
    }
    calculatePerimeter() {
        const result = 2 * Math.PI * this.radius;
         return result
    }
}

const circle2 = new Circle(2, 'blue')
const circle15 = new Circle(15, 'yellow')

function printCircle(circle) {
    const diameter = `${circle.radius * 2 * 37.79}px`
    console.log(diameter);
    const printedCircle = document.createElement('div')
    printedCircle.classList.add('circle')
    printedCircle.style.width = diameter
    printedCircle.style.height = diameter
    printedCircle.style.backgroundColor = circle.color
    document.body.appendChild(printedCircle)
}

printCircle(circle2)