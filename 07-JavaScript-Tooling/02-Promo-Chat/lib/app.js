const batch = 57; // change to your own batch id
const baseUrl = "https://wagon-chat.herokuapp.com/:channel/messages";

// Your turn to code!
const now = Date.now();
const messagesList = document.getElementById("messages")

const calculateDate = (message) => {
  const moment = new Date(message.created_at);
  const dateU =  (now - moment)* 1.66667e-5 ;
  const date = Math.round(dateU, 0);
  return date

}
const displayMessages = (message) => {
  document.getElementById("your-message").value = "";
  document.getElementById("your-name").value = "";
     messagesList.insertAdjacentHTML("afterbegin",
  `<ul class="list-unstyled">
                <li>${message.content} (posted <span class="date">${calculateDate(message)} minutes ago</span>) by ${message.author}</li>
              </ul>`)
}


const loopMessages = (data) => {
  data.messages.forEach((message) =>{

    displayMessages(message);
  })

}

const fetchMessages = () => {
 fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      loopMessages(data);
    });
}


const refreshMessages = () => {
  // event.preventDefault();
  console.log("refreshed!")
  messagesList.querySelectorAll("li").forEach((li) =>{
    li.remove()
  })
  fetchMessages();

}



const pushMessages = (e) => {
  event.preventDefault();
  const message = document.getElementById("your-message").value;
  const sender = document.getElementById("your-name").value;
  fetch(baseUrl, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    "author": sender,
    "content": message
  })
  })
  .then(response => response.json())
  .then((data) => {
    displayMessages(data);
  });
}

const reloading = () => {
  console.log("reloaded!")
}


// https://wagon-chat.herokuapp.com/'/:channel/messages'


const submit = document.getElementById("submit-btn"); // that's an <input id="search">

submit.addEventListener("click", pushMessages);

// const refresh = document.getElementById("refresh"); // that's an <input id="search">

// refresh.addEventListener("click", refreshMessages);

document.addEventListener("DOMContentLoaded", fetchMessages )

setInterval(function() {
  refreshMessages();
}, 50000);
