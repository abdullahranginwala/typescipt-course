interface Circle {
    radius: number
}
interface Square {
    side : number
}

interface Rectangle {
    length: number,
    width: number,
}

type Shape = Circle | Square | Rectangle

function renderShape(shape: Shape) {
    console.log(shape);
}