const part1 = require('./part1');
const testData = [
    [1, 3, "a", "abcde"],
    [1, 3, "b", "cdefg"],
    [2, 9, "c", "ccccccccc"]
]
const result = 2;

test('day 2, part 1', () => expect(part1(testData)).toBe(result));