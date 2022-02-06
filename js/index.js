window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

const canvasWidth = 500
const canvasHeight = 700

let frames = 0

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const background = new Image()
background.src = "/images/road.png"

const car = new Image()
car.src = "/images/car.png"

let carX = 225
let carY = 500

const obstacles = []

class Obstacles {
  constructor(ctx, x, y, width, length){
    this.ctx = ctx
    this.x = x
    this.y = y
    this.width = width
    this.length = length

  }
  draw(){
    this.ctx.save()
    this.ctx.fillRect(this.x, this.y, this.width, this.length)
    this.ctx.restore()

  }
}



document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
        if(carX > 0) carX -= 5
          break;
      case 39:
        if(carX < canvasWidth-50) carX += 5
          break;

  }
});


function updateObstacles(){
  if(frames === 1 || frames % 90 === 0){
    let y = 0
    let length = 20
    let minWidth = 50
    let maxwidth = 150
    //let length = 20
    let width = Math.floor(Math.random() * (maxwidth - minWidth + 1) + minWidth);
    let x = Math.floor(Math.random() * 400) 
    obstacles.push(new Obstacles(ctx, x, y, width, length))

    }

    for (let i = 0; i < obstacles.length ; i++){
      console.log(obstacles[i].length)
      obstacles[i].draw()
      obstacles[i].y += 3
    }
  }


  function startGame() {
    frames += 1
    ctx.drawImage(background, 0,0, canvas.width, canvas.height)

    ctx.save()
    ctx.drawImage(car, carX, carY, 50, 75)
    ctx.restore()


    updateObstacles()

    requestAnimationFrame(startGame)

  }
};

