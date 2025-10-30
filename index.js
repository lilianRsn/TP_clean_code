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
        }else if (nombreOccurrencesDes.includes(4) && !nombreOccurrencesDes.includes(5)) {
            resultatsLancers.push("Carré");
        }else if (nombreOccurrencesDes.includes(5)) {
            resultatsLancers.push("YAMS");
        }
    }

    return resultatsLancers;
};

export const calculerScore = (figures) => {
    let scoreTotal = 0;
    if (figures.includes("Brelan")) {
        scoreTotal += 28;
    }
    if (figures.includes("Full")) {
        scoreTotal += 30;
    }
    if (figures.includes("Carré")) {
        scoreTotal += 35;
    }
    if (figures.includes("Grande suite")) {
        scoreTotal += 40;
    }
    if (figures.includes("YAMS")) {
        scoreTotal += 50;
    }
    return scoreTotal;
};
