<template>
  <div class="accueil">
    <div class="accueil__container">
      <div class="accueil__question">
        <div :class="['accueil__border-futura', { 'anim-border-left': !loader }]" />
        <div class="accueil__text">
          <p>{{ question }}</p>
        </div>
        <div class="accueil__answers">
          <ButtonsAccueil 
            :list-buttons="listButtons" 
            @change-questions="getRedirect"
          />
        </div>
        <font-awesome-icon 
          :class="['arrow', { 'hide': hideArrow }]" 
          :icon="['fas', 'arrow-circle-left']"
          @click="backQuestions"
        />
      </div>
      <canvas id="threeAccueil"></canvas>
    </div>
  </div>
</template>

<script>
import Scene from "@/classes/Scene.js";
import Gltf from "@/classes/Gltf.js";
import ButtonsAccueil from "@/components/ButtonsAccueil.vue";
import { mapActions, mapState } from 'vuex'


export default {
  name: 'Accueil',
  components: {
    ButtonsAccueil
  },
  data: function() {
    return {
      scene: null,
      robot: null,
      question: "Bonjour, que cherchez-vous ?",
      firstListButtons: [
        { id: 1, question: "Je veux créer/refaire mon site." },
        { id: 3, question: "Je cherche un développeur web." },
        { id: 4, question: "Je veux créer un jeu vidéo sur le web." }
      ],
      secondListButtons: [
        { id: 5, question: "Je fais du e-commerce." },
        { id: 6, question: "J'ai/je veux un site informatif." }
      ],
      listButtons: null,
      hideArrow: true
    }
  },
  computed: {
    ...mapState(['loader'])
  },
  created() {
    this.listButtons = this.firstListButtons;
    this.showLoader();
  },
  mounted() {
    this.scene = new Scene(document.getElementById("threeAccueil"), { x: -0.5, y: 8, z: 15 }, 2.5, 1.5, 1.5, 3, false, 1150);
    this.robot = new Gltf(this.scene, "src/gltf/robot_v003.glb", true, 1, this.callbackRobot.bind(this));

    if(innerWidth > 1000) {
      document.body.addEventListener('mousemove', this.onMouseMove);
    }
  },
  beforeUnmount() {
    this.robot.stopAnimate();
    this.scene.stopAnimate();

    if(innerWidth > 1000) {
      document.body.removeEventListener('mousemove', this.onMouseMove);
    }
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
    getRedirect() {
      this.listButtons = this.secondListButtons;
      this.hideArrow = false;
    },
    backQuestions() {
      this.listButtons = this.firstListButtons;
      this.hideArrow = true;
    },
    onMouseMove(event) {
      const coeffWidth = 2.6 / innerWidth;
      const coeffHeight = 0.69 / innerWidth;
      if (this.robot.firstGltfChild) {
        this.robot.firstGltfChild.rotation.y = event.clientX * coeffWidth - 1.8;
        this.robot.firstGltfChild.rotation.x = event.clientY * coeffHeight;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#threeAccueil {
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

.hide {
  display: none;
}

.arrow {
  color: $color-header-dark;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 30px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    animation: leftRightArrow 500ms ease-in-out infinite;
  }
}

.accueil {
  &__container {
    @include breakpoint(1150) {
      width: 100%;
      @include flex(column, center, center);
    }
  }
  &__question {
    margin-left: 25%;
    margin-top: 150px;
    @include breakpoint(1150) {
      margin-top: 60px;
      margin-left: 0%;
    }
  }
  &__text {
    position: absolute;
    p {
      font-family: $police-text;
      margin-left: 60px;
      margin-top: 50px;
    }
  }
  &__border-futura {
    @include border-futura-left(120px, 150px);
  }
  &__answers {
    padding-top: 100px;
    margin-left: 30px;
    @include breakpoint(500) {
      margin-left: 20px;
    }
  }
}
</style>
