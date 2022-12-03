const particles = []

//only run once
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  const particleLength = Math.floor(window.innerWidth / 10)
  // console.log(particleLength)
  for (let i = 0; i < particleLength; i++) {
    particles.push(new Particle())
  }
}

function draw() {
  background(5, 16, 40)

  particles.forEach((p, index) => {
    p.update()
    p.draw()
    p.checkParticles(particles.slice(index))
  })
}
class Particle {
  constructor() {
    //position
    this.pos = createVector(random(width), random(height))
    //velocity
    this.vel = createVector(random(-1, 1), random(-2, 2))
    //size
    this.size = random(1, 10)
  }
  //update movement by adding velocity
  update() {
    this.pos.add(this.vel)
    this.edges()
    // if (this.size < 10) {
    //   this.size++
    // }
    // if (this.size === 10) {
    //   this.size = 1
    // }
  }
  //Draw single particle
  draw() {
    let r = random(255) // r is a random number between 0 - 255
    let g = random(255) // g is a random number betwen 100 - 200
    let b = random(255) // b is a random number between 0 - 100
    let a = random(200, 255) // a is a random number between 200 - 255
    noStroke()
    fill(r, g, b, a)
    // fill('rgba(255,255,255,0.5)')
    circle(this.pos.x, this.pos.y, this.size)
  }
  //Detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1
    }
  }
  //connect particles
  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
      if (d < 120) {
        stroke('rgba(255,255,255,0.3)')
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
      }
    })
  }
}
