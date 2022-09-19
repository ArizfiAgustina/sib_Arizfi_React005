//Destructuring Function Result
const getUser = () => {
  return {
    nama: "Arizfi Agustina",
    handle: "@Arizfi",
    location: "Surabaya, Indonesia",
  };
};

//extraction
const { nama, handle, location } = getUser();
console.log(nama, handle, location);
