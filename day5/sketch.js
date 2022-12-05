let angle = 0
function setup() {
  createCanvas(720, 500, WEBGL)
}
//cone([radius], [height], [detailX], [detailY], [cap]
function draw() {
  background(0)

  for (let a = -25; a < TWO_PI; a += 5) {
    normalMaterial()
    translate(a + 50, 0)
    //going back and forth
    rotateZ(sin(angle))
    rotateZ(cos(angle))
    //draw cone with radius 30 and height 45
    cone(15, 30, 20, 2)
    angle += 0.0003
  }
  for (let a = -25; a < TWO_PI; a += 5) {
    normalMaterial()
    translate(a + 80, 0)
    //going back and forth
    rotateZ(sin(angle))
    rotateZ(cos(angle))
    //drellipsoid with radius 30 and height 45
    cone(15, 30, 20, 2)
    angle += 0.00003
  }
  for (let a = -25; a < TWO_PI; a += 2) {
    normalMaterial()
    translate(a + 110, 0)
    //going back and forth
    rotateZ(sin(angle))
    rotateZ(cos(angle))
    //draw cone with radius 30 and height 45
    cone(15, 30, 20, 2)
    angle += 0.00003
  }
}
