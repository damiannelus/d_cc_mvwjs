const number_cardinality = require('../notepad');

test('test 100', () => {
  expect(number_cardinality(100)).toBe('zero')
});

test('test 88', () => {
  
  expect(number_cardinality(88)).toBe('even')
});

test('test 88', () => {
  expect(number_cardinality(99)).toBe('odd')
});

test('test 155', () => {
  
  expect(number_cardinality(155)).toBe('five')
});