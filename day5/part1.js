getPosition = (str, type = "row") => [...str].reduce((accumulator, char) => {
    const [a, b] = accumulator;
    const half = (b + 1 - a) / 2;

    return [
        ['B', 'R'].includes(char) ? a + half : a,
        ['F', 'L'].includes(char) ? b - half : b
    ]
}, [0, (type === "column") ? 7 : 127]);

function part1(data) {
    return data.reduce((accumulator, pass) => {
        const row = getPosition(pass.substring(0, 7), "row")[0];
        const column = getPosition(pass.substring(7, 10), "column")[0];
        const ID = row * 8 + column;
        return (ID > accumulator) ? ID : accumulator;
    }, 0)
}

module.exports = {
    part1,
    getPosition
};