function part2(data) {
    const pos = {"x": 0, "y": 0};
    let waypointPos = {"x": 10, "y": 1};

    function handleRotation(direction, degrees) {
        if (degrees === 180) {
            waypointPos = {"x": -waypointPos.x, "y": -waypointPos.y};
            return;
        }

        if ((direction === "L" && degrees === 270) || (direction === "R" && degrees === 90)) {
            waypointPos = {"x": waypointPos.y, "y": -waypointPos.x};
            return;
        }

        waypointPos = {"x": -waypointPos.y, "y": waypointPos.x};
    }

    function moveToWaypoint(units) {
        pos.x = pos.x + units * waypointPos.x;
        pos.y = pos.y + units * waypointPos.y;
    }

    data.forEach(instruction => {
        const action = instruction.substring(0, 1);
        const units = Number(instruction.substring(1));

        if (action === "N") waypointPos.y = waypointPos.y + units;
        else if (action === "E") waypointPos.x = waypointPos.x + units;
        else if (action === "S") waypointPos.y = waypointPos.y - units;
        else if (action === "W") waypointPos.x = waypointPos.x - units;
        else if (action === "F") moveToWaypoint(units);
        else handleRotation(action, units);
    });

    return Math.abs(pos.x) + Math.abs(pos.y);
}

module.exports = part2;