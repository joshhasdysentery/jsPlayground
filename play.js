const name = 'Joshua';
let age = 2;
const hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and has hobbies ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
