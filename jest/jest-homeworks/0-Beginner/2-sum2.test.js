const sum = require('./2-sum2');

describe("sum function", () => {
  test("should return the sum of positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(10, 20)).toBe(30);
  });

  test("should return the sum of negative numbers", () => {
    expect(sum(-1, -3)).toBe(-4);
    expect(sum(-5, 2)).toBe(-3);
  });

  test("should throw an error for non-numeric inputs", () => {
    expect(() => sum("a", 2)).toThrow(TypeError);
    expect(() => sum("a", 2)).toThrow("Input must be numbers");
    expect(() => sum(null, 2)).toThrow(TypeError);
  });
});
