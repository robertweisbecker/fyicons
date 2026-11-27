import assert from 'node:assert/strict';
import test from 'node:test';
import { wheelTravel } from '../../apps/site/src/prototypes/inspector/inspector-wheel.ts';

const heights = [96, 400, 790];

for (const sign of [1, -1]) {
  const origin = sign === 1 ? 0 : 2;
  const destination = 2 - origin;

  test(`wheel direction ${sign} follows distance and captures a decelerating tail`, () => {
    const start = heights[origin];
    const travel = wheelTravel(start, heights);
    assert.equal(travel.move(sign * 10, 16), start + sign * 10);
    const distance = Math.abs(400 - start) - 10;
    for (let i = 0; i < 8; i++) travel.move((sign * distance) / 8, 16);
    for (let delta = 26; delta > 0.1; delta *= 0.94)
      travel.move(sign * delta, 16);
    assert.equal(travel.target(), 1);
    // Fresh acceleration arrives before the wheel stream goes idle.
    for (const delta of [3, 7, 14, 26, 40]) travel.move(sign * delta, 16);
    assert.equal(travel.target(), destination);
  });

  test(`wheel direction ${sign} can pass medium in one sustained stroke`, () => {
    const travel = wheelTravel(heights[origin], heights);
    let position;
    for (let i = 0; i < 64; i++) position = travel.move(sign * 16, 16);
    assert.equal(position, heights[destination]);
    assert.equal(travel.target(), destination);
  });

  test(`wheel direction ${sign} catches a large crossing event followed by momentum`, () => {
    const travel = wheelTravel(400 - sign * 12, heights);
    travel.move(sign * 110, 16);
    for (let delta = 103; delta > 0.1; delta *= 0.94)
      travel.move(sign * delta, 16);
    assert.equal(travel.target(), 1);
  });

  test(`wheel direction ${sign} recognizes a slower sustained push after deceleration`, () => {
    const travel = wheelTravel(heights[origin], heights);
    const step = (400 - heights[origin]) / 8;
    for (let i = 0; i < 8; i++) travel.move(step, 16);
    for (const delta of [16, 12, 9, 7, 5]) travel.move(sign * delta, 16);
    assert.equal(travel.target(), 1);
    for (let i = 0; i < 30; i++) travel.move(sign * 5, 16);
    assert.equal(travel.target(), destination);
  });
}
test('reversing during a gesture immediately moves the presentation back', () => {
  const travel = wheelTravel(96, heights);
  assert.equal(travel.move(180, 16), 276);
  assert.equal(travel.move(-20, 16), 256);
  assert.equal(travel.target(), 0);
});
