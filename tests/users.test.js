import { USERS } from "../data/users.js";

describe("USERS", () => {
  test("Should not be empty", () => {
    const currentInput = USERS.length > 0;
    const targetInput = true;

    expect(currentInput).toBe(targetInput);
  });

  test("Should have exactly 5 users", () => {
    const currentInput = USERS.length === 5;
    const targetInput = true;

    expect(currentInput).toBe(targetInput);
  });

  test("Each user should have an id", () => {
    USERS.forEach((user) => {
      expect(user).toHaveProperty("id");
    });
  });

  test("Each user should have a name", () => {
    USERS.forEach((user) => {
      expect(user).toHaveProperty("name");
    });
  });

  test("Each user should have a unique id", () => {
    const ids = USERS.map((user) => user.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
