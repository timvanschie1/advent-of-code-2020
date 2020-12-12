const fs = require('fs');

fs.readFile('originalPuzzleInput.txt', 'utf8', (err, data) => {
    if (err) throw err;

    data = data.replace(/, /g, "', '");
    data = data.replace(/ bags contain /g, "', holds: ['");
    data = data.replace(/ bags/g, "");
    data = data.replace(/ bag/g, "");
    // data = data.replace(/[0-9] /g, );
    data = data.split(".\n").join("']},\n{color: '");
    data = `const puzzleInput = [\n{color:'${data}']}\n];\n\nmodule.exports = puzzleInput;`;

    fs.writeFile('index.js', data, 'utf8', () => null);
});