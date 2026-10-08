import { describe, it, expect } from "vitest";
import { pets } from "./pets";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(pets.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'cat'", () => {
    expect(pets).toContain("cat");
  });
});
