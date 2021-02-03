module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  sum = countSteps(disksNumber);
  sec = Math.floor((sum / turnsSpeed) * 3600);
  return { turns: sum, seconds: sec };
};

function countSteps(x) {
  if (x == 1) {
    return 1;
  }
  return countSteps(x - 1) * 2 + 1;
}
// I found a regularity. Information below is "handmade".
// 1 disk  - 1 step
// 2 disks - 3 steps
// 3 disks - 7 steps
// 4 disks - 15 steps
// 5 disks - 31 steps

// One can see that the next generation have x+1 steps more, than previous one.
// You should move the largest disk (one step)
// and than put towel of previous generation on it (x steps) =>
// => next generation has 2*X+1 steps, where X - steps for previous tower.
// Recursion had been made.
