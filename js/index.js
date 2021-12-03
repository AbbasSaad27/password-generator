"use strict";

// selecting elements
const showPopup = document.querySelector(".btn-gen");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".btn-close");
const passStyleForm = document.querySelector(".criteriaForm");
const lengthInput = document.querySelector("#inputLength");
const showPass = document.querySelector(".generator-result");

// passwords types obj
const passObj = {
  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  special: "!@#$%&",
};

// for opening popup on generate password click
showPopup.addEventListener("click", function (e) {
  popup.classList.add("popup-show");
});

// for closing popup on escape press
document.body.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    popup.classList.remove("popup-show");
  }
});

// for closing the popup on close button click
closePopup.addEventListener("click", function (e) {
  popup.classList.remove("popup-show");
});

// form submit event
passStyleForm.addEventListener("submit", function (e) {
  // preventing the default behaviour (page reload)
  e.preventDefault();

  // getting all the selected checkboxes
  const checkedBoxes = [
    ...document.querySelectorAll("input[type='checkbox']:checked"), // selecting using pseudo element
  ];

  // checking if atleast one checkbox is checked or not
  if (!checkedBoxes[0]) {
    alert("Please check atleast one checkbox");
    return;
  }

  // generating pass

  // password accumilator
  let pass = "";
  for (let i = 0; i < lengthInput.value; i++) {
    // RANDOM number for type of password
    const typeRand = Math.floor(Math.random() * checkedBoxes.length);

    // random selected type
    const typeVal = passObj[checkedBoxes[typeRand].value];

    // random number for character of that type
    const charRand = Math.floor(Math.random() * typeVal.length);

    // adding that character to the pass
    pass += typeVal[charRand];
  }

  // closing the popup
  popup.classList.remove("popup-show");

  // showing the new password
  showPass.innerHTML = `<p class='password'>${pass}</p>`;
});
