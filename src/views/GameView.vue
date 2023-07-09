<template>
  <div id="main">
    <div class="stage">
      <div id="snake">
        <div></div>
      </div>
      <div id="food">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="show">
      <div>
        SCORE:<span id="score">0</span>
      </div>
      <div>
        LEVEL:<span id="level">1</span>
      </div>
    </div>
  </div>
</template>


<script>
import game from '../modules/index'

export default {
  name: "GameView",
  data() {
    return {
      controller: game.GameControl,
    }
  },
  mounted() {
    this.controller = new game.GameControl();
  },
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
  height: 520px;
  background-color: @game-color;
  margin: 100px auto;
  border: 8px solid black;
  border-radius: 35px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;

  .stage {
    width: 360px;
    height: 380px;
    background-color: @game-color;
    border: 5px solid black;
    position: relative;

    #snake {
      background-color: @game-color;

      & > div {
        width: 10px;
        height: 10px;
        background-color: black;
        border: 1px solid @game-color;
        position: absolute;
        border-radius: 10px;
      }
    }

    #food {
      width: 10px;
      height: 10px;
      border: 1px solid @game-color;
      position: absolute;
      left: 40px;
      top: 100px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-content: space-between;

      & > div {
        width: 4px;
        height: 4px;
        background-color: black;
        transform: rotate(45deg);
        border-radius: 5px;
      }
    }
  }

  .show {
    background-color: @game-color;
    width: 350px;
    display: flex;
    justify-content: space-between;

    div {
      background-color: @game-color;

      span {
        background-color: @game-color;
      }
    }

  }
}
</style>
