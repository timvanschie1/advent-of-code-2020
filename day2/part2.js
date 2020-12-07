function part2(data) {
    return data.filter(line => {
        const isOnPos1 = line[3].charAt(line[0] - 1) === line[2];
        const isOnPos2 = line[3].charAt(line[1] - 1) === line[2];
        return isOnPos1 !== isOnPos2;
    }).length;
}

module.exports = part2;