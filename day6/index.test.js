const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    ["abc"],
    ["a", "b", "c"],
    ["ab", "ac"],
    ["a", "a", "a", "a"],
    ["b"]
];

test('day 6, part 1', () => expect(part1(testData)).toBe(11));
// test('day [], part 2', () => expect(part2(testData)).toBe(null));