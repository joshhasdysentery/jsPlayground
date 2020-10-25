const name = 'Joshua';
let age = 2;
const hasHobbies = true;

const summarizeuser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and has hobbies ' +
    userHasHobby
  );
};

// const add = (a, b) => a + b;

// const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
