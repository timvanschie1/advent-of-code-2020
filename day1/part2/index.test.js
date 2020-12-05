const part2 = require('./part2');
const part2Fast = require('./part2Fast');
const testData = [1721, 979,366, 299, 675, 1456];
const result = 241861950;

test('day 1, part 2', () => expect(part2(testData)).toBe(result));
test('day 1, part 2 fast', () => expect(part2Fast(testData)).toBe(result));