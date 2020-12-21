const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    "F10",
    "N3",
    "F7",
    "R90",
    "F11",
];

test('day 12, part 1', () => expect(part1(testData)).toBe(25));
test('day 12, part 2', () => expect(part2(testData)).toBe(286));