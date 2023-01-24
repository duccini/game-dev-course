const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

// console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'shadow_dog.png'

const spriteWidth = 575; // 6876px / 12 column = 573
const spriteHeight = 523; // 5230px / 10 = 523

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  // drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

  ctx.drawImage(
    playerImage,
    0, 0, spriteWidth, spriteHeight, 
    0, 0, CANVAS_WIDTH, CANVAS_HEIGHT
  )

  requestAnimationFrame(animate)
}

animate()

