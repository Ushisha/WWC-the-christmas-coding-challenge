function setup() {
  createCanvas(720, 720)
  angleMode(DEGREES)
  rectMode(RADIUS)
}

function draw() {
  background(10, 20, 30)
  noFill()

  translate(width / 2, height / 2)
  for (let i = 0; i < 200; i++) {
    push()
    rotate(sin(frameCount + i) * 100)

    let r = map(sin(frameCount), -1, 1, 50, 255)
    let g = map(cos(frameCount / 2), -1, 1, 50, 255)
    let b = map(sin(frameCount / 4), -1, 1, 50, 255)
    stroke(r, g, b)
    rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i)

    pop()
  }
}
