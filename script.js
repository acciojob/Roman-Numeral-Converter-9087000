const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Roman numeral conversion function
function convertToRoman(num) {
    const romanNumerals = [
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

    let result = '';
    romanNumerals.forEach(([roman, value]) => {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    });

    return result;
}

// POST endpoint to handle the conversion
app.post('/romanConverter', (req, res) => {
    const { input } = req.body;

    if (typeof input !== 'number' || input < 1 || input > 3999) {
        return res.status(400).json({ error: 'Invalid input. Enter a number between 1 and 3999.' });
    }

    const roman = convertToRoman(input);
    res.json({ roman });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
