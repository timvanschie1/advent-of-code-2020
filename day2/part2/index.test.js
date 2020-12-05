const part2 = require('./part2');
const testData = [
    [1, 3, "a", "abcde"],
    [1, 3, "b", "cdefg"],
    [2, 9, "c", "ccccccccc"]
]
const result = 1;

test('day 2, part 2', () => expect(part2(testData)).toBe(result));