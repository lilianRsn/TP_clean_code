import { describe, expect, it } from "vitest";
import { analyserLancer, calculerScore } from "./index.js";

describe("Doit retourner le nom de la figure détectée", () => {
    it("Doit retourner la figure détectée", () => {
        const lancers = [
            [3, 3, 3, 2, 5],       // Brelan
            [6, 6, 6, 6, 2],       // Carré
            [5, 5, 5, 5, 5],       // YAMS
            [1, 2, 3, 4, 5],       // Grande suite
            [1, 2, 3, 5, 6],       // Chance
            [4, 4, 4, 1, 2],       // Brelan
        ];
        expect(analyserLancer(lancers)).toStrictEqual(["Brelan", "Carré", "YAMS", "Grande suite", "Chance", "Brelan"]);
    });
});

describe("Doit calculer le score des figures détectées", () => {
    it("Doit retourner le score des figures détectées", () => {
        const figures = [
            "Full",  // Full
            "Carré",  // Carré
            "Grande suite",  // Grande suite
        ];
        expect(calculerScore(figures)).toBe(105);
    });
});