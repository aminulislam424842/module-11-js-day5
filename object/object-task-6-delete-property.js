const student = {
  name: "Aminul Islam Mahi",
  age: 21,
  department: "Computer Science & Technology",
  cgpa: 3.91
};
delete student["cgpa"];
delete student.age;
console.log(student);