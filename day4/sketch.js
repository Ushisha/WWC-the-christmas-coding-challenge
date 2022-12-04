function setup() {
  const size = min(windowWidth, windowHeight)
  createCanvas(size, size)
  colorMode(RGB, 1)
  noStroke()
}
const radius = Math.sqrt(0.5)
//irratiional number 1.618 golden ratio
const PHI = (1 + Math.sqrt(5)) / 2
const dotSize = 0.05
let t
const frames = 1000
function draw() {
  t = fract(frameCount / frames)

  scale(width, height)
  background(0)
  fill(1)

  const count = 1000 * t
  for (let i = 0; i < count; i++) {
    const f = i / count
    const a = i / PHI
    const dist = f * radius
    const x = 0.5 + cos(a * TWO_PI) * dist
    const y = 0.5 + sin(a * TWO_PI) * dist
    const r = f * dotSize
    circle(x, y, r)
  }
}
