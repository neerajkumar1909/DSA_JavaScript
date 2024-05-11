
// Day 7 :  =================================================================================================
// Questions : Searching words from an array..

const chat = [
    "Hello, how are you?",
    "What are you doing?",
    "Are you well today?",
    "What happen to you?",
    "You have a pretty smile."
]

function searchKeyword(messages, keyword) {
    let result = []
    for (let message of messages) {
        if (message.toLowerCase().includes(keyword.toLowerCase())) {
            result.push(message)
        }
    }
    return result;
}

console.log(searchKeyword(chat, "you"));



// Day 8 :  ===============================================================================================
// Question : Finding the maximum number in an array

const numbers = [2, 1, 44, 45, 67, 99, 12, 34];

// console.log(Math.max(...numbers))  // for direct
// console.log(Math.min(...numbers))   

function findMaxNumber(numbers) {
    let maxNumber = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]
        }
    }
    return maxNumber
}
console.log(findMaxNumber(numbers));



// Day 9 : =====================================================================================================
// Question : Writing a recursive function to calcukate the factorial of a given number.

// factorial : 5! => 5*4*3*2*1

function factorial(number) {
    if (number === 0) return 1
    return number * factorial(number - 1)
}
console.log(factorial(5));




// Day : 10  ==============================================================================================
// Question : Implementing a recursive function to generate Fibonacci numbers.


// method of fibonacci
// return fibonacci(number) = fibonacci(number - 1) + fibonacci(number - 2)

function fibonacci(number) {
    if (number === 0) return 0
    else if (number === 1) return 1

    return fibonacci(number - 1) + fibonacci(number - 2)

}
console.log(fibonacci(10))