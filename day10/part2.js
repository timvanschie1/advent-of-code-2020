/** Solved with help for finding the algorithm **/
function part2(data) {
    const sortedData = data.sort((a, b) => a - b);
    const memory = [{jolt: 0, paths: 1}];

    sortedData.forEach((adapter, i) => {
        let newPaths = 0;
        for (let k = 1; k <= 3; k++) {
            const memoryItem = memory.find(({jolt}) => jolt === adapter - k);
            if (memoryItem) {
                newPaths += memoryItem.paths;
            }
        }

        memory.push({
            jolt: adapter,
            paths: newPaths
        });
    })

    return memory[memory.length - 1].paths;
}

module.exports = part2;