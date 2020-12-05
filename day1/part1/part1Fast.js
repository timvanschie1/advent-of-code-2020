/**
 * Approach is based on:
 * https://github.com/FrankBakkerNl/AdventOfCode2020/blob/master/AdventOfCode2020/Puzzles/Day01.cs
 **/

function part1Fast(data) {
    console.time('day 1, part 1 fast - performance');
    const x = data.find(x => data.includes(2020 - x));
    console.timeEnd('day 1, part 1 fast - performance');
    return x * (2020 - x);
}

module.exports = part1Fast;