const createRover = require('../src/rover.js');

test('should create rover with position and direction', () => {
  const rover = createRover([0, 0], 'N');
  expect(rover.position).toEqual([0, 0]);
  expect(rover.direction).toBe('N');
});

test('loction slightly different', () => {
 const rover = createRover([0, 0], 'N');
 expect(rover.position).toEqual([2, 1]);
 expect(rover.direction).toBe('E');
})