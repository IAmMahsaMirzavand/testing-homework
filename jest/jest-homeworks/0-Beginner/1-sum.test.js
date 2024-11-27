const simpleSum = require('./1-sum');

describe("simpleSum function", () => {
  test("should return the sum of two numbers", () => {
    expect(simpleSum(1, 2)).toBe(3);
    expect(simpleSum(-1, 5)).toBe(4);
    expect(simpleSum(0, 0)).toBe(0);
  });
});
