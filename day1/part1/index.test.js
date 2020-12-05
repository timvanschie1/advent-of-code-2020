const part1 = require('./part1');
const part1Fast = require('./part1Fast');
const testData = [1721, 979,366, 299, 675, 1456];
const result = 514579;

test('day 1, part 1', () => expect(part1(testData)).toBe(result));
test('day 1, part 1 fast', () => expect(part1Fast(testData)).toBe(result));