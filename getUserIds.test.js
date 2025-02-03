import { getUserIds } from "./storage.js";

describe("getUserIds", () => {
  test("Should not be empty", () => {
    expect(getUserIds().length > 0).toBe(true);
  });

  test("Should have exactly 5 ids", () => {
    expect(getUserIds().length === 5).toBe(true);
  });
});
