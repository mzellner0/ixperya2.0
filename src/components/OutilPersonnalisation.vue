<template>
  <div class="outilPerso">
    <canvas 
      id="threeCustom" 
      @pointerDown="grabbing = true" 
      @pointerUp="grabbing = false" 
      :class="['grab', { 'grabbing': grabbing }]"
    >
    </canvas>
    <MenusColorsCutsom @change-color="getNewColor3D" />
  </div>
</template>

<script>
import Scene from "@/classes/Scene.js";
import Clock from "@/classes/Clock.js";
import { MathUtils } from "three/src/math/MathUtils"
import MenusColorsCutsom from "@/components/MenusColorsCutsom.vue";

export default {
  name: "OutilPersonnalisation",
  components: {
    MenusColorsCutsom
  },
  data: function () {
    return {
      scene: null,
      robot: null,
      grabbing: false,
      newColor3D: null
    }
  },
  watch: {
    newColor3D: function() {
      console.log("coucou");
    }
  },
  mounted() {
    this.scene = new Scene(document.getElementById("threeCustom"), { x: 0, y: 0, z: 6 }, 2.5, 2, 1.2, 2.5, true, 800);
    this.clock = new Clock(this.scene, "src/gltf/clock.glb", false, 1, this.callbackClock.bind(this));
  },
  beforeUnmount() {
    this.clock.stopAnimate();
    this.scene.stopAnimate();
  },
  methods: {
    callbackClock() {
      this.clock.firstGltfChild.scale.set(0.25, 0.25, 0.25);
      this.clock.firstGltfChild.rotateY(MathUtils.degToRad(10));
      this.clock.firstGltfChild.rotateX(MathUtils.degToRad(70));
    },
    getNewColor3D(payload) {
      this.newColor3D;
      switch (payload.menuToChange) {
        case "Aiguilles :":
          this.clock.changeColorAiguille(payload.color);
          break;
        case "Aiguilles Colorées :":
          this.clock.changeColorAiguilleColor(payload.color);
          break;
        case "Cadran :":
          this.clock.changeColorCadran(payload.color);
          break;
        case "Bracelet :":
          this.clock.changeColorBracelet(payload.color);
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#threeCustom {
  position: relative;
  margin: auto;
  // margin-left: 22%;
  z-index: 0;
}
.grab {
  cursor: grab;
}
.grabbing {
  cursor: grabbing;
}
.outilPerso {
  width: 100%;
  @include flex(column, center, center);
}
</style>