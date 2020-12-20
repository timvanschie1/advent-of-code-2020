const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
    ["L", "L", "L", "L", "L", "L", "L", ".", "L", "L"],
    ["L", ".", "L", ".", "L", ".", ".", "L", ".", "."],
    ["L", "L", "L", "L", ".", "L", "L", ".", "L", "L"],
    ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
    ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
    [".", ".", "L", ".", "L", ".", ".", ".", ".", "."],
    ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
    ["L", ".", "L", "L", "L", "L", "L", "L", ".", "L"],
    ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
]

test('day 11, part 1', () => expect(part1(testData)).toBe(37));
test('day 11, part 2', () => expect(part2(testData)).toBe(26));