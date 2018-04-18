/* eslint-disable no-multiple-empty-lines */

function hasNewMessage() {
  // TODO: return true with a probability of 20%.
  const random = Math.floor(Math.random() * Math.floor(4));
  // console.log(random);
  const myBoolean = random === 2 ? true : false;
  // console.log() number % 2 === 1 ? "odd" : "even";
  // console.log(myBoolean);
return myBoolean;
}

function newMessage() {
  const senders = ["Matthew", "John", "Luke", "Mark"]
  const subjects = ["Pray", "Don't sin", "Confess", "Shut up!"]
  const message = {
    sender: senders[Math.floor(Math.random() * senders.length)],
    subject: subjects[Math.floor(Math.random() * subjects.length)]
  }
  return message;
  // TODO: return a random message as an object with two keys, subject and sender
}

function appendMessageToDom(message) {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const messageHTML = `<div class="row message unread"> <div  class="col-xs-3">${message.sender}</div><div class="col-xs-9"> ${message.subject} </div></div>`;
    // tbody.insertAdjacentHTML("beforeend", "<tr><td>15</td><td>Le Wagon</td><td>0</td></tr>");
  document.getElementById("inbox").insertAdjacentHTML("afterbegin", messageHTML);
}

function refresh() {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
}






console.log(hasNewMessage());
console.log(newMessage());
const message = newMessage();
console.log(appendMessageToDom(message));
appendMessageToDom(message);

const hello = "Hello man!";








// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
