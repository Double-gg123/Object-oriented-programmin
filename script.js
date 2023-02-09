class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  getArea() {
    const semiPerimeter = this.getPerimeter() / 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3));
  }
}

const triangle = new Triangle(3, 4, 5);
console.log("Permeter of triangle is "+triangle.getPerimeter());
console.log("Area of triangle is "+triangle.getArea());

class Square{
  constructor(side){
    this.side=side;
  }
  getPerimeter(){
  return this.side*4;
  }
  getArea(){
    return this.side*this.side;
  }
}
  const square= new Square(6);
  console.log("Perimeter of square is " +square.getPerimeter());
  console.log("Area of square is " +square.getArea());
  
class Rectangle{
  constructor(width,length){
    this.length=length;
    this.width=width;
  }
  getPerimeter(){
    return (this.length+this.width)*2
    
  }
  getArea(){
    return this.length*this.width
  }
}
const rectangle= new Rectangle(4,5);
console.log("Perimeter of the rectangle is "+rectangle.getPerimeter());
console.log("Area of the rectangle is "+rectangle.getArea());