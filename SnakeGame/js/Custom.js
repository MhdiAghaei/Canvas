let Ground = document.getElementById("myCanvas");
let ctx = Ground.getContext("2d");

let scale = 10;

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = scale;
  this.yspeed = 0;
  this.tail = [];
  this.total = 0;
  this.snakeDraw = function () {
    ctx.fillStyle = "black";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillRect(this.x, this.y, scale, scale);
  };
  this.snakeMove = function () {
    if (this.x >= 400 || this.x < 0 || this.y < 0 || this.y >= 400) {
      if (this.x >= 400 || this.x < 0) {
        if (this.x >= 400) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = 390;
        }
      } else if (this.y < 0 || this.y >= 400) {
        if (this.y >= 400) {
          this.y = 0;
        } else if (this.y < 0) {
          this.y = 390;
        }
      }
    } else {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      this.tail[this.total - 1] = { x: this.x, y: this.y };
      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  };
  this.snakeControl = function (userDirection) {
    switch (userDirection) {
      case "Up": {
        this.xspeed = 0;
        this.yspeed = -scale;
        break;
      }
      case "Down": {
        this.xspeed = 0;
        this.yspeed = scale;
        break;
      }
      case "Right": {
        this.xspeed = scale;
        this.yspeed = 0;
        break;
      }
      case "Left": {
        this.xspeed = -scale;
        this.yspeed = 0;
        break;
      }
    }
  };
  this.Winner = function () {
    if (this.total === 160000) {
      document.getElementById(
        "app"
      ).innerText = `Your Score Is: ${this.total} AND Congratulation YOU ARE WINNER`;
    }
  };
}

function Food() {
  this.Randomx = 0;
  this.Randomy = 0;
  this.SetLocation = function () {
    this.Tempx = Math.floor(Math.random() * (390 - 0 + 1)) + 0;
    this.RonundedX = 10 - (this.Tempx % 10);
    this.Randomx = this.Tempx + this.RonundedX;
    this.Tempy = Math.floor(Math.random() * (390 - 0 + 1)) + 0;
    this.Ronundedy = 10 - (this.Tempy % 10);
    this.Randomy = this.Tempy + this.Ronundedy;
  };
  this.Draw = function () {
    ctx.fillStyle = "red";
    ctx.fillRect(this.Randomx, this.Randomy, scale, scale);
  };
}

window.addEventListener("load", () => {
  let food = new Food();
  let snake = new Snake();
  food.SetLocation();
  this.setInterval(function () {
    ctx.clearRect(0, 0, Ground.width, Ground.height);
    food.Draw();
    snake.snakeDraw();
    snake.snakeMove();
    snake.x;
    document.getElementsByClassName(
      "textBox"
    )[0].innerText = `Your Score Is:${snake.total}`;
    if (snake.x == food.Randomx && snake.y == food.Randomy) {
      console.log("بیا بخورش");
      food.SetLocation();
      snake.total += 1;
      console.log(snake.total);
    }
    snake.Winner();
  }, 100);
  window.addEventListener("keydown", (event) => {
    let userDirection = event.key.replace("Arrow", "");
    snake.snakeControl(userDirection);
  });
});
