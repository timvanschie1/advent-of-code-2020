const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    [1, 3, "a", "abcde"],
    [1, 3, "b", "cdefg"],
    [2, 9, "c", "ccccccccc"]
]

test('day 2, part 1', () => expect(part1(testData)).toBe(2));
test('day 2, part 2', () => expect(part2(testData)).toBe(1));