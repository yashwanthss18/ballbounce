
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


canvas.width = 480;
canvas.height = 270;


const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speedX: 5,
  speedY: -5
};


const paddle = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 20,
  width: 100,
  height: 10
};


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(ball.x, ball.y, ball.radius, ball.radius);

  ctx.fillStyle = "blue";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}


function update() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;

 
  if (ball.y < 0 || ball.y + ball.radius > canvas.height) {
    ball.speedY *= -1;
  }


  if (ball.x + ball.radius >= paddle.x && ball.x <= paddle.x + paddle.width && ball.y + ball.radius >= paddle.y && ball.y <= paddle.y + paddle.height) {
    ball.speedX *= -1;
  }

 
  if (ball.y + ball.radius > canvas.height) {
 
  }
}

function gameLoop() {
  draw();
  update();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
