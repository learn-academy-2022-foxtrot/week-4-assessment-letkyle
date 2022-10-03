// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//creating the test removeAndShuffle and describe what the test will do
//looked at the resource given, use the method arrayContaining

describe("removeAndShuffle", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"] 
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(removeAndShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

//output: ReferenceError: removeAndShuffle is not defined, amazing fail

// b) Create the function that makes the test pass.

//creating a function with the name of removeAndShuffle, in this function I want it to remove the first value inside of the array, then have a new array with the left over words scrambled inside of a new array
//inside the function I will be using the method .slice(1) in order to remove the first value (easy part)
//now hard part I want to make the new array that scrambles the values in a random order, iterate through array with for loop, use math.random to randomize the order 


const removeAndShuffle = (array) => {
    let newArray = array.slice(1)
    for (let i = newArray.length - 1; i > 0; i--) {
        let randomNum = Math.floor(Math.random() * i + 1)
        let temp = newArray[i]
        newArray[i] = newArray[randomNum]
        newArray[randomNum] = temp
    }
    return newArray
}

//output: PASS
 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

//naming the test netVotes


describe ("netVotes", () => {
    const votes1 = {upVotes: 13, downVotes: 2}
        // Expected output: 11
    const votes2 = {upVotes: 2, downVotes: 33}
        // Expected output: -31)
    it("takes in an object that contains up votes and down votes and returns the net total of votes", () => {
        expect(netVotes(votes1)).toEqual(11)
        expect(netVotes(votes2)).toEqual(-31)
    })
})

//output: ReferenceError: netVotes is not defined

// b) Create the function that makes the test pass.

//make a function named netVotes to access the objecct and have the keys subtract from each other starting with upVotes - downVotes then return the value of the two
// votes1.upVotes - votes1.downVotes but make it more dynamic

const netVotes = (object) => {
    return object.upVotes - object.downVotes
}
//output: PASS


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.
