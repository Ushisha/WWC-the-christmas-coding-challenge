let img
let theta = 0

function setup() {
  createCanvas(720, 720, WEBGL)
  img = loadImage('./image.jpg')
  vid = createVideo(['assets/360video_256crop_v2.mp4'])
  vid.elt.muted = true
  vid.loop()
  vid.hide()
}

function draw() {
  background(250)
  translate(-100, 0, 0)
  push()
  rotateZ(theta * mouseX * 0.001)
  rotateX(theta * mouseX * 0.001)
  rotateY(theta * mouseX * 0.001)
  //pass image as texture
  texture(img)
  sphere(150)
  pop()

  theta += 0.05
}
