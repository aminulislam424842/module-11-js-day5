// way-1

let message = "Rajshahi Polytechnic Institute";

// let divArray = message.split('');
// let rev = divArray.reverse();
// let joinMessage = rev.join('');

// console.log(joinMessage);

let reverseMessage = message.split("").reverse().join("");
console.log(reverseMessage);

// way-2

let newMessage = "";

for (let i = message.length - 1; i >= 0; i--) {
  newMessage += message[i];
}
console.log(newMessage);