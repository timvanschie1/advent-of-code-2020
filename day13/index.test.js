const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    "939",
    "7,13,x,x,59,x,31,19"
]

test('day 13, part 1', () => expect(part1(testData)).toBe(295));
test('day 13, part 2', () => expect(part2(testData)).toBe(1068781));