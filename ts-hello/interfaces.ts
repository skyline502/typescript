interface Point {//using interfaces, makes your code much cleaner
    x: number, //defining the type of the variable
    y: number
}

let drawPoint = (point: Point) => {
    //... 
}

drawPoint({
    x: 1,
    y: 2
});

