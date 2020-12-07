/**
 * Approach is based on:
 * https://github.com/FrankBakkerNl/AdventOfCode2020/blob/master/AdventOfCode2020/Puzzles/Day01.cs
 **/

function part2Fast(data) {
    console.time('day 1, part 2 fast - performance');
    let y;
    const x = data.find(
        x => data.includes(2020 - x - data.find(
            scopedY => {
                y = scopedY;
                return data.includes(2020 - x - scopedY);
            }
        ))
    );
    console.timeEnd('day 1, part 2 fast - performance');
    return x * y * (2020 - x - y);
}

module.exports = part2Fast;