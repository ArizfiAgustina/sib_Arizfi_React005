// Let:
var a = 2;
{
  let a = 3;
  console.log(a);
}
console.log(a);

// const
{
  const b = 4;
  console.log(b);

  b = 5;
}

function f() {
  var x = 1;
  let y = 2;
  const z = 3;
  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log("x dalam block scope adalah", x);
    console.log("y dalam block scope adalah", y);
    console.log("z dalam block scope adalah", z);
  }
  console.log("x luar block scope adalah", x);
  console.log("y luar block scope adalah", y);
  console.log("z luar block scope adalah", z);
}

f();
