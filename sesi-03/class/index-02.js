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
}

let scott = new Employee("Scott Moss");
console.log(scott.getName());
console.log(scott.doWork());
