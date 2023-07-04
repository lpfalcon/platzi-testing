// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  expect(data).toEqual({ name: 'nico' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true); // COMPARAR BOLEEANS
  expect(0).toBeFalsy(); // 0 IS FALSE
  expect('').toBeFalsy(); // '' IS FALSE
});

test('STRING', () => {
  expect('LAURA FALCON').toMatch(/aura/i); // COMPARAR STRINGS
});

test('LIST / ARRAYS', () => {
  const data = [1, 2, 3];
  expect(data).toContain(3); // COMPARAR STRINGS
});
