<template>
  <div class="buttons">
      <button 
        v-for="button in listButtons" 
        :key="button.id"
        @click="detectChoice(button.id)"
        >
        {{ button.question }}
      </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonsAccueil',
  components: {
  },
  props: {
      listButtons: { type: Array, default: () => [] }
  },
  methods: {
    detectChoice(id) {
      switch (id) {
        case 1:
        case 2:
          this.$emit('changeQuestions', true);
          break;
        case 3:
          this.$router.push({ name: 'Jeu' });
          break;
        case 4:
          this.$router.push({ name: 'Jeu' });
          break;
        case 5:
          this.$router.push({ name: 'Jeu' });
          break;
        case 6:
          this.$router.push({ name: 'Jeu' });
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  @include flex(column, flex-start, initial);
}
button {
  width: 250px;
  font-family: $police-text-2;
  text-transform: uppercase;
  background-color: $color-header-dark;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  margin: 5px 0px;
  border: solid 2px transparent;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    border: solid 2px $color-header-dark;
    color: $color-header-dark;
    background-color: white;
  }
}
</style>
