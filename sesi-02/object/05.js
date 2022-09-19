// destructuring Array
const csv = "1997, Ford, F350, Must Sell!";
const [year, make, model, description] = csv.split(",");

console.log("Tahun : " + year);
console.log("Merk : " + make);
console.log("Model :" + model);
console.log("Description :" + description);

//aliasing object properties
const user = {
  n: "Arizfi Agustina",
  h: "@Arizfi",
  l: "Surabaya, Indonesia",
};

//extraction
const { n: name1, h: handle1, l: location1 } = user;
console.log(name1, handle1, location1);
