"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likesComponent = void 0;
var likesComponent = /** @class */ (function () {
    function likesComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    likesComponent.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(likesComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(likesComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return likesComponent;
}());
exports.likesComponent = likesComponent;
