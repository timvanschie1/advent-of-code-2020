const validationChecks = {
    "byr": year => year.length === 4 && Number(year) >= 1920 && Number(year) <= 2002,
    "iyr": year => year.length === 4 && Number(year) >= 2010 && Number(year) <= 2020,
    "eyr": year => year.length === 4 && Number(year) >= 2020 && Number(year) <= 2030,
    "hgt": height => {
        const amount = Number(height.replace(/\D/g, ""));
        const unit = height.split(amount)[1];
        const isNumber = !isNaN(amount);
        const isValidUnit = unit === "cm" || unit === "in";
        const isCorrectAmount = unit === "cm"
            ? amount >= 150 && amount <= 193
            : amount >= 59 && amount <= 76;
        return isNumber && isValidUnit && isCorrectAmount;
    },
    "hcl": color => {
        const characters = color.split("#").length === 2 ? color.split("#")[1] : false
        const validCharacters = /^([a-z0-9])*$/.test(characters);
        return characters && characters.length === 6 && validCharacters
    },
    "ecl": color => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(color),
    "pid": id => id.length === 9 && !isNaN(Number(id))
}

function part2(data) {
    const reqFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    return data.filter(passPort => {
        return reqFields.every(field => passPort.hasOwnProperty(field) && validationChecks[field](passPort[field]))
    }).length;
}

module.exports = part2;