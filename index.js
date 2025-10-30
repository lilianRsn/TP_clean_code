export const analyserLancer = (lancers) => {
    const resultatsLancers = [];

    for (let i = 0; i < lancers.length; i++) {
        const LANCER = lancers[i];
        let countNbSimilaire = {};

        for (let j = 0; j < LANCER.length; j++) {
            const DE = LANCER[j];
            countNbSimilaire[DE] = (countNbSimilaire[DE] || 0) + 1;
        }

        const nombreOccurrencesDes = Object.values(countNbSimilaire);

        if (nombreOccurrencesDes.includes(3) && !nombreOccurrencesDes.includes(4) && !nombreOccurrencesDes.includes(5)) {
            resultatsLancers.push("Brelan");
        }
    }

    return resultatsLancers;
};
