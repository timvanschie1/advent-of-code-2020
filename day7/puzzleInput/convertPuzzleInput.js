const fs = require('fs');

fs.readFile('originalPuzzleInput.txt', 'utf8', (err, data) => {
    if (err) throw err;

    data = data.replace(/, /g, "', '");
    data = data.replace(/ bags contain /g, "', holds: ['");
    data = data.replace(/ bags/g, "");
    data = data.replace(/ bag/g, "");
    data = data.split(".\n").join("']},\n{color: '");
    data = data.replace(/'no other'/g, "");
    data = data.replace(/'no other.'/g, "");
    data = `const puzzleInput = [\n{color:'${data}']}\n];\n\nmodule.exports = puzzleInput;`;
    data = data.replace(/'no other.'/g, "");

    fs.writeFile('index.js', data, 'utf8', () => null);
});