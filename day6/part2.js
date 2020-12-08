function part2(data) {
    const commonYesAnswersPerGroup = data.map(group => {
        const uniqueQuestionsWithYesAnswers = new Set(
            group.reduce((acc, personAnswers) => acc.concat([...personAnswers]), [])
        );

        return [...uniqueQuestionsWithYesAnswers].reduce((acc, question) => {
            const isCommonAnswer = group.filter(person => person.includes(question)).length === group.length;
            return isCommonAnswer ? acc + 1 : acc;
        }, 0);
    });

    return commonYesAnswersPerGroup.reduce((acc, yesAnswers) => acc + yesAnswers, 0);
}

module.exports = part2;