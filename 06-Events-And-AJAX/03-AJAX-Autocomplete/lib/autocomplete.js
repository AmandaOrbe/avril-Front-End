// TODO: Autocomplete the input with AJAX calls.

const drawResponseList = (data) => {
  data.words.forEach((word) => {
    console.log(word);
    const list = document.getElementById("results");
    results.insertAdjacentHTML("beforeend", `<li>${word}</li>`)
  });
}



const autocomplete = (e) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${document.getElementById("search").value}`)
    .then(response => response.json())
    .then(data => {
      drawResponseList(data);
    });
};




const input = document.getElementById("search"); // that's an <input id="search">
input.addEventListener("keyup", autocomplete);

