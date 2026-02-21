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

//Exercises 3 ✅

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

//Exercises 4 ✅

const exe4a = 47 
const evenodd = exe4a % 2 === 0 ? "even" : "odd";

const exe4b = 100
const exe4c = 7 
const remainder = exe4b % exe4c

const eggstotal = 53
const eggsbox = 12

const boxes =  Math.floor(eggstotal / eggsbox)
const eggsleft = eggstotal - boxes * eggsbox


console.log("\n--- Exercise 4 ---")
console.log(`${exe4a} is ${evenodd}`) 
console.log(`100 divided by 7 has remainder: ${remainder}`)
console.log(`Full boxes: ${boxes}, Eggs left over: ${eggsleft}`)


//Exercises 5  

const exe5a = "Vlad"
const exe5b = 13;
const exe5c = true;
const exe5d = null;
let exe5e;

console.log("\n--- Exercise 5 ---")
console.log(exe5a, "→ type:", typeof exe5a)
console.log(exe5b, "→ type:", typeof exe5b)
console.log(exe5c, "→ type:", typeof exe5c)
console.log(exe5d, "→ type:", typeof exe5d)
console.log(exe5e, "→ type:", typeof exe5e)