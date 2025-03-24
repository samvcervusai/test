const createRover = require("../src/rover.js");

test("should create rover with position and direction", () => {
  const rover = createRover([0, 0], "N");
  expect(rover.position).toEqual([0, 0]);
  expect(rover.direction).toBe("N");
});

test("should turn right from North to East", () => {
  const rover = createRover([0, 0], "N");
  const newRover = turnRight(rover);
  expect(newRover.direction).toBe("E");
  expect(newRover.position).toEqual([0, 0]);
});
