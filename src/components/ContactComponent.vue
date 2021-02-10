<template>
  <div class="contact__container">
    <div class="contact__blockLeft">
      <div :class="['contact__border-futura', { 'anim-border-left': !loader }]" />
      <div class="contact__texts">
        <h1>Contactez-moi :</h1>
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
import { mapActions, mapState } from 'vuex'

export default {
  name: "ContactComponent",
  data: function () {
    return {
      scene: null,
      robot: null
    }
  },
  computed: {
    ...mapState(['loader'])
  },
  created() {
    this.showLoader();
  },
  mounted() {
    this.scene = new Scene(document.getElementById("threeContact"), { x: -0.5, y: 8, z: 15 }, 2.5, 1.5, 1.5, 3, false, 1150);
    this.robot = new Gltf(this.scene, "src/gltf/robot_v003.glb", true, 1, this.callbackRobot.bind(this));
    this.$emit('get-robot', this.robot);
  },
  beforeUnmount() {
    this.robot.stopAnimate();
    this.scene.stopAnimate();
  },
  methods: {
    ...mapActions(['showLoader', 'hideLoader']),
    callbackRobot() {
      this.robot.playAnimation("hello");
      this.robot.firstGltfChild.scale.set(0.9, 0.9, 0.9);
      this.robot.firstGltfChild.position.y = 1;
      this.robot.firstGltfChild.rotation.y = -0.3;
      this.hideLoader();
    },
  }
}
</script>

<style lang="scss" scoped>
#threeContact {
  position: relative;
  z-index: 0;
}
.contact {
  &__container {
    width: 70%;
    @include flex(row, center, space-around);
    @include breakpoint(1150) {
      width: 100%;
      @include flex(column, center, center);
    }
  }
  &__border-futura {
    @include border-futura-left(120px, 150px);
  }
  &__blockLeft {
    margin-left: 15%;
    margin-top: 10px;
    @include breakpoint(1150) {
      margin-left: 0%;
    }
  }
  &__texts {
    font-family: $police-logo;
    text-transform: uppercase;
    margin-left: 30px;
    padding-top: 15px;
    h1 {
      font-size: 22px;
      margin-top: 20px;
    }
    p {
      font-size: 20px;
      margin: 5px 0px;
    }
    @include breakpoint(1150) {
      margin-left: 20px;
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