function part1(data) {
    const visitedInstructions = [];
    let accumulator = 0;
    let pos = 0;

    while (!visitedInstructions.includes(pos)) {
        visitedInstructions.push(pos);
        const {operation, argument} = data[pos];

        if (operation === "jmp") {
            pos = pos + argument;
            continue;
        }

        if (operation === "acc") {
            accumulator = accumulator + argument;
        }

        pos = pos + 1;
    }

    return accumulator;
}

module.exports = part1;