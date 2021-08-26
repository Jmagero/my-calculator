import calculate from '../logic/calculate';

describe('Tests for calculate function when ', () => {
  test('Should return a null obj button is AC', () => {
    const obj = {};
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Should return a 0 obj when button is 0 && obj.next is 0', () => {
    expect(calculate({ total: null, next: '0', operation: null }, '0')).toStrictEqual({
      total: null,
      next: '0',
      operation: null,
    });
  });

  test('It concatenates the a number with the next value', () => {
    expect(calculate({ total: null, next: '4', operation: '+' }, '2')).toStrictEqual({
      total: null,
      next: '42',
      operation: '+',
    });
  });

  test('Update the next when there is no operation', () => {
    expect(calculate({ total: null, next: null, operation: '+' }, '2')).toStrictEqual({
      total: null,
      next: '2',
      operation: '+',
    });
  });
});
