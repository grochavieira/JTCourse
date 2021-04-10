describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(11);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).toBeNull();

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Guilherme', age: 18 };
    const anotherPerson = { ...person };

    expect(person).toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 18);

    expect(person.name).toBe('Guilherme');
  });
});
