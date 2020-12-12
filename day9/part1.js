function part1(data, preambleRange) {
    return data.find((number, i) => {
        if (i <= preambleRange) return false;
        const preamble = [...data].slice(i - preambleRange, i);
        return !preamble.some(preambleNr => {
            const remainder = number - preambleNr;
            return preamble.includes(remainder) && (remainder !== preambleNr);
        });
    });
}

module.exports = part1;