<template>
  <div class="Accueil">
    <div class="questions">
      <canvas id="threeAccueil"></canvas>
    </div>
  </div>
</template>

<script>
import Scene from "@/classes/Scene.js";
import Gltf from "@/classes/Gltf.js";

export default {
  name: 'Accueil',
  components: {
  },
  data: function() {
    return {
      scene: null,
      robot: null
    }
  },
  mounted() {
    this.scene = new Scene(document.getElementById("threeAccueil"), { x: -0.5, y: 6, z: 20 });
    this.robot = new Gltf(this.scene, "src/gltf/robot_v003.glb", true, this.playHelloAnimation.bind(this));
  },
  methods: {
    playHelloAnimation() {
      this.robot.playAnimation("hello");
    }
  }
}
</script>

<style lang="scss" scoped>
#threeAccueil {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
}
</style>
