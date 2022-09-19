// function declaration
console.log("sebelum function declaration : " + addDec(2, 5));
function addDec(a, b) {
  return a + b;
}
console.log("sesudah function declaration : " + addDec(2, 5));

// function expression
const addExp = function (a, b) {
  return a + b;
};
console.log("sesudah function expression : " + addExp(2, 5));

// arrow function
const addArrow = (a, b) => {
  return a + b;
};
console.log("arrow function : " + addArrow(2, 5));

// Implicit Return
const add = (a, b) => a + b;
const square = (x) => x * x;
const three = () => 3;

console.log("implicit return add : " + add(1, 2));
console.log("implicit return square : " + square(2));
console.log("implicit return three :" + three());

//arrow function menjadi komplek
const cekArrow = (a, b) => {
  const temp = a + b;
  return temp;
};
console.log("mengembangkan arrow function : " + cekArrow(3, 5));

//manajemen this keyword
function Person() {
  this.age = 0;

  setInterval(function () {
    this.age++;
    console.log(this.age);
  }, 1000);
}

//Bug bisa diperbaiki dengan tiga cara
function Person() {
  this.age = 0;

  const that = this;
  setInterval(
    function () {
      this.age++;
      console.log("menggunakan variabel : " + that.age);
    }.bind(this),
    1000
  );
}

//cara kedua menggunakan bind
function Person() {
  this.age = 0;
  setInterval(
    function () {
      this.age++;
      console.log("menggunakan bind : " + this.age);
    }.bind(this),
    1000
  );
}

//cara ketiga tidak menggunakan kunci function di depannya
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log("tidak menggunakan kunci function di depannya : " + this.age);
  }, 1000);
}

const p = new Person();
