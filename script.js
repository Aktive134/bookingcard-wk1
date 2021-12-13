// function validateform() {
//   const reeform = document.getElementById("reeform");
//   const Name = document.getElementById("Name").value;
//   if (reeform.Name.length == null || reeform.Name.length == "") {
//     alert("Name can't be blank");
//     return false;
//   }
// }
// const myform = document.getElementById("reeform");
// const Name = document.getElementById("Name").value;
// function validateform() {
//   if (Name == null || Name == "") {
//     alert("Name can't be blank");
//   }
// }
// console.log(validateform());
// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// // });
// onsubmit="return validateform()"

const fname = document.getElementById("Name");
const form = document.getElementById("form");
const email = document.getElementById("email");
const date = document.getElementById("date");
const time = document.getElementById("time");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("form has been submitted");
});

function makeReserve() {
  //get the values from the inputs
  const fnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  //const dateValue = date.innerHTML;
  console.log("form has been submitted");

  if (fnameValue === "") {
    //show error
    setErrorFor(fname, "Name cannot be blank");
    //add error class
  } else {
    //add success
    setSuccessFor(fname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }
  // if (dateValue === "") {
  //   setErrorFor(dateValue, "pick a date");
  // } else {
  //   setSuccessFor(dateValue);
  // }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");
  //const refControl = document.getElementsByTagName("a");
  //add error message inside small
  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
  //refControl
  //refControl.setAttribute("void";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //add success
  small.innerText = "";
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

let addBtn = document.getElementById("plus");
let subBtn = document.getElementById("minus");
let qtyBtn = document.getElementById("qtyBox");
let textChange = document.getElementById("person");
let newText = "persons";
let oldText = "person";
let count = 0;

addBtn.addEventListener("click", () => {
  qtyBtn.value = parseInt(qtyBtn.value) + 1;

  if (qtyBtn.value >= 2) {
    textChange.textContent = newText;
  } else {
    textChange.textContent = oldText;
  }
});
subBtn.addEventListener("click", () => {
  if (qtyBtn.value <= 0) {
    qtyBtn = 0;
  } else if (qtyBtn.value < 2) {
    textChange.textContent = oldText;
  } else {
    qtyBtn.value = parseInt(qtyBtn.value) - 1;
  }
});

// function increment() {
//   count += 1;
//   qtyBtn.textContent = count;
//   if (count >= 2) {
//     textChange.textContent = newText;
//   } else {
//     textChange.textContent = oldText;
//   }
// }
