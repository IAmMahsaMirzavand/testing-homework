const isTruthyOrFalsy = require('./0-isTruthyOrFalsy');

describe("isTruthyOrFalsy function", () => {
  test("should return true for truthy values", () => {
    expect(isTruthyOrFalsy(true)).toBeTruthy();
    expect(isTruthyOrFalsy("hello")).toBeTruthy();
    expect(isTruthyOrFalsy(10)).toBeTruthy();
  });

  test("should return false for falsy values", () => {
    expect(isTruthyOrFalsy(false)).toBeFalsy();
    expect(isTruthyOrFalsy("")).toBeFalsy();
    expect(isTruthyOrFalsy(0)).toBeFalsy();
    expect(isTruthyOrFalsy(null)).toBeFalsy();
    expect(isTruthyOrFalsy(undefined)).toBeFalsy();
  });
});
