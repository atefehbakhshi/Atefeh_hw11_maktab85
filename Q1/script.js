"use strict";
class Shape {
  constructor(shapeName) {
    this._shapeName = shapeName;
  }
  area() {}
  perimeter() {}
}

class Polygon extends Shape {
  constructor(height, width) {
    super();
    this._height = +height;
    this._width = +width;
  }
  area() {
    return this._height * this._width;
  }
  perimeter() {
    return (this._height + this._width) * 2;
  }
}

class NonPolygon extends Shape {
  constructor(radius) {
    super();
    this._radius = +radius;
  }
  area() {
    let piNumber = 3.14;
    return piNumber * this._radius ** 2;
  }
  perimeter() {
    let piNumber = 3.14;
    return piNumber * 2 * this._radius;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super(width, height);
  }
}
class Square extends Polygon {
  constructor(width, height) {
    super(width, height);
  }
}

class Circle extends NonPolygon {
  constructor(radius) {
    super(radius);
  }
}

class Cylindrical extends Circle {
  constructor(radius, height) {
    super(radius);
    this._height = +height;
    this._radius = +radius;
  }

  area() {
    let piNumber = 3.14;
    return 2 * piNumber * this._radius * (this._radius + this._height);
  }
  perimeter() {
    let piNumber = 3.14;
    return 2 * piNumber * this._radius;
  }
}

const item = document.querySelector("#shape");
const inputs = document.querySelectorAll(".input");
const radius = document.getElementById("radius");
const width = document.getElementById("width");
const height = document.getElementById("height");
const areaResult = document.getElementById("area");
const perimeterResult = document.getElementById("permeter");
radius.setAttribute("disabled", "");

item.addEventListener("mouseout", () => {
  let selectedShape = item.options[item.selectedIndex].value;
  radius.removeAttribute("disabled");
  width.removeAttribute("disabled");
  height.removeAttribute("disabled");

  if (selectedShape === "rectangular" || selectedShape === "square") {
    radius.setAttribute("disabled", "");
  } else if (selectedShape === "circle") {
    width.setAttribute("disabled", "");
    height.setAttribute("disabled", "");
  } else {
    width.setAttribute("disabled", "");
  }

  let inputsValue = {};
  inputs.forEach((item) => {
    item.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        if (item.id === "radius") inputsValue.radius = item.value;
        if (item.id === "width") inputsValue.width = item.value;
        if (item.id === "height") inputsValue.height = item.value;

        let shape;
        if (inputsValue.radius && inputsValue.height) {
          shape = new Cylindrical(inputsValue.radius, inputsValue.height);
          areaResult.innerHTML = shape.area();
          perimeterResult.innerHTML = shape.perimeter();
        } else if (inputsValue.radius) {
          shape = new Circle(inputsValue.radius);
          areaResult.innerHTML = shape.area();
          perimeterResult.innerHTML = shape.perimeter();
        } else if (inputsValue.height && inputsValue.width) {
          if (selectedShape === "rectangular") {
            shape = new Rectangle(inputsValue.width, inputsValue.height);
            areaResult.innerHTML = shape.area();
            perimeterResult.innerHTML = shape.perimeter();
          }
          if (selectedShape === "square") {
            shape = new Square(inputsValue.width, inputsValue.height);
            areaResult.innerHTML = shape.area();
            perimeterResult.innerHTML = shape.perimeter();
          }
        }
      }
    });
  });
});
