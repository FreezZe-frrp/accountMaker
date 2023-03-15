let signUp = document.getElementById("signUp");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let houseHold = document.getElementById("houseHold");
let nif = document.getElementById("nif");
let comments = document.getElementById("comments");

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(
    `Name: ${name.value}\nPassword: ${email.value}\nPassword: ${password.value}\nPhone Number: ${phone.value}\nHousehold: ${houseHold.value}\nNif: ${nif.value}\nComments: ${comments.value}`
  );
  document.getElementById("form").reset();
  alert("Sign up was success");
});
