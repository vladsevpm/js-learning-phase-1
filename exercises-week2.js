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

//Exercises 3 

//You go to the supermarket. Create variables for:

const applep = 1.50 //Apple Price
const breadp = 2.30 //Bread Price
const milkp = 0.99 //Milk Price

const applea = 3 //Amount apples
const breada = 2 //Amount bread
const milka = 1 //Amount milk

const change = 20
const discount = 0.1

const totalcost = applea*applep+breada*breadp+milka*milkp
const afterdiscount = totalcost - (totalcost * discount)
const changeback = change - afterdiscount 

console.log("\n--- Exercise 3 ---")
console.log(`Total: ${totalcost}`) //Total cost
console.log(`After 10% discount: ${afterdiscount}`) //Total cost with 10% discount 
console.log(`Change from €20 ${changeback}`) //Change from 20 Euro