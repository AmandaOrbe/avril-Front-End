// const selectingRacer = (event) => {
//   if (event.key === "g"){
//     return  "player1_race";
//   } else if (event.key === "h"){
//     return "player1_race";
//   } else {
//     console.log("wrong")
//   }
// };

// const advancing = (selectingRacer) => {
//   selectingRacer(event);
//   let activeUser = document.getElementbyId(selectingRacer);
//   let activeTab = activeUser.querySelector(".active");
//   let next = activeTab.nextElementSibling;
//     activeTab.classList.remove("active");
//     next.classList.add("active");
// }
const player1row = document.querySelector('#player1_race');
const player2row = document.querySelector('#player2_race');

const advancing = (event) => {
  if (event.key === "g") {
    let activeTab = document.querySelector("#player1_race > .active");
    if (activeTab.classList.contains("last")){
      alert("player 1 wins");
    } else {
    console.log("pressed g");
    let activeTab = document.querySelector("#player1_race > .active");
    let next = activeTab.nextElementSibling;
    activeTab.classList.remove("active");
    next.classList.add("active");
     }
  } else if (event.key === "h")  {
    let activeTab = document.querySelector("#player2_race > .active");
    if (activeTab.classList.contains("last")){
      alert("player 2 wins");
    } else {
    console.log("pressed h");
    let activeTab = document.querySelector("#player2_race > .active");
    let next = activeTab.nextElementSibling;
    activeTab.classList.remove("active");
    next.classList.add("active");
     }
  } else {
    console.log("wrong");
  }
}
const isG = (event) => {

}
 document.addEventListener("keyup", advancing);
document.addEventListener("keyup", selectingRacer);

