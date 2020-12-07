function part2(data) {
    const slopes = [
        {x: 1, y: 1},
        {x: 3, y: 1},
        {x: 5, y: 1},
        {x: 7, y: 1},
        {x: 1, y: 2},
    ];

    return slopes.reduce((accumulator, slope) => {
        const pos = {x: 0, y: 0};
        let trees = 0;

        while (pos.y < data.length) {
            trees = (data[pos.y][pos.x] === "#") ? trees + 1 : trees;
            pos.x = pos.x + slope.x;
            pos.x = pos.x < data[0].length ? pos.x : pos.x - data[0].length;
            pos.y = pos.y + slope.y;
        }

        return accumulator * trees;
    }, 1)
}

module.exports = part2;