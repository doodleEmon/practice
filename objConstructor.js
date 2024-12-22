const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
  }
  
  // Change the language Property
const data = Object.defineProperty(person, "language", {enumerable:false});

console.log(data);