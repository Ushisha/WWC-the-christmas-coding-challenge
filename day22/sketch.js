let totalPts = 600
let steps = totalPts + 1

function setup() {
  createCanvas(720, 720)
  stroke(78, 251, 4)
  frameRate(5)
}

function draw() {
  background(0)
  let rand = 0
  for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand))
    rand += random(-5, 5)
  }
}
