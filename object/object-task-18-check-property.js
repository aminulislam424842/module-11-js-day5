// Way-01

const student = {
  name: "Aminul",
  age: 21,
  department: "CST"
};

if (student.hasOwnProperty("name")) {
  console.log("Found");
} else {
  console.log("Not Found");
}

// Way-02

if("names" in student){
  console.log("Found");
} else {
  console.log("Not Found");
}
