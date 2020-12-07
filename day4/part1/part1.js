function part1(data) {
    const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    return data.filter(passPort => {
        return requiredFields.every(reqField => {
            return passPort.hasOwnProperty(reqField)
        })
    }).length;
}

module.exports = part1;