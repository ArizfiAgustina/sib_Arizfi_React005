//review setInterval
setInterval(() => {
  console.log("tick");
}, 1000);

const printTick = () => {
  console.log("Tick");
};
setInterval(printTick, 1000);

//Filter
const animals = [
  { name: "Fluffy", species: "cat" },
  { name: "Carlo", species: "dog" },
  { name: "Nemo", species: "fish" },
  { name: "Hamilton", species: "dog" },
  { name: "Dory", species: "Fish" },
  { name: "Ursa", species: "cat" },
];
console.log(animals);

//untuk mendapat species ikan saja.
let fish = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === "fish") {
    fish.push(animals[i]);
  }
}
console.log(fish);

//tulis ulang menggunakan filter.
fish = animals.filter((animals) => animals.species === "fish");
console.log(fish);

//map
let names = [];
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);

//method map yang lain
names = animals.map((animal) => animal.name);
console.log(names);

//reduce
let orders = [{ total: 325 }, { total: 512 }, { total: 128 }, { total: 32 }];

//loop
let total = 0;
for (let i = 0; i < orders.length; i++) {
  total = total + orders[i].total;
}
console.log("total : " + total);

total = orders.reduce((total, order) => total + order.total, 0);
console.log("total : " + total);
