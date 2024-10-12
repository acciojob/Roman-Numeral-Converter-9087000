function convertToRoman() {
    const num = document.getElementById('numberInput').value;
    if (num < 1 || num > 3999 || isNaN(num)) {
        document.getElementById('result').innerText = 'Please enter a valid number (1 - 3999)';
        return;
    }

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
    let number = parseInt(num);

    romanNumerals.forEach(([roman, value]) => {
        while (number >= value) {
            result += roman;
            number -= value;
        }
    });

    document.getElementById('result').innerText = result;
}
