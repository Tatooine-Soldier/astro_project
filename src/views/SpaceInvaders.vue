<template>
    <section>
        <section class="game-title">
            <b>Space Invaders</b>
        </section>
        <section>
            <section class="game-display">
                <section>
                    Controls:
                    <ul>
                        <li>Move Left:  &lt;</li>
                        <li>Move Right:  &gt;</li>
                        <li>Move Up:  ^</li>
                        <li>Move Down:  &darr;</li>
                    </ul>

                    <section class="score-container">
                        Score: <i id="score"></i>
                    </section>
                    
                </section>
                <section class="canvas-container">
                    <canvas ref="gamecanvas" style="width:75%; height:100%;" ></canvas>
                </section>
            </section>
        </section>
    </section>
</template>

<style>
    canvas {
        border: solid 1px var(--primary-light);
        background-color: black;
    }

    .game-display {
        display: grid;
        grid-template-columns: 25% 75%;
        padding: 1%;
    }

    .canvas-container {
        display: flex;
        justify-content: center;
        padding: 1%;
    }

    .game-title {
        padding: 1%;
        font-size: 1.5em;;
        display: flex;
        justify-content: center;
    }

    .game-title b {
        text-decoration: underline;
    }

    .score-container {
        background-color: #706e6e;
        border: white solid 1px;
        padding: 4%;
        font-size: large;
        width: 40%;;
    }
</style>

<script>
export default {
  data() {
    return {
        rocketSpeed: 5,
        score: true
    }
  },
  mounted() {
    this.startGame();
  },
  methods: {
    startGame() {
      const canvas = this.$refs.gamecanvas;
      const context = canvas.getContext("2d");

      let playerX = 10;
      let playerY = 100;
      let playerWidth = 10;
      let playerHeight = 30;

      let rocketCounter = 0
      let canvasHeight = 145
      let canvasWidth = 300
      let looping = true

      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Original blue block
        // context.fillStyle = "blue";
        // context.fillRect(playerX, playerY, 20, 20);

        //main body of rocket
        context.beginPath();
        context.moveTo(playerX, playerY);
        context.lineTo(playerX + playerWidth, playerY);
        context.lineTo(playerX + playerWidth / 2, playerY - playerHeight);
        context.closePath();
        context.fillStyle = "blue";
        context.fill();

        //left wing
        context.beginPath();
        context.moveTo(playerX-5, playerY+10);
        context.lineTo(playerX, playerY);
        context.lineTo(playerX+6, playerY);
        context.closePath();
        context.fillStyle = "red";
        context.fill();

        //right wing
        context.beginPath();
        context.moveTo(playerX+playerWidth+5, playerY+10);
        context.lineTo(playerX+playerWidth+1, playerY);
        context.lineTo(playerX+5, playerY);
        context.closePath();
        context.fillStyle = "red";
        context.fill();

    
        context.fillStyle = "green";
        context.fillRect(100, 0, 15, 10); 

        // setTimeout(() => {
        //     drawTargets();
        // }, 1000)
        //drawTargets()
         
      } 

    

      function getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
      }

      function drawTargets() {
        let targetX = getRandomNumber(0, canvasWidth-10)
        context.fillStyle = "green";
        context.fillRect(targetX, 0, 15, 10);    
      }

      

      function movePlayer(direction) {
        switch (direction) {
            case "left":
                playerX -= 5
                break;
            case "right":
                playerX += 5
                break;
            case "up":
                playerY -= 10 
                break;   
            case "down":
                playerY += 10 
                break;            
        }
      }

      let score = 0

      function shoot(speed) {
        let rocketX = playerX
        let rocketY = playerY

        function updateShoot() {
            rocketY -= speed
            rocketX = playerX

            if (rocketY < 0) {
                rocketY = playerY
            }

            var result = checkCollision(rocketX, rocketY, 85, 110, 0, 15)
            if (result) {
                score += 1
            }
            var s = document.getElementById("score")
            s.innerHTML = score
        }

        function drawBlock() {
            context.fillStyle = "red";
            context.fillRect(rocketX+3, rocketY-20, 5, 5);
        }

        function shootLoop() {
            updateShoot();
            drawBlock();
            requestAnimationFrame(shootLoop)
        }

        shootLoop();
      }

      function checkCollision(rX, rY, targetLeft, targetRight, targetTop, targetBottom) {
       
        if (targetLeft < rX) {
            if (rX < targetRight) {
                if (rY > targetTop) {
                    if (rY < targetBottom) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            }  else {
                return false
            }  
            
        } else {
            return false
        }
      }

      function gameLoop(cont) {
        if (cont) {
            render();
            requestAnimationFrame(gameLoop);
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            console.log("eneded")

        }
      }

      if (this.score) {
        gameLoop(true);
      } else if (this.score === false) {
        gameLoop(false);
      }
      

      function endGame() {
        console.log("end")
        gameLoop(false)
      }

      let speed = this.rocketSpeed
      document.addEventListener("keydown", function(event) {
            if (event.key === "ArrowLeft") {
                movePlayer("left");
            } else if (event.key === "ArrowRight") {
                movePlayer("right");
            } else if (event.key === "ArrowUp") {
                movePlayer("up")
            } else if (event.key === "ArrowDown") {
                movePlayer("down")
            } else if (event.key === " ") {
                if (rocketCounter < 6) {
                    shoot(speed)
                    rocketCounter += 1
                }
            } else if (event.key === "x") {
                this.score = false;
            }
      });
    },
    endGame() {
        this.score = false;
    }
  },
};





</script>