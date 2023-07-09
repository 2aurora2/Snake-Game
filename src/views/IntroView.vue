<template>
  <div id="main">
    <h2>游戏规则</h2>
    <p>1. 方向键 ↑ 、↓ 、← 、→控制蛇移动的方向</p>
    <p>2. 空格键暂停，按下方向键继续移动</p>
    <p>3. 蛇头触碰到身体或墙壁会死亡，游戏结束</p>
    <p>4. 每吃到一个食物积一分，到达一定分数level提升，蛇移动速度加快</p>
    <p>5. 按F5游戏将重新开始</p>
  </div>
</template>

<script>
export default {
  name: "IntroView"
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Times New Roman", "sans-serif";
  font-size: large;
}

#main {
  width: 400px;
  height: 400px;
  background-color: @game-color;
  margin: 100px auto;
  border: 8px solid black;
  border-radius: 35px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  overflow: hidden;

  h2 {
    margin: 10px auto;
    background-color: @game-color;
  }

  p {
    background-color: @game-color;
    padding: 15px;
  }
}

</style>
