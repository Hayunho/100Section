const hobbies = ["Sports", "Cooking"]; // a pointer to the array is stored
const age = 32; // the value itself is stored

hobbies.push("Reading"); // the address of the array doesn't change

// hobbies = ["Coding", "Sleeping"]; // not allowed! new address is stored

console.log(hobbies);

// Primitive values: numbers, strings, booleans & more (undefined)
// Reference values: Objects

const person = {
  age: 32,
};

function getAdultYears(p) {
  p.age -= 18;
  return p.age;

  // return p.age - 18;
}

// console.log(getAdultYears(person)); // reference object address
// console.log(getAdultYears({ age: person.age }));
console.log(getAdultYears({ ...person }));
// console.log(getAdultYears(person));  // 아래 값도 같이 변형됨
console.log(person);
