function part1(data) {
    const earliestTimeStamp = data[0];
    let shortestWaitingTime = null;
    let earliestBus = null;

    function getWaitingTimeForBus(id) {
        let time = 0;
        while (time < earliestTimeStamp) {
            time += id;
        }
        return time - earliestTimeStamp;
    }

    const busArray = data[1].split(",").filter(bus => bus !== "x");
    busArray.forEach(bus => {
        const waitingTime = getWaitingTimeForBus(Number(bus));
        if (waitingTime < shortestWaitingTime || !shortestWaitingTime) {
            shortestWaitingTime = waitingTime;
            earliestBus = bus;
        }
    })

    return shortestWaitingTime * earliestBus;
}

module.exports = part1;