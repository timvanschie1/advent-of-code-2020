function part1(data) {
    const dataCopy = data.map(row => [...row]);
    const history = [dataCopy];
    const getStateString = stateArray => stateArray ? stateArray.map(row => row.toString()).toString() : "";

    function stateIsStabilized() {
        const prevStateString = getStateString(history[history.length - 2]);
        const currentStateString = getStateString(history[history.length - 1]);
        return prevStateString === currentStateString;
    }

    function needsToBecomeEmpty(surroundingRows, i) {
        let occupiedSeats = 0;
        surroundingRows.forEach((row, ri) => {
            if (!row) return;
            if (row[i - 1] === "#") occupiedSeats += 1;
            if (row[i] === "#" && ri !== 1) occupiedSeats += 1;
            if (row[i + 1] === "#") occupiedSeats += 1;
        })
        return occupiedSeats > 3;
    }

    function needsToBecomeOccupied(surroundingRows, i) {
        const noSeatsAreOccupied = row => (row[i - 1] !== "#") && (row[i] !== "#") && (row[i + 1] !== "#");
        return surroundingRows.filter(row => !row || noSeatsAreOccupied(row)).length === 3;
    }

    function getNewSeatState(seat, stateCopy, rowIndex, seatIndex) {
        if (seat === ".") return seat;
        const surroundingRows = [stateCopy[rowIndex - 1], stateCopy[rowIndex], stateCopy[rowIndex + 1]];
        if (seat === "L") return needsToBecomeOccupied(surroundingRows, seatIndex) ? "#" : "L";
        return needsToBecomeEmpty(surroundingRows, seatIndex) ? "L" : "#";
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

module.exports = part1;