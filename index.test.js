import { describe, expect, it } from "vitest";
import { analyserLancer, calculerScore } from "./index.js";

describe("Doit retourner le nom de la figure détectée", () => {
    it("Doit retourner la figure détectée", () => {
        const lancers = [
            [2, 2, 3, 3, 3],  // Full
            [6, 6, 6, 6, 2],  // Carré
            [6, 6, 6, 6, 6],  // YAMS
        ];
        expect(analyserLancer(lancers)).toStrictEqual(["Brelan", "Carré", "YAMS"]);
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