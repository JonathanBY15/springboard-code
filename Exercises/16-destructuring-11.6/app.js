var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

// var a = obj.numbers.a;
// var b = obj.numbers.b;

const { a, b } = obj.numbers;


// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// function raceResults(arr) {
//     const [first, second, third, ...rest] = arr;
//     return {
//         first,
//         second,
//         third,
//         rest
//     }
// }

const raceResults = arr => ([first, second, third, ...rest] = arr, { first, second, third, rest });
