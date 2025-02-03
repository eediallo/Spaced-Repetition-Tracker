import { users_data } from "./data.js";

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
});
