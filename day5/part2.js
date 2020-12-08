const {part1, getPosition} = require('./part1');

function part2(data) {
    const highestId = part1(data);

    const Ids = [];
    data.forEach(pass => {
        const row = getPosition(pass.substring(0, 7), "row")[0];
        const column = getPosition(pass.substring(7, 10), "column")[0];
        if (![0, 127].includes(row)) Ids.push(row * 8 + column);
    });

    const sortedIds = Ids.sort();

    const missingIds = [];
    for (let i = sortedIds[0]; i <= highestId; i++) {
        if (!Ids.includes(i)) missingIds.push(i);
    }

    return missingIds.reduce((acc, id) => {
        const nextAndPrevIdPresent = !missingIds.includes(id + 1) && !missingIds.includes(id - 1);
        return nextAndPrevIdPresent ? id : acc;
    }, null);
}

module.exports = part2;