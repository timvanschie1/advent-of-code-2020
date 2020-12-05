function part1(data) {
    console.time('day 1, part 1 performance');
    let answer;
    data.forEach(x => {
        if (answer) return;
        data.forEach(y => {
            if (answer) return;
            if (x + y === 2020) {
                answer = x * y;
            }
        })
    })
    console.timeEnd('day 1, part 1 performance');
    return answer;
}

module.exports = part1;