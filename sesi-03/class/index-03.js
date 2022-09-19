class Person {
  constructor(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

class Employee extends Person {
  doWork() {
    return this._name + " is working";
  }

  constructor(name, title) {
    super(name);

    this._title = title;
  }

  //fungsi untuk call construct data di class Employee
  doTitle() {
    return "Hello, " + this._title + " " + this._name + ". Selamat Malam..";
  }
}

let scott = new Employee("Scott Moss");
console.log(scott.getName());
console.log(scott.doWork());

let scottConstructor = new Employee("Arizfi", "Nona");
console.log(scottConstructor.doTitle());
