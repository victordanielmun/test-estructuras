const {
  needsLicense,
  chooseVehicle,
  calculateResellPrice,
} = require("../src/condicionales");

test("Need a license test 1", () => {
  expect(needsLicense("car")).toBe(true);
});

test("Need a license test 2", () => {
  expect(needsLicense("truck")).toBe(true);
});

test("Need a license test 3", () => {
  expect(needsLicense("motorcycle")).toBe(false);
});

test("choose vehicle test 1", () => {
  expect(chooseVehicle("mazda", "ford")).toBe("ford is the best choice");
});

test("choose vehicle test 2", () => {
  expect(chooseVehicle("mazda", "mazda")).toBe(
    "they are the same kind of vehicle"
  );
});

test("choose vehicle test 3", () => {
  expect(chooseVehicle("chevrolet", "ford")).toBe(
    "chevrolet is the best choice"
  );
});

test("calculate resell price test 1", () => {
  expect(calculateResellPrice(1000, 5)).toBe(700);
});

test("calculate resell price test 2", () => {
  expect(calculateResellPrice(1000, 10)).toBe(500);
});

test("calculate resell price test 3", () => {
  expect(calculateResellPrice(1000, 2)).toBe(800);
});
