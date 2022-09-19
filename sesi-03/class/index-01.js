//step 1
/*class Employee {
  doWork() {
    return 'complete!
  }
}

let scott = new Employee()
console.log(scott.doWork())
*/

//step 2
class Employee {
  constructor(name) {
    this._name = name;
  }
  doWork() {
    return "complete!";
  }
  getName() {
    return this._name;
  }
}

let scott = new Employee("Scott Moss");
console.log("Get Name : " + scott.getName());
