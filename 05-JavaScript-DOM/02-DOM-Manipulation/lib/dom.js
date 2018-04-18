/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */

// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practise. Each time you make some progress in software
// development, you want to save a snapshot.


module.exports = function runChallenges(check) {
  // Ex 1. Read the content of the email input
  const email = document.getElementById("email").value; // TODO: replace null, keep the email variable.
        emailElement = document.getElementById("email");


  // Ex 2. Fill the content of the email input with your email

    emailElement.value = "amandaorbe@gmail.com";


  // Ex 3. Replace the email hint (next to the input) with 'This is my email now'
  //       The text should be emphasized using a <strong> tag

  document.getElementById("email-hint").innerHTML = "<strong>This is my email now</strong>"


  // Ex 4. Add the .blue CSS class to the table header cells (th elements)
  const headers = document.querySelectorAll("th");
  headers.forEach((header) => {
    header.classList.add("blue");
  });

  // Ex 5. Count the number of table body rows there are (team count!)

  const teamCount = document.querySelectorAll("tbody > tr").length; // TODO: replace 0, keep the teamCount variable.




  // Ex 6. Say there is a 15th team added to the table.
  //       Add a row at the bottom, this new team should have zero points.

  const tbody = document.querySelector(".table tbody");
  tbody.insertAdjacentHTML("beforeend", "<tr><td>15</td><td>Rugby Club LFM</td><td>0</td></tr>");

  // Ex 7. Write some code to sum all points given to all teams
  let sum = 0; // TODO: replace 0 with your sum result, keep the sum variable.

  const rows = document.querySelectorAll("tbody > tr");

  rows.forEach((row) => {
    let pointsString = row.querySelectorAll("td")[2].innerText;
    let points = Number.parseInt(pointsString, 10);

    sum +=points;
  })


  // Ex 8. Change the background color of all table header cells to #DDF4FF

  headers.forEach((header) => {
    header.style.backgroundColor = "#DDF4FF";
  });


  // Ex 9. Remove the "Email:" label from the DOM

  document.querySelector("label").remove();









  check(email, teamCount, sum); // Checking exercise answers. DO NOT MODIFY THIS LINE
};
