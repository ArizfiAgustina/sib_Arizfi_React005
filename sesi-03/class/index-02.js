class Person {
  constructor(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

//class Employee di definisikan sebagai turunan dari Person yang secara otomatis diwariskan ke Employee

class Employee extends Person {
  doWork() {
    return this._name + " is working";
  }
}

let scott = new Employee("Scott Moss");
console.log(scott.getName());
console.log(scott.doWork());
