function part1(data) {
    const getColor = colorWithAmount => colorWithAmount.replace(/[0-9] /g, "");

    const outerBagsWithShinyGoldBag = data.reduce((accumulator, bag) => {
        function recurse(holdingBagColor) {
            accumulator.push(holdingBagColor);

            const holdingBags = data.filter(bag => bag.holds.some(item => getColor(item) === holdingBagColor));
            if (holdingBags.length) {
                holdingBags.forEach(holdingBag => recurse(holdingBag.color))
            }
        }

        if (bag.holds.some(item => getColor(item) === "shiny gold")) {
            recurse(bag.color);
        }

        return accumulator;
    }, []);

    return new Set(outerBagsWithShinyGoldBag).size;
}

module.exports = part1;