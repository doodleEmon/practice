class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");
console.log("🚀 ~ myCar:", Car.hello());

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);
// console.log(myCar1);
// console.log(myCar2);
