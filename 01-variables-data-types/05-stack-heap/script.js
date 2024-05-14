const name = 'John';
const agr = 20;

const person = {
    name: 'Brad',
    age: 30
};

let newName = name;
newName = 'Johnathan'

let newPerson = person;
newPerson.name = 'Bradley'

console.log(name, newName);
console.log(person, newPerson)