const snacks = ["peanut butter", "bananas", "chocolate"];

for (let i = 0; i < snacks.length; i++) {
  // This part is the code that runs each time it loops through
  console.log(i, snacks[i]);
}

const string = "This is a string.";

for (let i = 0; i < string.length; i++) {
  if (string[i] === "s") {
    console.log(i, string[i]);
  } else if (string[i] == "g") {
    console.log("gee whiz");
  }
}

const playerName = "Lebron";
const x = 5;

if (playerName === "LeBron" && x === 5) {
  console.log(playerName);
} else {
  console.log("Something else");
}

// if (playerName === "LeBron" || x === 5) {
//   console.log(playerName);
// } else {
//   console.log("Something else");
// }

const myLimit = 10;
const x = 8;
if (x + 3 > myLimit) {
  // do something
}
