export class Point {
    // x: number; //redundant  
    // y: number; //redundant code
    constructor(private _x?:number, private _y?: number) { //by giving x and y access modifiers, you do not need this.x, or the x and y variables above
        // this.x = x; //redundant code
        // this.y = y; //redundant code
    }

    draw () {
        console.log('X: ' + this._x + ' , Y: ' + this._y);
    }
    get x() {//get property
        return this._x;
    }

    set x(value) {//set property
        if (value < 0) 
            throw new Error( 'value cannot be less than 0.');
        this._x = value;
    }
}

let point = new Point(1, 2);
point.draw();