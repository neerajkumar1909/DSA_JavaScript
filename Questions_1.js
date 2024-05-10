// Day 1 :   ====================================================================================================
// Question : Write a program to check whether the number is even or odd using logical operator

function isEvenOrOdd(number) {
    if (number % 2 === 0) return 'Even'
    else return 'Odd'
}
console.log(isEvenOrOdd(3));


// Day 2:  ====================================================================================================
// Question : Write a program to check whether a person is eligible to vote or not

let person = 20;
function isEligible() {
    if (person > 18) return "Eligible to vote"
    else return "Not Eligible"
}
console.log(isEligible())



// Day 3 : ====================================================================================================
// Question : Determine a person is eligible for an discount or not based on his purchasing amount

let minAmount = 500;
function isEligibleForDiscount(isMember, purchasingAmount) {
    if (isMember && purchasingAmount > minAmount) return "Yes eligible for discount"
    else return 'Not Eligible'
}

console.log(isEligibleForDiscount(true, 800));


// Day 4 : ====================================================================================================
// Question : Implementing the linear search algorithm to find your fav fruit

let fruits = [
    { name: "Banana", isFav: false },
    { name: "Apple", isFav: false },
    { name: "Mango", isFav: true },
    { name: "Grapes", isFav: false },
    { name: "Papaya", isFav: false }
]

function favFruit() {
    for (let index = 0; index < fruits.length; index++) {
        const fruit = fruits[index]

        if (fruit.isFav) return "Fav fruit found";
    }
    return "Fav fruit not found"
}
console.log(favFruit());


// Day 5 :  ====================================================================================================
// Question : Find the two intersections of the two sets of integer

let array1 = [1, 2, 3, 4, 5]
let array2 = [3, 4, 5, 6, 7]

function findIntersections(array1, array2) {
    let intersection = [];

    for (i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            intersection.push(array1[i])
        }
    }
    return intersection;
}
const intersectionSet = findIntersections(array1, array2)
console.log(intersectionSet); // output : [3,4,5]


// Day : 6  ====================================================================================================
// Questions : Write a program which calculate the sum of consecutive number (e.g 1 to 10 , 1 to 50)


function sumNumber(num) {
    let sum = 1;
    for (i = 0; i < num; i++) {
        sum += i
    }
    return sum
}
console.log(sumNumber(10));