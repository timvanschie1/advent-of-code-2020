function part2(data) {
    const dataCopy = data.map(row => [...row]);
    const history = [dataCopy];
    const allDirections = ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"];
    const getStateString = stateArray => stateArray ? stateArray.map(row => row.toString()).toString() : "";

    function stateIsStabilized() {
        const prevStateString = getStateString(history[history.length - 2]);
        const currentStateString = getStateString(history[history.length - 1]);
        return prevStateString === currentStateString;
    }

    function getFirstSeatStateInDirection(state, ri, si, direction) {
        function setNewIndexes() {
            ri = ["↖", "↑", "↗"].includes(direction) ? ri - 1 : ri;
            ri = ["↙", "↓", "↘"].includes(direction) ? ri + 1 : ri;
            si = ["↖", "←", "↙"].includes(direction) ? si - 1 : si;
            si = ["↗", "→", "↘"].includes(direction) ? si + 1 : si;
        }

        setNewIndexes();
        let firstSeatState;
        while (!firstSeatState) {
            if (ri === -1 || ri === state.length || si === -1 || si === state[0].length) firstSeatState = "noSeat";
            else if (state[ri][si] === ".") setNewIndexes();
            else firstSeatState = state[ri][si];
        }
        return firstSeatState;
    }

    function needsToBecomeEmpty(state, ri, si) {
        return allDirections.filter(dir => {
            return getFirstSeatStateInDirection(state, ri, si, dir) === "#"
        }).length > 4;
    }

    function needsToBecomeOccupied(state, ri, si) {
        return allDirections.filter(dir => getFirstSeatStateInDirection(state, ri, si, dir) === "#").length === 0;
    }

    function getNewSeatState(seat, stateCopy, ri, si) {
        if (seat === ".") return seat;
        if (seat === "L") return needsToBecomeOccupied(stateCopy, ri, si) ? "#" : "L";
        return needsToBecomeEmpty(stateCopy, ri, si) ? "L" : "#";
    }

    while (!stateIsStabilized()) {
        const stateCopy = history[history.length - 1].map(row => [...row]);
        const newState = stateCopy.map((row, ri) => row.map((seat, si) => getNewSeatState(seat, stateCopy, ri, si)));
        history.push(newState);
    }

    return history[history.length - 1].reduce((acc, row) => {
        return acc + row.filter(seat => seat === "#").length
    }, 0);
}

module.exports = part2;