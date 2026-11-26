export class RotationClock {
  constructor(count, duration = 5000) {
    this.count = count;
    this.duration = duration;
    this.index = 0;
    this.elapsed = 0;
    this.reasons = new Set();
  }
  get progress() { return this.elapsed / this.duration; }
  get paused() { return this.reasons.size > 0; }
  advance(delta) {
    if (this.paused) return;
    this.elapsed += Math.max(0, delta);
    if (this.elapsed >= this.duration) {
      this.index = (this.index + Math.floor(this.elapsed / this.duration)) % this.count;
      this.elapsed %= this.duration;
    }
  }
  pause(reason) { this.reasons.add(reason); }
  resume(reason) { this.reasons.delete(reason); }
  select(index) {
    this.index = ((index % this.count) + this.count) % this.count;
    this.elapsed = 0;
  }
}
