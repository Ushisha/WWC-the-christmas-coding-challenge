function setup() {
  createCanvas(720, 720)
  background(255)
  noStroke()
}

function draw() {
  background(255)
  from = color(255, 0, 0, 0.2 * 255)
  to = color(0, 0, 255, 0.2 * 255)
  c1 = lerpColor(from, to, 0.33)
  c2 = lerpColor(from, to, 0.66)
  for (let i = 0; i < 15; i++) {
    fill(from)
    ellipse(
      random(-40, 220),
      random(height),
      random(-40, 220),
      random(height),
      random(-40, 220),
      random(height),
      random(-40, 220),
      random(height)
    )
    fill(c1)
    arc(
      random(140, 380),
      random(height),
      random(140, 380),
      random(height),
      random(140, 380),
      random(height),
      random(140, 380),
      random(height)
    )
    fill(c2)
    quad(
      random(320, 580),
      random(height),
      random(320, 580),
      random(height),
      random(320, 580),
      random(height),
      random(320, 580),
      random(height)
    )
    fill(to)
    quad(
      random(500, 760),
      random(height),
      random(500, 760),
      random(height),
      random(500, 760),
      random(height),
      random(500, 760),
      random(height)
    )
  }
  frameRate(3)
}
