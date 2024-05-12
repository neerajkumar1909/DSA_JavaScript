
// Day 11 :  =================================================================================================
// Questions : Finding the duplicate from an Array

function findDuplicate(num) {
    let obj = {}
    for (let i = 0; i < num.length; i++) {
        if (obj[num[i]]) return num[i]
        else obj[num[i]] = 1
    }
}
console.log(findDuplicate([2, 2, 3, 4, 5, 6, 7]));



// Day 12 : ====================================================================================
// Question : Count how much time a keyword exists in an array..


const dataDetails = [
    "Kya delhi India ki capital hai?",
    "Kya delhi se desh ke bade bade kaam operate hote hai?",
    "Kya delhi ke CM Arvind Kejriwal hain?",
    "Kya delhi london jaisa ho gaya?"
]

function countOccurences(topics, word) {
    let occurence = {}
    for (let topic of topics) {
        if (topic.includes[word]) {
            if (occurence[word]) {
                occurence[word] = occurence[word] + 1;
            } else {
                occurence[word] = 1
            }
        }
    }
    return occurence
}
console.log(countOccurences(dataDetails, "Delhi"));



//  Day 14
const stockPrice = [100, 105, 110, 115, 120, 125];

function predictStockChange(prices) {
    let threshold = 0.05;
    for (let i = 1; i < prices.length; i++) {
        const priceChange = (prices[i] - prices[i - 1]);
        if (priceChange >= threshold) {
            return 1
        } else {
            return -1
        }
    }
}
console.log(predictStockChange(stockPrice))



// Day 15 : ======================================================================================================
// Question : Find the largest and the smallest number from an array

const numbers = [1, 2, 3, 4, 11, 67, 99, 53, 56];

function findNumbers(numbers) {
    let largest = numbers[0];
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) largest = numbers[i]
        else if (numbers[i] < smallest) smallest = numbers[i]
    }
    return { smallest, largest }
}
console.log(findNumbers(numbers));