const profile = {
  name: "Aminul Islam Mahi",
  age: 21,
  email: "aminulislam424842@gmail.com",
  friends: ["Tamim", "Nafis"],
  isVerified: true,
  hobbies: ["Programming", "Football"],
  address: {
    presentAddress: "Seroil,Rajshahi",
    permanentAddress: "Seroil,Rajshahi"
  }
}

console.log(profile.Name);
console.log(profile["age"]);


profile.dateOfBirth = "May 6,2006";
profile.age = 23;
delete profile.isVerified;

console.log(profile)