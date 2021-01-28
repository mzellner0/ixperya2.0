<template>
  <div class="contact">
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
    this.scene = new Scene(document.getElementById("threeContact"), { x: -0.5, y: 8, z: 15 }, 2.5, 1.5);
    this.robot = new Gltf(this.scene, "src/gltf/robot_v003.glb", true, this.callbackRobot.bind(this));
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
}
.contact {
  &__border-futura {
    @include border-futura-left(120px, 150px);
  }
  &__blockLeft {
    margin-left: 25%;
    margin-top: 150px;
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
  }
}
</style>