function createRover(position, direction) {
  return {
    position: position,
    direction: direction,
  };
}

function turnRight(rover) {
  const directions = { N: "E", E: "S", S: "W", W: "N" };
  return {
    ...rover,
    direction: directions[rover.direction],
  };
}

module.exports = { createRover, turnRight };
