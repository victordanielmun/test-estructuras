const {suma, resta} = require("../src/condicionales");

test('test suma', () => {
    expect(suma(1, 2)).toBe(3);
});

test('test suma recibe letras', () => {
    expect(suma("s", "a")).toBe(null);
});

test('test resta', () => {
    expect(resta(1, 2)).toBe(-1);
});