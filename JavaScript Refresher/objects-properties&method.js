const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// console.log(person);
// person.greet();

const hobbies = ['Sport', 'Cooking'];
/*
for (let hobby of hobbies) {
    console.log(hobby);
}*/
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
