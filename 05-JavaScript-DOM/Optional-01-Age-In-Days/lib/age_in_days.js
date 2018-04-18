function ageInDays(day, month, year) {
  // TODO: Implement the method and return an integer
  const today = Date.now();
  const birthday = new Date(`${month} ${day} ${year}`)

console.log(today);
console.log(birthday);
const daysU = (today - birthday)*1.15741e-8;
const days = Math.round(daysU, 0);
console.log(days);

}

module.exports = ageInDays; // Do not remove. We need this for the spec to know about your method.

ageInDays(18, "January" ,2018)
