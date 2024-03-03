"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(4, 5);
let myCircle = new Circle_1.Circle(7, 8, 9);
let myRectangle = new Rectangle_1.Rectangle(2, 3, 4, 6);
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
// console.log(myShape.getInfo());
// console.log(myCircle.getInfo());
// console.log(myRectangle.getInfo());
