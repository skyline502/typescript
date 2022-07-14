class Point {
    // x: number; //redundant  
    // y: number; //redundant code
    constructor(private x?:number, private y?: number) { //by giving x and y access modifiers, you do not need this.x, or the x and y variables above
        // this.x = x; //redundant code
        // this.y = y; //redundant code
    }

    draw () {
        console.log('X: ' + this.x + ' , Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();