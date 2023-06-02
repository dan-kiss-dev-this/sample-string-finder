export default function findLongestString(input) {
    //need to track the character
    //need to track if you match previous character
    //track current string an its length
    let currentCharacter = ""
    let currentString = []
    let longestString = []

    for (let i = 0; i < input.length; i++) {
        if (i === 0 && input[0] !== undefined) {
            // && input[0] !== undefined
            currentCharacter = input[i]
            currentString.push(input[i])
            longestString.push(input[i])
            continue;
        }
        if (currentCharacter !== input[i]) {
            currentString.push(input[i])
        }
        if (currentString.length > longestString.length) {
            longestString = currentString
        }
        if (currentCharacter === input[i]) {
            currentString = [input[i]]
        }
        currentCharacter = input[i]
    }
    return longestString.join("");
}





