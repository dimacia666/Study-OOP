function greet(name, second) {
  console.log(`Hello, ${name}, ${second}! I am ${this.person}`);
}

const person = "John";
const context = {
  person: "Alice"
};

greet.call(context, "Bob, Poul");