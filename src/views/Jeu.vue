<template>
  <div class="jeu">
    <button 
      id="buttonPlay"
      class="jeu__button" 
      :style="{ opacity: gameStarting ? 0 : 1, display: gameStart ? 'none' : 'block' }" 
      @click="onClickOnPlay">
      {{ $t("game.button") }} 
    </button>
    <MenuJeu
      :card="card"
      :robot="robot"
      :particules="particules"
      :door="door"
    />
    <TutoJeu />
    <PopUpJeuWin />
    <canvas id="threeJeu" :class="{'disableCanvas': disableCanvasJeu }"></canvas>
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
import Particules from "@/classes/Particules.js";
import { getRandom } from "@/utils/utils.js"
import { mapActions, mapState } from 'vuex'
import MenuJeu from "@/components/MenuJeu.vue";
import TutoJeu from "@/components/TutoJeu.vue";
import PopUpJeuWin from "@/components/PopUpJeuWin.vue";

export default {
  name: "Jeu",
  components: {
    MenuJeu,
    TutoJeu,
    PopUpJeuWin
  },
  data: function() {
    return {
      delayOfAnimationStart: 400,
      gameStarting: false,
      assetsToCollide: [],
      assetsToIntercept: [],
      canvas: null,
      moveRobot: null,
      doorPositionMinZ: -100
    }
  },
  computed: {
    ...mapState(['restartGame', 'disableCanvasJeu', 'win', 'gameStart'])
  },
  watch: {
    restartGame: function() {
      if (this.restartGame) {
        this.resetGame();
      }
    },
    win: function() {
      if (this.win) {
        this.toggleDisableCanvasJeu();
        this.resetEvent();
      }
    }
  },
  created() {
    this.showLoader();
  },
  mounted() {
    this.canvas = document.getElementById("threeJeu");

    this.scene = new SceneJeu(document.getElementById("threeJeu"), { x: 0, y: 8, z: 20 }, 1, 1, 1, 1, false, 1000);
    this.robot = new Robot(this.scene, "src/gltf/robot_v003.glb", true, 1, this.callbackRobotLoaded.bind(this));
    this.card = new ObjectJeu(this.scene, 'src/gltf/carte_v001.glb', false, 0, this.callbackCardLoaded.bind(this), 8);
    this.door = new Door(this.scene, 'src/gltf/door_v002.glb', true, 0, this.callBackDoorLoaded.bind(this), 15);

    this.assetsToCollide.push(this.door);
    this.assetsToIntercept.push(this.door, this.card);
  },
  beforeUnmount() {
    this.stopAnimate();
  },
  methods: {
    ...mapActions([
      'toggleHideButtonsMenu', 
      'showGrabTuto', 
      'toggleHideExplanation',
      'toggleDisableCanvasJeu',
      'toggleRestartGame',
      'hideWin',
      'toggleShowCatchArrowPossible',
      'toggleShowInventoryArrowPossible',
      'hideGrabTuto',
      'hideLoader',
      'showLoader',
      'toggleGameStart'
    ]),
    onClickOnPlay() {
      this.animCamOnFirstClick();
      this.gameStarting = true;
      setTimeout(() => {
        this.toggleGameStart();
        this.gameStarting = false;
        this.onceGameStart();
      }, this.delayOfAnimationStart);
    },
    animCamOnFirstClick(){
      new TWEEN.Tween(this.scene.cameraGroup.rotation).to({ x: MathUtils.degToRad(-20) }, this.delayOfAnimationStart).easing(TWEEN.Easing.Quadratic.Out).start()
      new TWEEN.Tween(this.scene.camera.position).to({ z: 35 }, this.delayOfAnimationStart).easing(TWEEN.Easing.Quadratic.Out).start()
    },
    callbackRobotLoaded() {
      this.hideLoader();
    },
    callbackCardLoaded() {
      const randomX = getRandom(-this.scene.numberOfPoint*10/2, this.scene.numberOfPoint*10/2 - 10);
      const randomZ = getRandom(this.doorPositionMinZ + 20, this.scene.numberOfLine*10/2 - 10);
      this.card.moveGltf(randomX, 0, randomZ);

      this.particules = new Particules(require('@/assets/sprites_textures/particule_blue.png'), this)
    },
    callBackDoorLoaded() {
      this.door.moveGltf(0, 0, this.doorPositionMinZ);
    },
    onceGameStart() {
      if(!this.moveRobot){
        this.moveRobot = new MoveRobot(this);
      }

      if (this.particules) {
        this.particules = new Particules(require('@/assets/sprites_textures/particule_blue.png'), this)
      }

      this.door.fadeInElmt(this.delayOfAnimationStart);
      this.card.fadeInElmt(this.delayOfAnimationStart);
      this.particules.fadeInElmt(this.delayOfAnimationStart);

      this.showGrabTuto();
      this.toggleHideButtonsMenu();
      this.toggleHideExplanation();
    },
    resetGame() {
      this.toggleGameStart();
      this.hideWin();
      this.resetStyle();
      this.robot.resetPosition();
      this.toggleRestartGame();
      this.resetEvent();
      this.scene.resetCamera();
      this.resetMeshElmts();
      this.toggleShowCatchArrowPossible();
      this.toggleShowInventoryArrowPossible();
    },
    resetEvent() {
      if (this.moveRobot) {
        this.moveRobot.move = false;
        this.moveRobot.removeEventToStopeRobot('mousemove', this.moveRobot.onMouseMoveBind);
        this.moveRobot.removeEventToStopeRobot('touchmove', this.moveRobot.onTouchMoveBind);
      }
    },
    resetStyle() {
      this.toggleHideButtonsMenu();
      this.hideGrabTuto();
    },
    resetMeshElmts(){
      this.particules.removeSprites();
      this.door.fadeOutElmt(this.delayOfAnimationStart);
      this.card.fadeOutElmt(this.delayOfAnimationStart);
      if(this.door.doorOpen){
          this.door.closeDoors();
      }
    },
    stopAnimate() {
      this.card.stopAnimate();
      this.door.stopAnimate();
      this.robot.stopAnimate();
      this.scene.stopAnimate();
      if (this.particules) {
        this.particules.stopAnimate();
      }
      if (this.moveRobot) {
        this.moveRobot.stopAnimate();
      }
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
  cursor: grab;
}

.disableCanvas {
  pointer-events: none;
  cursor: auto;
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
    z-index: 10;
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
