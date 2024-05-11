import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(7,8,9);
let myRectangle = new Rectangle(2,3,4,6);


let theShapes : Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}

// console.log(myShape.getInfo());
// console.log(myCircle.getInfo());
// console.log(myRectangle.getInfo());
