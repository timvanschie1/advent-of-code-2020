function part1(data) {
    const dataStrippedFromAmounts = data.map(bag => {
        bag.holds = bag.holds.map(color => color.replace(/[0-9] /g, ""));
        return bag;
    });
    
    const outerBagsWithShinyGoldBag = dataStrippedFromAmounts.reduce((accumulator, bag) => {
        function recurse(holdingBagColor) {
            accumulator.push(holdingBagColor);

            const holdingBags = data.filter(holdingBag => holdingBag.holds.includes(holdingBagColor));
            if (holdingBags.length) {
                holdingBags.forEach(holdingBag => recurse(holdingBag.color))
            }
        }

        if (bag.holds.includes("shiny gold")) {
            recurse(bag.color);
        }

        return accumulator;
    }, []);

    return new Set(outerBagsWithShinyGoldBag).size;
}

module.exports = part1;