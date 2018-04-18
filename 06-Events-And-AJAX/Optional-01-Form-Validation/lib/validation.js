// TODO: Validate this form

// all fields are completed

const inputs = []
  document.querySelectorAll("input").forEach((field) =>  {
  inputs.push(field);
});

const oneFieldRequired = (field) => {
  return field.value;
}
const allFieldsRequired = (array) => {
  let filled = inputs.every(oneFieldRequired);
  console.log(filled);
  if (filled === false){
    console.log("filled is false");
  } else if (filled === true && document.getElementById("tos").checked === true){
    console.log("everything is filled");
    document.querySelector("button").removeAttribute("disabled");
  }
}

// const removeDisabled = (oneFieldRequired) => {
//   console.log(inputs.every(oneFieldRequired));
//   if (allFieldsRequired === false){
//     console.log(allFieldsRequired)
//     console.log("still to go")
//   } else {
//     console.log("I don't know")
//     document.querySelector("button").removeAttribute("disabled");
//   }
// }

// const stupidHello = (inputs) => {
//   console.log("stupid hello");
// }




document.addEventListener("keyup", allFieldsRequired);

document.addEventListener("click", allFieldsRequired);


// console.log(inputs.every(oneFieldRequired));

