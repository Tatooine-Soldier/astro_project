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
                </section>
                <section class="canvas-container">
                    <canvas ref="gamecanvas" style="width:70%; height:100%;" ></canvas>
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
</style>

<script>
export default {
  mounted() {
    this.startGame();
  },
  methods: {
    startGame() {
      const canvas = this.$refs.gamecanvas;
      const context = canvas.getContext("2d");

      let playerX = 0;
      let playerY = 0;

      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "blue";
        context.fillRect(playerX, playerY, 20, 20);
       
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

      
      function shoot() {
        let rocketX = playerX
        let rocketY = playerY

        function updateShoot() {
            rocketY -= 5
            rocketX = playerX

            if (rocketY < 0) {
                rocketY = playerY
            }
        }

        function drawBlock() {
            context.fillStyle = "red";
            context.fillRect(rocketX+7, rocketY, 5, 5);
        }

        function shootLoop() {
            updateShoot();
            drawBlock();
            requestAnimationFrame(shootLoop)
        }

        shootLoop();
    }
 
      function gameLoop() {
        render();
        requestAnimationFrame(gameLoop);
      }

      gameLoop();

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
                shoot()
            }
      });
    },
  },
};





</script>