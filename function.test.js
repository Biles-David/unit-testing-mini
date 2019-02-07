const { returnTwo, greeting, add, multiply, divide, subtract } = require('./function');

test('expect 2', () => {
  expect(returnTwo()).toEqual(2)
});

test('greeting test', () => {
  expect(greeting('James')).toEqual("Hello, James.")
  expect(greeting('Jill')).toEqual("Hello, Jill.")
});

test('can Add', () => {
  expect(add(1,2)).toEqual(3)
  expect(add(5,9)).toEqual(14)
});

describe('Math functions', () => {
  test('can multiply', () => {
    expect(multiply(4,2)).toEqual(8);
    expect(multiply(5,10)).toEqual(50);
  });

  test('can divide', () => {
    expect(divide(4,2)).toEqual(2);
    expect(divide(60,2)).toEqual(30);  
  });

  test('can subtract', () => {
    expect(subtract(4,2)).toEqual(2);
    expect(subtract(10,9)).toEqual(1);  
  });
});