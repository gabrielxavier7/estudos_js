let x;

const person = {
    name: 'John Doe',
    age: '30',
    isAdmin: true,
    adress: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: [ 'music', 'sports']
};

x = person.name;
x = person['age'];
x = person.adress.state;
x = person.hobbies[0];

person.name = 'John Doe';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function (){
    console.log(`Hello, my name is ${this.name}`)
};

person.greet();

const persaon2 = {
    'firtsName': 'Brad',
    'lastName': 'Traversy'
}

x = person2.firstName;

console.log(x);