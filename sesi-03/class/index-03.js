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

  doTitle() {
    return "Hello, " + this._title + " " + this._name + ". Selamat Malam..";
  }
}

let scott = new Employee("Scott Moss");
console.log(scott.getName());
console.log(scott.doWork());

let scottConstructor = new Employee("Arif", "Tuan");
console.log(scottConstructor.doTitle());
