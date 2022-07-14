"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likesComponent_1 = require("./likesComponent");
var component = new likesComponent_1.likesComponent(10, true);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, ", isSelected: ").concat(component.isSelected));
