function part1(data) {
    let facingDegrees = 90;
    const movementInstructionsPerDegree = {90: ["x", "+"], 180: ["y", "-"], 270: ["x", "-"], 0: ["y", "+"]};
    const pos = {"x": 0, "y": 0};

    function getDirectionFromFacingDegrees() {
        let useFullDegrees;
        if (facingDegrees >= 360) {
            useFullDegrees = facingDegrees % 360;
        } else if (facingDegrees <= -360) {
            useFullDegrees = 360 - (Math.abs(facingDegrees) % 360)
        } else if (facingDegrees < 0) {
            useFullDegrees = 360 + facingDegrees
        } else {
            useFullDegrees = facingDegrees;
        }
        return movementInstructionsPerDegree[useFullDegrees === 360 ? 0 : useFullDegrees];
    }

    function moveForward(units) {
        const [axis, operator] = getDirectionFromFacingDegrees();
        pos[axis] = (operator === "+") ? pos[axis] + units : pos[axis] - units;
    }

    data.forEach(instruction => {
        const action = instruction.substring(0, 1);
        const units = Number(instruction.substring(1));

        if (action === "N") pos["y"] = pos["y"] + units;
        else if (action === "E") pos["x"] = pos["x"] + units;
        else if (action === "S") pos["y"] = pos["y"] - units;
        else if (action === "W") pos["x"] = pos["x"] - units;
        else if (action === "L") facingDegrees -= units;
        else if (action === "R") facingDegrees += units;
        else if (action === "F") moveForward(units);
    });

    return Math.abs(pos.x) + Math.abs(pos.y);
}

module.exports = part1;