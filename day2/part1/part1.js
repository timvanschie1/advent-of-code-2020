function part1(data) {
    return data.filter(line => {
        const occurences = line[3].split(line[2]).length - 1;
        return occurences >= line[0] && occurences <= line[1];
    }).length;
}

module.exports = part1;