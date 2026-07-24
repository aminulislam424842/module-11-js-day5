const student = {
  name: "Aminul Islam",
  roll: 819693,
  department: "Computer Science & Technology",
}
const mark = {
  math: 69,
  dataCommunication: 72,
  english: 85,
  Web: 55
}
const keys = Object.keys(mark);

let total = 0;

for (let key in mark) {
  total += mark[key];
}

let average = (total / keys.length);
let grade;
if (average >= 80) {
  grade = "A+";
}
else if (average >= 70) {
  grade = "A";
}
else if (average >= 60) {
  grade = "B";
}
else if (average >= 50) {
  grade = "C";
}
else if (average >= 40) {
  grade = "D";
}
else {
  grade = "F";
}

console.log("Student Name:", student.name);
console.log("Roll:", student.roll);
console.log("Department:", student.department);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);