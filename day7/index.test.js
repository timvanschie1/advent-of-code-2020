const part1 = require('./part1');
const part2 = require('./part2');

const testDataPart1 = [
    {color: 'light red', holds: ['1 bright white', '2 muted yellow']},
    {color: 'dark orange', holds: ['3 bright white', '4 muted yellow']},
    {color: 'bright white', holds: ['1 shiny gold']},
    {color: 'muted yellow', holds: ['2 shiny gold', '9 faded blue']},
    {color: 'shiny gold', holds: ['1 dark olive', '2 vibrant plum']},
    {color: 'dark olive', holds: ['3 faded blue', '4 dotted black']},
    {color: 'vibrant plum', holds: ['5 faded blue', '6 dotted black']},
    {color: 'faded blue', holds: []},
    {color: 'dotted black', holds: []}
];

const testDataPart2 = [
    {color: 'shiny gold', holds: ['2 dark red']},
    {color: 'dark red', holds: ['2 dark orange']},
    {color: 'dark orange', holds: ['2 dark yellow']},
    {color: 'dark yellow', holds: ['2 dark green']},
    {color: 'dark green', holds: ['2 dark blue']},
    {color: 'dark blue', holds: ['2 dark violet']},
    {color: 'dark violet', holds: []}
];

test('day 7, part 1', () => expect(part1(testDataPart1)).toBe(4));
test('day 7, part 2', () => expect(part2(testDataPart2)).toBe(126));