let img
let cnv
function preload() {
  img = loadImage('img.jpg')
}
function setup() {
  cnv = createCanvas(img.width, img.height)
  let newCanvasX = (windowWidth - img.width) / 2
  let newCanvasY = (windowHeight - img.height) / 2
  cnv.position(newCanvasX, newCanvasY)
  //access the pixels
  for (let col = 0; col < img.width; col += 5) {
    for (let row = 0; row < img.height; row += 5) {
      let c = img.get(col, row)
      stroke(color(c))
      strokeWeight(5)
      point(col, row)
      // rect(col,row,10,5)
    }
  }
}

// function draw() {
//   background(220)
// }
