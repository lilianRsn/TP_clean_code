import { describe, expect, it } from "vitest";

describe("Doit retourner le nom de la figure détectée", () => {
    it("Doit retourner la figure détectée", () => {
        const lancers = [
            [2, 2, 3, 3, 3],  // Full
            [6, 6, 6, 6, 2],  // Carré
            [1, 2, 3, 4, 5],  // Grande suite
        ];
        expect(analyserLancer(lancers)).toBe(0);
    });
});