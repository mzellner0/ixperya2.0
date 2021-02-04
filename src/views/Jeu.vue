<template>
  <div class="jeu">
    <button 
      id="buttonPlay"
      class="jeu__button" 
      :style="{ opacity: gameStarting ? 0 : 1, display: gameStart ? 'none' : 'block' }" 
      @click="onClickOnPlay">
      PLAY
    </button>
    <canvas id="threeJeu"></canvas>
  </div>
</template>

<script>
import SceneJeu from "@/classes/SceneJeu.js";
import Robot from "@/classes/Robot.js";
import { MathUtils } from "three/src/math/MathUtils.js";
import TWEEN from '@tweenjs/tween.js';
import ObjectJeu from "@/classes/ObjectJeu.js";
import MoveRobot from "@/classes/MoveRobot.js";
import Door from "@/classes/Door.js";
import { getRandom } from "@/utils/utils.js"

export default {
  name: "Jeu",
  data: function() {
    return {
      delayOfAnimationStart: 400,
      gameStarting: false,
      gameStart: false,
      assetsToCollide: [],
      assetsToIntercept: [],
      canvas: null,
      moveRobot: null,
      doorPositionMinZ: -100
    }
  },
  mounted() {
    this.canvas = document.getElementById("threeJeu");

    this.scene = new SceneJeu(document.getElementById("threeJeu"), { x: 0, y: 8, z: 20 }, 1, 1, false);
    this.robot = new Robot(this.scene, "src/gltf/robot_v003.glb", true);
    this.card = new ObjectJeu(this.scene, 'src/gltf/carte_v001.glb', false, 1, this.callbackCardLoaded.bind(this));
    this.door = new Door(this.scene, 'src/gltf/door_v002.glb', true, 1, this.callBackDoorLoaded.bind(this));

    this.assetsToCollide.push(this.door);
    this.assetsToIntercept.push(this.door, this.card);
  },
  beforeUnmount() {
    this.card.stopAnimate();
    this.door.stopAnimate();
    this.robot.stopAnimate();
    this.scene.stopAnimate();
  },
  methods: {
    onClickOnPlay() {
      this.animCamOnFirstClick();
      this.gameStarting = true;
      setTimeout(() => {
        this.gameStart = true;
        this.gameStarting = false;
        this.moveRobot = new MoveRobot(this);
      }, this.delayOfAnimationStart);
    },
    animCamOnFirstClick(){
      new TWEEN.Tween(this.scene.cameraGroup.rotation).to({ x: MathUtils.degToRad(-20) }, this.delayOfAnimationStart).easing(TWEEN.Easing.Quadratic.Out).start()
      new TWEEN.Tween(this.scene.camera.position).to({ z: 35 }, this.delayOfAnimationStart).easing(TWEEN.Easing.Quadratic.Out).start()
    },
    callbackCardLoaded() {
      const randomX = getRandom(-this.scene.numberOfPoint*10/2, this.scene.numberOfPoint*10/2 - 10);
      const randomZ = getRandom(this.doorPositionMinZ + 20, this.scene.numberOfLine*10/2 - 10);
      this.card.moveGltf(randomX, 0, randomZ);
    },
    callBackDoorLoaded() {
      this.door.moveGltf(0, 0, this.doorPositionMinZ);
    }
  },
}
</script>

<style lang="scss" scoped>
#threeJeu {
  position: absolute;
  z-index: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
.jeu {
  &__button {
    position: absolute;
    top: 85vh;
    margin-left: 45%;
    width: 10%;
    background-color: white;
    padding-top: 15px;
    padding-bottom: 10px;
    border-radius: 40px;
    color: $color-header-dark;
    font-family: $police-logo;
    font-weight: 900;
    font-size: 20px;
    box-shadow: 0px 0px 8px #00000036;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 200ms;
    z-index: 1;
    @media (max-width: 1000px){
        margin-left: 35%;
        width: 30%;
    }
    &:hover{
        background-color: $color-header-dark;
        color: white;
        animation: waves 1000ms ease-in-out infinite;
    }
  }
}
</style>
