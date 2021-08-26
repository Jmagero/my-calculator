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

  test('Update the next when there is plus operation', () => {
    expect(calculate({ total: null, next: null, operation: '+' }, '2')).toStrictEqual({
      total: null,
      next: '2',
      operation: '+',
    });
  });

  test('Update the next when there is  % operation', () => {
    expect(calculate({ total: null, next: null, operation: '%' }, '2')).toStrictEqual({
      total: null,
      next: '2',
      operation: '%',
    });
  });

  test('Update the next when there is  times operation', () => {
    expect(calculate({ total: null, next: null, operation: 'x' }, '2')).toStrictEqual({
      total: null,
      next: '2',
      operation: 'x',
    });
  });

  test('Update the next when there is minus operation', () => {
    expect(calculate({ total: null, next: null, operation: '-' }, '5')).toStrictEqual({
      total: null,
      next: '5',
      operation: '-',
    });
  });

  test('Update the next when there is division operation', () => {
    expect(calculate({ total: null, next: null, operation: '÷' }, '5')).toStrictEqual({
      total: null,
      next: '5',
      operation: '÷',
    });
  });

  test('Adds and returns total', () => {
    const obj = {
      total: 2,
      next: 10,
      operation: '+',
    };
    expect(calculate(obj, '=')).toStrictEqual({ next: null, operation: null, total: '12' });
  });

  test('substracts and returns total', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '-',
    };
    expect(calculate(obj, '=')).toStrictEqual({ next: null, operation: null, total: '5' });
  });

  test('divides and returns total', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '÷',
    };
    expect(calculate(obj, '=')).toStrictEqual({ next: null, operation: null, total: '2' });
  });

  test('returns the modulas', () => {
    const obj = {
      total: 10,
      next: 3,
      operation: '%',
    };
    expect(calculate(obj, '=')).toStrictEqual({ next: null, operation: null, total: '1' });
  });
});
