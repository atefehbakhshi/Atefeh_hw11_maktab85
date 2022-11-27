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
    this._height = height;
    this._width = width;
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
    this._radius = radius;
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
  constructor() {
    super();
  }
}
class Square extends Polygon {
  constructor() {
    super();
  }
}

class Circle extends NonPolygon {
  constructor() {
    super();
  }
}

class Cylindrical extends Circle {
  constructor(height) {
    super();
    this._height = height;
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
const radius = document.getElementById("radius");
const width = document.getElementById("width");
const height = document.getElementById("height");
const inputs = document.getElementById("inputs");

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
});


