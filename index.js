export const analyserLancer = (lancers) => {
    const resultatsLancers = [];

    for (const LANCER of lancers) {
        const countNbSimilaire = {};
        for (const DE of LANCER) {
            countNbSimilaire[DE] = (countNbSimilaire[DE] || 0) + 1;
        }

        const nombreOccurrencesDes = Object.values(countNbSimilaire);
        const desUniques = Object.keys(countNbSimilaire).map(Number).sort((a, b) => a - b);

        if (nombreOccurrencesDes.includes(5)) {
            resultatsLancers.push("YAMS");
        } else if (nombreOccurrencesDes.includes(4)) {
            resultatsLancers.push("Carré");
        } else if (nombreOccurrencesDes.includes(3) && nombreOccurrencesDes.includes(2)) {
            resultatsLancers.push("Full");
        } else if (nombreOccurrencesDes.includes(3)) {
            resultatsLancers.push("Brelan");
        } else if (desUniques.length === 5 && desUniques[4] - desUniques[0] === 4) {
            resultatsLancers.push("Grande suite");
        } else {
            resultatsLancers.push("Chance");
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
