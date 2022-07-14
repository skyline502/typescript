export class likesComponent { //likes component
    constructor(private _likesCount:number, private _isSelected:boolean) {//the variables are private so they cannot be reassigned
    }

    onClick() {
        this._likesCount += (this._isSelected) ? -1: +1; //if the like button is visible, decrease total likes, else increase total likes
        this._isSelected = !this._isSelected; //once like button is clicked, set selected to !selected
    }

    get likesCount() {
        return this._likesCount;//getter for like count
    }

    get isSelected() {
        return this._isSelected; //getter for selected state
    }
}

