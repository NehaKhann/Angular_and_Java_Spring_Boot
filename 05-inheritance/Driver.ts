import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(4,5);
let myCircle = new Circle(7,8,9);
let myRectangle = new Rectangle(2,3,4,6);


let theShapes : Shape[] = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}

// console.log(myShape.getInfo());
// console.log(myCircle.getInfo());
// console.log(myRectangle.getInfo());
