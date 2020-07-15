function add(x, y) {
  return x + y;
}
function calculate() {
  this.x = 10;
  console.log(this);
  return function some() {
    this.y = 20;
    console.log(this.x);
    console.log(this);
  };
}
var someFnRef = calculate();
someFnRef();

class A {
  calculate = (e) => {
    console.log(e + this.x);
  };
}
function B() {}
B.prototype.calculate = function () {};

class C {
  test() {
    const a = new A();
    a.calculate();
  }
}

function ComponentX() {}
Component.prototype.render = function () {};

class TestComp extends ComponentX {
  constructor() {
    super();
  }
  render() {}
}
