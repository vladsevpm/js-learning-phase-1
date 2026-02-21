//Exercises 1 ✅

const name = "Vlad"
const surname = "Severehchuk"
const city = "Kyiv"

const message = `Hi, my name is ${name} ${surname} and I live in ${city}.`

console.log("--- Exercise 1 ---");
console.log(message);

//Exercises 2 ✅

const title = "javascript is awesome";
const capitalizedString = title
  .split(" ")           // splits into ["javascript", "is", "awesome"]
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  // charAt(0)        → first letter of each word
  // .toUpperCase()   → capitalizes it
  // word.slice(1)    → rest of the word unchanged
  // result           → ["Javascript", "Is", "Awesome"]
  .join(" ");           // joins back → "Javascript Is Awesome"

console.log("\n--- Exercise 2 ---")
console.log(title.toUpperCase());
console.log(title.length);
console.log(capitalizedString);
