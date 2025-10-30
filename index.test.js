import { describe, expect, it } from "vitest";
import { analyserLancer } from "./index.js";

describe("Doit retourner le nom de la figure détectée", () => {
    it("Doit retourner la figure détectée", () => {
        const lancers = [
            [2, 5, 3, 3, 3],  // Full
            [6, 6, 6, 6, 2],  // Carré
            [1, 2, 3, 4, 5],  // Grande suite
        ];
        expect(analyserLancer(lancers)).toStrictEqual(["Brelan", "Carré"]);
    });
});

describe("Doit calculer le score des figures détectées", () => {
    it("Doit retourner le score des figures détectées", () => {
        const lancers = [
            "Full",  // Full
            "Carré",  // Carré
            "Grande suite",  // Grande suite
        ];
        expect(analyserLancer(lancers)).toBe(69);
    });
});