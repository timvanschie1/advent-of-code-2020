const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    35,
    20,
    15,
    25,
    47,
    40,
    62,
    55,
    65,
    95,
    102,
    117,
    150,
    182,
    127,
    219,
    299,
    277,
    309,
    576
];

test('day 9, part 1', () => expect(part1(testData, 5)).toBe(127));
test('day 9, part 2', () => expect(part2(testData, 5)).toBe(62));