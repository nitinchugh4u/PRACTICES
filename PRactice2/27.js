
function rearrangePattern(input) {
    let output = "";
    let zerosCount = 0;

    // Count the number of '0's and construct the left side of the output
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "0") {
            output += "0";
            zerosCount++;
        }
    }

    // Add the remaining '1's to the right side of the output
    for (let i = 0; i < input.length - zerosCount; i++) {
        output += "1";
    }

    return output;
}

const input = "1100110";
const output = rearrangePattern(input);
console.log("Output:", output); // This will print the rearranged output: 0001111
