const fs = require('fs');

fs.readFile('originalPuzzleInput.txt', 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split(" ").join("\n");
    data = data.split(":").join('":"');
    data = data.split("\n\n").join("\n},{\n");
    data = data.split("\n").join('",\n"');
    data = data.split('"},{",').join("},{");
    data = `const puzzleInput = [{"${data}}];\n\nmodule.exports = puzzleInput;`;
    data = data.split('"}]').join('}]');
    fs.writeFile('index.js', data, 'utf8', () => null);
});