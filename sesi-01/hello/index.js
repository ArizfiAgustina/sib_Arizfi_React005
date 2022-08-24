let score = 50;
console.log("hasil variabel score" + score);

let playerName = "Rudi";
console.log("hasil variabel playerName" + playerName);
// alert(playerName)
playerName = "Andy";
console.log("Halo playerName" + playerName);
//alert(playerName)\

const pi = 3.14;
//pi = 12
console.log(pi);

//bukan berupa object atau array>tidak bisa diganti
const angkaKeberuntungan = 10;

//sample
//umum yang biasa digunakan > object
//id, nama, jenkel
const objectAngkaKeb = { id: 1, name: "Arif", jenkel: "L" };
objectAngkaKeb.id = 2;
objectAngkaKeb.name = "Andi";
objectAngkaKeb.jenkel = "Laki-Laki";
objectAngkaKeb.alamat = "Lampung";
console.log(objectAngkaKeb);

//sample > array
const arrayNumber = [1, 2, 3, 4, 5];
arrayNumber.push(6);
arrayNumber.push(7);
console.log(arrayNumber);
