import test from 'node:test';
import assert from 'node:assert/strict';

test('轮换在五秒时前进，暂停保留阅读进度，手动切换重置进度', async () => {
  let RotationClock;
  try { ({ RotationClock } = await import('../src/rotation.js')); } catch {}
  assert.equal(typeof RotationClock, 'function', '需要可暂停的轮换计时器');
  const clock = new RotationClock(4, 5000);
  clock.advance(2500);
  assert.equal(clock.progress, 0.5);
  clock.pause('hover');
  clock.advance(8000);
  assert.equal(clock.index, 0);
  assert.equal(clock.progress, 0.5);
  clock.pause('focus');
  clock.resume('hover');
  clock.advance(5000);
  assert.equal(clock.progress, 0.5);
  clock.resume('focus');
  clock.advance(2500);
  assert.equal(clock.index, 1);
  assert.equal(clock.progress, 0);
  clock.select(3);
  clock.advance(5000);
  assert.equal(clock.index, 0);
  clock.advance(3000);
  clock.select(2);
  assert.equal(clock.index, 2);
  assert.equal(clock.progress, 0);
});
