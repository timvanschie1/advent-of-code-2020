function part1(data) {
    const yesAnswersPerGroup = data.map(group => new Set(
        group.reduce((acc, personAnswers) => acc.concat([...personAnswers]), [])
    ).size);

    return yesAnswersPerGroup.reduce((acc, yesAnswers) => acc + yesAnswers, 0);
}

module.exports = part1;