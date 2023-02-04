// const job = {
//   title: "Developer",
//   location: "New York",
//   salary: 50000,
// };

// console.log(new Date().toISOString());

// const job2 = {
//   title: "Cook",
//   location: "Munich",
//   salary: 35000,
// }

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.place = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.place} and I earn ${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "New York", 50000);
const cooker = new Job("Cook", "Munich", 35000);

console.log(developer);
console.log(cooker);

developer.describe();
cooker.describe();

const input = ["Max", "Schwarzmuller"];

const firstName = input[0];
const lastName = input[1];

const [first, last] = input; // array-destructure

console.log(first);
console.log(last);

const job = { title: "Developer", location: "New York" };
const { title, location } = job; // class-destructure

console.log(title);

const { title: jTitle } = job;

console.log(jTitle);
