describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll se ejecuta antes de todas las pruebas');
  });
  afterAll(() => {
    console.log('afterAll se ejecuta luego de todas las pruebas');
  });

  beforeEach(() => {
    console.log('Se ejecuta antes de cada prueba existente');
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 1).toBe(2);
  });
});
