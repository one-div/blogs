<template>
  <!-- 飞机大战 -->
  <div>
    <!-- 这是游戏的主要容器，包含了游戏中的所有元素，如玩家飞机、敌机和得分信息。 -->
    <div id="game-board">
      <!-- 这是表示玩家飞机的元素，玩家将控制它来躲避敌机的攻击并射击敌机。 -->
      <div id="player"></div>
      <!-- 开始游戏 -->
      <div class="Start-Game" v-show="Start_Game_btn_flag" @click="startGame()">开始游戏</div>
      <!-- 这是显示玩家得分的元素，初始值为 0，玩家击败敌机后，得分将实时更新并显示在这个元素中。 -->
      <div id="score">Score: 0</div>
    </div>
  </div>
  <!-- 
    #game-board：定义游戏板的样式，设置了宽度、高度和边框，并将其定位为相对位置，并通过margin: 0 auto;使其水平居中显示。
    #player：定义玩家飞机的样式，设置了宽度、高度和背景颜色。使用绝对定位，将其置于游戏板底部，并通过left: 50%; transform: translateX(-50%);使其水平居中显示。
    .bullet：定义子弹的样式，设置了宽度、高度和背景颜色。使用绝对定位，用于表示玩家飞机发射的子弹。
    .enemy：定义敌机的样式，设置了宽度、高度和背景颜色。使用绝对定位，用于表示敌机。
    #score：定义得分信息的样式，设置了字体大小和居中对齐。

    gameBoard：代表游戏板的 DOM 元素。
    player：代表玩家飞机的 DOM 元素。
    scoreElement：代表显示分数的 DOM 元素。
    bullets：用于存储子弹的数组。
    enemies：用于存储敌机的数组。
    score：表示当前的分数。
   -->
</template>

<script>
export default {
  data() {
    return {
      gameBoard: null,
      player: null,
      scoreElement: null,
      bullets: [],
      enemies: [],
      score: 0,
      Start_Game_btn_flag:true,
    }
  },
  mounted() {
    this.gameBoard = document.getElementById('game-board')
    this.player = document.getElementById('player')
    this.scoreElement = document.getElementById('score')
    document.addEventListener('keydown', (event)=> {
      if (event.code === 'ArrowLeft') {
        this.movePlayer('left')
      } else if (event.code === 'ArrowRight') {
        this.movePlayer('right')
      } else if (event.code === 'Space') {
        this.shoot()
      }
    })
    // this.startGame()
  },
  methods: {
    // 移动飞机
    movePlayer(direction) {
      let currentPosition = parseInt(this.player.style.left) || 0
      if (direction === 'left') {
        currentPosition -= 20
      } else if (direction === 'right') {
        currentPosition += 20
      }
      // 限制飞机移动范围在游戏板内
      currentPosition = Math.max(0, Math.min(currentPosition, this.gameBoard.offsetWidth - this.player.offsetWidth))
      this.player.style.left = currentPosition + 'px'
    },
    // 发射子弹
    shoot() {
      let bullet =document.createElement('div')
      bullet.className = 'bullet-xxx'
      bullet.style.left = parseInt(this.player.style.left) + this.player.offsetWidth / 2 - 2.5 + 'px'
      bullet.style.bottom = this.player.offsetHeight + 'px'
      this.gameBoard.appendChild(bullet)
      this.bullets.push(bullet)
    },
    // 移动子弹
    moveBullets() {
      this.bullets.forEach((bullet, bulletIndex) => {
        let currentPosition = parseInt(bullet.style.bottom) || 0
        currentPosition += 10
        if (currentPosition >= this.gameBoard.offsetHeight) {
          bullet.remove()
          this.bullets.splice(bulletIndex, 1)
        } else {
          bullet.style.bottom = currentPosition + 'px'
        }
      })
    },
    // 创建敌机
    createEnemy() {
      let enemy = document.createElement('div')
      enemy.className = 'enemy-xxx'
      enemy.style.left = Math.random() * (this.gameBoard.offsetWidth - 40) + 'px'
      enemy.style.top = '0px'
      this.gameBoard.appendChild(enemy)
      this.enemies.push(enemy)
      console.log(enemy,enemy.className);
    },
    // 敌机移动
    moveEnemies() {
      this.enemies.forEach((enemy, enemyIndex) => {
        let currentPosition = parseInt(enemy.style.top) || 0
        currentPosition += 5

        if (currentPosition >= this.gameBoard.offsetHeight) {
          enemy.remove()
          this.enemies.splice(enemyIndex, 1)
        } else {
          enemy.style.top = currentPosition + 'px'
        }
      })
    },
    // 检测到碰撞 子弹和敌军碰撞
    detectCollision() {
      this.bullets.forEach((bullet, bulletIndex) => {
        this.enemies.forEach((enemy, enemyIndex) => {
          if (
            bullet.offsetTop <= enemy.offsetTop + enemy.offsetHeight &&
            bullet.offsetTop + bullet.offsetHeight >= enemy.offsetTop &&
            bullet.offsetLeft <= enemy.offsetLeft + enemy.offsetWidth &&
            bullet.offsetLeft + bullet.offsetWidth >= enemy.offsetLeft
          ) {
            bullet.remove()
            this.bullets.splice(bulletIndex, 1)
            enemy.remove()
            this.enemies.splice(enemyIndex, 1)
            this.score += 10
            this.scoreElement.innerHTML = 'Score: ' + this.score
          }
        })
      })
    },
    // 游戏循环
    gameLoop() {
      this.moveBullets()
      this.moveEnemies()
      this.detectCollision()
    },
    // 开始游戏
    startGame() {
      this.Start_Game_btn_flag=false
      this.score = 0
      this.scoreElement.innerHTML = 'Score: ' + this.score
      this.player.style.left = (this.gameBoard.offsetWidth - this.player.offsetWidth) / 2 + 'px'
      this.bullets.forEach((bullet) => bullet.remove())
      this.bullets = []
      this.enemies.forEach((enemy) => enemy.remove())
      this.enemies = []
      setInterval(this.createEnemy, 1000)
      setInterval(this.gameLoop, 30)
    },
  },
}
</script>
<style lang='less'>
.bullet-xxx {
  width: 5px;
  height: 20px;
  background-color: black;
  position: absolute;
}
.enemy-xxx {
  width: 40px;
  height: 40px;
  background-color: blue;
  position: absolute;
}
</style>
<style lang='less' scoped>
/* CSS 样式 */
#game-board {
  width: 480px;
  height: 500px;
  border: 1px solid black;
  position: relative;
  margin: 0 auto;
}

#player {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.Start-Game{
  height: 32px;
  width: 64px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #4a7df5;
  &:hover{
    color:crimson;
  }
}
.enemy-xx {
  width: 40px;
  height: 40px;
  background-color: blue;
  position: absolute;
}
.bullet-xxx {
  width: 5px;
  height: 20px;
  background-color: black;
  position: absolute;
}

#score {
  font-size: 24px;
  text-align: center;
}
</style>