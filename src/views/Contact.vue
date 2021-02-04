<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__blockLeft">
        <div class="contact__border-futura anim-border-left" />
        <div class="contact__texts">
          <h2>Des questions ?</h2>
          <h1>Contact :</h1>
          <div class="contact__infos">
            <p>maud.zellner@gmail.com</p>
            <p>06 31 18 10 14</p>
          </div>
        </div>
      </div>
      <canvas id="threeContact"></canvas>
    </div>
  </div>
</template>

<script>
import Scene from "@/classes/Scene.js";
import Gltf from "@/classes/Gltf.js";

export default {
  name: "Contact",
  data: function () {
    return {
      scene: null,
      robot: null
    }
  },
  mounted() {
    this.scene = new Scene(document.getElementById("threeContact"), { x: -0.5, y: 8, z: 15 }, 2.5, 1.5, 1.5, 3, false, 1150);
    this.robot = new Gltf(this.scene, "src/gltf/robot_v003.glb", true, 1, this.callbackRobot.bind(this));
  },
  beforeUnmount() {
    this.robot.stopAnimate();
    this.scene.stopAnimate();
  },
  methods: {
    callbackRobot() {
      this.robot.playAnimation("hello");
      this.robot.firstGltfChild.rotation.y = -0.3;
    },
  }
}
</script>

<style lang="scss" scoped>
#threeContact {
  position: absolute;
  z-index: 0;
  top: 140px;
  right: 15%;
  @include breakpoint(1150) {
    position: relative;
    right: 0%;
    top: 0px;
  }
}
.contact {
  &__container {
    @include breakpoint(1150) {
      width: 100%;
      @include flex(column, center, center);
    }
  }
  &__border-futura {
    @include border-futura-left(120px, 150px);
  }
  &__blockLeft {
    margin-left: 25%;
    margin-top: 150px;
    @include breakpoint(1150) {
      margin-top: 60px;
      margin-left: 0%;
    }
  }
  &__texts {
    font-family: $police-logo;
    text-transform: uppercase;
    margin-left: 30px;
    padding-top: 15px;
    h2 {
      font-weight: normal;
      font-size: 20px;
    }
    h1 {
      font-size: 22px;
      margin-top: 30px;
    }
    p {
      font-size: 20px;
      margin: 5px 0px;
    }
    @include breakpoint(1150) {
      h2 {
        font-size: 15px;
      }
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}
</style>