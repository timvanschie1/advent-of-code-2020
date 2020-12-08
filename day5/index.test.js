const {part1} = require('./part1');

const testData = [
    "BFFFBBFRRR",
    "FFFBBBFRRR",
    "BBFFBBFRLL"
]

test('day 5, part 1', () => expect(part1(testData)).toBe(820));