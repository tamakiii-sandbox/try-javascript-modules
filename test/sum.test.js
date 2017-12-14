const sum = require('../dist/sum')

test('adds 1 + 3 equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
