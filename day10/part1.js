function part1(data) {
    const sortedData = data.sort((a, b) => a - b);
    const differences = sortedData.reduce((accumulator, adapter, i) => {
        const difference = adapter - (i === 0 ? 0 : sortedData[i - 1]);
        accumulator[difference] = accumulator[difference] + 1
        return accumulator;
    }, {1: 0, 2: 0, 3: 1});

    return differences[1] * differences[3];
}

module.exports = part1;