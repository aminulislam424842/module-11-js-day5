const login ={
  userName:"aminul islam",
  password:"sguffe5452"
}

let userName= "aminul islam";
let password = "sguffe5452";

if(login.userName===userName){
  if(login.password===password){
    console.log("Login Success");
  }
  else{
    console.log("Password Incorrect");
    console.log("Login Failed");
  }
}
else{
  console.log("UserName Incorrect");
  console.log("Login Failed");
}
