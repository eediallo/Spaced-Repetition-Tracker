import { getUserIds } from "./storage.js";

describe("getUserIds", () => {
  test("Return value should be an array", () => {
    expect(Array.isArray(getUserIds())).toBe(true);
  });

  test("Should not be empty", () => {
    expect(getUserIds().length > 0).toBe(true);
  });

  test("Should have exactly 5 ids", () => {
    expect(getUserIds().length === 5).toBe(true);
  });

  test("Ids should be of type string", () => {
    getUserIds().forEach((id) => {
      expect(typeof id === "string").toBe(true);
    });
  });
});
