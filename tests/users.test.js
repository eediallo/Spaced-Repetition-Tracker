import { users_data } from "../data/data.js";

describe("users_data", () => {
  test("Should not be empty", () => {
    const currentInput = users_data.length > 0;
    const targetInput = true;

    expect(currentInput).toBe(targetInput);
  });

  test("Should have exactly 5 users", () => {
    const currentInput = users_data.length === 5;
    const targetInput = true;

    expect(currentInput).toBe(targetInput);
  });

  test("Each user should have an id", () => {
    users_data.forEach((user) => {
      expect(user).toHaveProperty("id");
    });
  });

  test("Each user should have a name", () => {
    users_data.forEach((user) => {
      expect(user).toHaveProperty("name");
    });
  });

  test("Each user should have a unique id", () => {
    const ids = users_data.map((user) => user.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
