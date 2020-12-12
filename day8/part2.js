function part2(data) {
    function getProgramResult(program) {
        const visitedInstructions = [];
        let accumulator = 0;
        let pos = 0;

        while (!visitedInstructions.includes(pos)) {
            if (pos >= program.length) {
                return [accumulator, true];
            }

            visitedInstructions.push(pos);
            const {operation, argument} = program[pos];

            if (operation === "jmp") {
                pos = pos + argument;
                continue;
            }

            if (operation === "acc") {
                accumulator = accumulator + argument;
            }

            pos = pos + 1;
        }

        return [accumulator, false];
    }

    return data.reduce((accumulator, instruction, i) => {
        if (accumulator || instruction.operation === "acc") {
            return accumulator;
        }

        const programVariant = [...data];
        programVariant[i] = "jmp" ? "nop" : "jmp";
        const result = getProgramResult(programVariant);

        if (result[1] === true) {
            accumulator = result[0];
        }

        return accumulator;
    }, null);
}

module.exports = part2;