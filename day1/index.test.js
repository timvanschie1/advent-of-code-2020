const part1 = require('./part1');
const part1Fast = require('./part1Fast');
const part2 = require('./part2');
const part2Fast = require('./part2Fast');

const testData = [1721, 979,366, 299, 675, 1456];

const resultPart1 = 514579;
test('day 1, part 1', () => expect(part1(testData)).toBe(resultPart1));
test('day 1, part 1 fast', () => expect(part1Fast(testData)).toBe(resultPart1));

const resultPart2 = 241861950;
test('day 1, part 2', () => expect(part2(testData)).toBe(resultPart2));
test('day 1, part 2 fast', () => expect(part2Fast(testData)).toBe(resultPart2));