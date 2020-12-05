function part2(data) {
    console.time('day 1, part 2 performance');
    let answer;
    data.forEach(x => {
        if (answer) return;
        data.forEach(y => {
            if (answer) return;
            data.forEach(z => {
                if (answer) return;
                if (x + y + z === 2020) {
                    answer = x * y * z;
                }
            })
        })
    })
    console.timeEnd('day 1, part 2 performance');
    return answer;
}

module.exports = part2;