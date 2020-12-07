function part1(data) {
    const pos = {x: 0, y: 0};
    let trees = 0;

    while (pos.y < data.length) {
        trees = (data[pos.y][pos.x] === "#") ? trees + 1 : trees;
        pos.x = pos.x + 3;
        pos.x = pos.x < data[0].length ? pos.x : pos.x - data[0].length;
        pos.y = pos.y + 1;
    }

    return trees;
}

module.exports = part1;