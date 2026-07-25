const name = "Aminul Islam Mahi";

// length

console.log("Name ar length :", name.length);

// First Character

console.log("First Character :", name[0]);

// Last Character

console.log("Last Character :", name[name.length - 1]);

// reverse 

// let nameSplit = name.split("");
// let nameReverse =nameSplit.reverse();
// let fullNameReverseJoin = nameReverse.join("");
// console.log(fullNameReverseJoin);

let reverse = name.split("").reverse().join("");
console.log("Type 1 For Reverse Name :", reverse);

// reverse in loop

let massage = "";

for (let index = name.length - 1; index >= 0; index--) {
  massage += name[index];
}

console.log("Type 2 For Reverse Name :", massage);

// Uppercase

console.log("Boro hater likha :", name.toUpperCase());

// Lowercase

console.log("choto hater likha :", name.toLowerCase());


// Word Count

let arr = name.split(" ");
let word = arr.length;
console.log("Word Songkha : ", word);


// Vowel Count

let count = 0;
for (let char of name) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    count++;
  }
}
console.log("Vowel Count :", count);
