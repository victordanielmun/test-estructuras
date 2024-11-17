const {
  totalBirdCount,
  birdsInWeek,
  timeToMixJuice,
  remainingOrders,
} = require("../src/loops");

test("Total bird count", () => {
  expect(totalBirdCount([2, 4, 5, 3, 5, 7, 6])).toBe(32);
});

test("Birds on week test 1", () => {
  expect(
    birdsInWeek([2, 4, 3, 5, 7, 6, 3, 5, 3, 7, 3, 1, 5, 8, 7, 4, 2, 3], 1)
  ).toBe(30);
});

test("Birds on week test 2", () => {
  expect(
    birdsInWeek([2, 4, 3, 5, 7, 6, 3, 5, 3, 7, 3, 1, 5, 8, 7, 4, 2, 3], 2)
  ).toBe(32);
});

test("Time to mix juice test", () => {
  expect(timeToMixJuice("Pure Strawberry Joy")).toBe(0.5);
});

test("Remaining orders test", () => {
  expect(
    remainingOrders(
      ["Pure Strawberry Joy", "Tropical Island", "Energizer", "Green Garden"],
      3
    )
  ).toBe(["Energizer", "Green Garden"]);
});
