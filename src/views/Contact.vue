<template>
  <div class="contact">
    <ContactComponent @get-robot="getRobot" />
  </div>
</template>

<script>
import ContactComponent from "@/components/ContactComponent.vue"

export default {
  name: "Contact",
  components: {
    ContactComponent
  },
  data() {
    return {
      robot: null
    }
  },
  mounted() {
    if(innerWidth > 1000) {
      document.body.addEventListener('mousemove', this.onMouseMove);
    }
  },
  beforeUnmount() {
    if(innerWidth > 1000) {
      document.body.removeEventListener('mousemove', this.onMouseMove);
    }
  },
  methods: {
    getRobot(payload) {
      this.robot = payload;
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
.contact {
  @include flex(row, center, center);
  @include breakpoint(1150) {
    margin-top: 50px;
  }
}
</style>