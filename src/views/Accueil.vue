<template>
  <div class="Accueil">
    <div class="questions">
      <p>{{ question }}</p>
      <canvas id="threeAccueil"></canvas>
    </div>
  </div>
</template>

<script>
// import * as THREE from 'three';
import Scene3DMixin from "@/mixins/Scene3DMixin";

export default {
  name: 'Accueil',
  components: {
  },
  mixins: [Scene3DMixin],
  data: function() {
    return {
      question: "Bonjour, quel est votre situation ?"
    }
  },
  mounted() {
    this.init3DScene(document.getElementById("threeAccueil"));
  },
  methods: {
  }
}
</script>
