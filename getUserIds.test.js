import { getUserIds } from "./storage.js";

describe("getUserIds", () => {
  test("Should not be empty", () => {
    expect(getUserIds().length > 0).toBe(true);
  });
});
