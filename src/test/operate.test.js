import operate from '../logic/operate';

describe('Should test the operate function', () => {
  test('Should test + operation', () => {
    const a = 1;
    const b = 2;
    expect(operate(a, b, '+')).toEqual('3');
  });

  test('Should test - operation', () => {
    const a = 1;
    const b = 2;
    expect(operate(a, b, '-')).toEqual('-1');
  });

  test('Should test x operation', () => {
    const a = 5;
    const b = 2;
    expect(operate(a, b, 'x')).toEqual('10');
  });

  test('Should test ÷ operation', () => {
    const a = 6;
    const b = 1;
    expect(operate(a, b, '÷')).toEqual('6');
  });

  test('Should test ÷ operation', () => {
    const a = 5;
    const b = 3;
    expect(operate(a, b, '%')).toEqual('2');
  });
});
