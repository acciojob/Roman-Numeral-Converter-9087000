const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import the conversion function from script.js
const { convertToRoman } = require('./script');

// API route to convert number to Roman numeral
app.post('/romanConverter', (req, res) => {
    const { num } = req.body;

    if (typeof num !== 'number' || num < 1 || num > 100000) {
        return res.status(400).json({ error: 'Please enter a valid number between 1 and 100000.' });
    }

    const romanNumeral = convertToRoman(num);
    res.json({ romanNumeral });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
