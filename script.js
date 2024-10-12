function convertToRoman(num) {
    // Array of Roman numerals and their corresponding values
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    // Result string for the Roman numeral
    let result = '';

    // Loop through each symbol
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];
        
        // Append the symbol while the value can be subtracted from num
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example test cases
console.log(convertToRoman(14)); // XIV
console.log(convertToRoman(798)); // DCCXCVIII


// do not edit below this line
module.exports = convertToRoman