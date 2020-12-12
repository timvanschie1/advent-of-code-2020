function part2(data) {
    return data.reduce((accumulator, bag) => {
        function recurse(holdingBag, amountOfHoldingBags = 1) {
            if (!holdingBag.holds.length) return;

            holdingBag.holds.forEach(colorWithAmount => {
                const amount = colorWithAmount.replace(/\D/g, "");
                const color = colorWithAmount.replace(/[0-9] /g, "");
                const newHoldingBag = data.find(bag => bag.color === color);
                const newAmountOfHoldingBags = amountOfHoldingBags * Number(amount);
                accumulator = accumulator + newAmountOfHoldingBags;
                recurse(newHoldingBag, newAmountOfHoldingBags);
            })
        }

        if (bag.color === "shiny gold") {
            recurse(bag);
        }

        return accumulator;
    }, 0);
}

module.exports = part2;