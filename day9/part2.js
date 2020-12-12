const part1 = require('./part1');

function part2(data, preambleRange) {
    const invalidNumber = part1(data, preambleRange);

    const contiguousSet = data.reduce((accumulator, number, i) => {
        let counter = 0;
        let position = i;
        const set = [];

        while (counter < invalidNumber) {
            counter = counter + data[position];
            set.push(data[position]);
            position++
        }

        if (counter === invalidNumber && set.length > 1) {
            return set;
        }

        return accumulator;
    }, null)

    return Math.min(...contiguousSet) + Math.max(...contiguousSet);
}

module.exports = part2;