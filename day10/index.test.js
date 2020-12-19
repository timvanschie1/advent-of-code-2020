const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3
];

test('day 10, part 1', () => expect(part1(testData)).toBe(220));
test('day 10, part 2', () => expect(part2(testData)).toBe(19208));