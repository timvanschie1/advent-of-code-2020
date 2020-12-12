const part1 = require('./part1');
const part2 = require('./part2');

const testData = [
    {operation: 'nop', argument: +0},
    {operation: 'acc', argument: +1},
    {operation: 'jmp', argument: +4},
    {operation: 'acc', argument: +3},
    {operation: 'jmp', argument: -3},
    {operation: 'acc', argument: -99},
    {operation: 'acc', argument: +1},
    {operation: 'jmp', argument: -4},
    {operation: 'acc', argument: +6}
]

test('day 8, part 1', () => expect(part1(testData)).toBe(5));
test('day 8, part 2', () => expect(part2(testData)).toBe(8));