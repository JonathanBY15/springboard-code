// function createInstructor(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

const createInstructor = (firstName, lastName) => {
    return { firstName, lastName };
}

// var favoriteNumber = 42;

// var instructor = {
//     firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;
const firstName = 'Colt';

var instructor = {
    firstName,
    favoriteNumber: "That is my favorite!"
};


// pre ES2015

// var instructor = {
//     firstName: "Colt",
//     sayHi: function () {
//         return "Hi!";
//     },
//     sayBye: function () {
//         return this.firstName + " says bye!";
//     }
// }

// post ES2015

var instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return `${this.firstName} says bye!`;
    }
};

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]: function () {
            console.log(noise);
        },
        noise
    }
}

const d = createAnimal('dog', 'bark', 'woof');
d.bark();