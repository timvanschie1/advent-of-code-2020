const part1 = require('./part1');
const part2 = require('./part2');

const testDataPart1 = [
    {
        color: "light red",
        holds: ["bright white", "muted yellow"]
    },
    {
        color: "dark orange",
        holds: ["bright white", "muted yellow"]
    },
    {
        color: "bright white",
        holds: ["shiny gold"]
    },
    {
        color: "muted yellow",
        holds: ["shiny gold", "faded blue"]
    },
    {
        color: "shiny gold",
        holds: ["dark olive", "vibrant plum"]
    },
    {
        color: "dark olive",
        holds: ["faded blue", "dotted black"]
    },
    {
        color: "vibrant plum",
        holds: ["faded blue", "dotted black"]
    },
    {
        color: "faded blue",
        holds: []
    },
    {
        color: "dotted black",
        holds: []
    }
]
const testDataPart2 = [
    {
        color: "light red",
        holds: ["bright white", "muted yellow"]
    },
    {
        color: "dark orange",
        holds: ["bright white", "muted yellow"]
    },
    {
        color: "bright white",
        holds: ["shiny gold"]
    },
    {
        color: "muted yellow",
        holds: ["shiny gold", "faded blue"]
    },
    {
        color: "shiny gold",
        holds: ["dark olive", "vibrant plum"]
    },
    {
        color: "dark olive",
        holds: ["faded blue", "dotted black"]
    },
    {
        color: "vibrant plum",
        holds: ["faded blue", "dotted black"]
    },
    {
        color: "faded blue",
        holds: []
    },
    {
        color: "dotted black",
        holds: []
    }
]

test('day 7, part 1', () => expect(part1(testDataPart1)).toBe(4));
test('day 7, part 2', () => expect(part2(testDataPart2)).toBe(126));