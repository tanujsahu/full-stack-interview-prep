console.log(hoistedVar); // Outputs: undefined (due to hoisting)
var hoistedVar = 'I am hoisted!';

function hoistedFunction() {
  return 'I am a hoisted function!';
}

console.log(hoistedFunction()); // Outputs: "I am a hoisted function!"
