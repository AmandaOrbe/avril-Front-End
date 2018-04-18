function splitTheBill(group) {
  // TODO: implement the method and return a hash
  // 1 sum the sum the bill
  let bill = 0;
  Object.values(group).forEach((expense) => {
    bill += expense;
  });
  console.log(bill);
  // 2/ calculate the difference
  const perPerson = bill/Object.values(group).length
  const howMuchEach = {}
  Object.keys(group).forEach((member) => {
    // let due =  expense - perPerson;
    let due = group[member] - perPerson;
    howMuchEach[member]  = due;
  });
  console.log(howMuchEach);

}


const group = {
  "john"  : 120,
  "paul"  :  30,
  "ringo" : 150,
}


splitTheBill(group)
module.exports = splitTheBill; // Do not remove this line.
