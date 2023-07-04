const Person = require('./06-person');
// AAA METHOD
describe('Test for Person', () => {
  let personObject; // ARRANGE

  beforeAll(() => {
    personObject = new Person('Jhon Doe', 0, 1.7);
  });
  test('should return down', () => {
    personObject.weight = 45; // ARRANGE
    // ACT
    const imc = personObject.calcIMC();
    // ASSERT
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    personObject.weight = 59; // ARRANGE
    // ACT
    const imc = personObject.calcIMC();
    // ASSERT
    expect(imc).toBe('normal');
  });
});
