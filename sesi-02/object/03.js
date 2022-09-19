const user = {
  nama: "Arizfi Agustina",
  handle: "@Arizfi",
  location: "Surabaya, Indonesia",
};

// sample menggunakan dot notation >
// dipaksa menambahkan satu persatu properti
// const nama = user.nama
// const handle = user.handle
// const location = user.location
// console.log(nama, handle, location)

const { nama, handle, location } = user;
console.log(nama, handle, location);
