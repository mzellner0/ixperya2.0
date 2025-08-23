<template>
  <div class="siteJeu">
    <BasePageSpecialisee
      :title1="'Make your website interactive and capture your visitors\' attention.'"
      :title2="'With 3D, everything becomes possible!'"
      :title3="'Together, let\'s create your game.'"
      :paragraph1="'Wondering what it might look like? Take a look at an example:'"
    >
      <template v-slot:content>
        <div class="siteJeu__button">
          <Button :text="'Game'" :composant-name="'Jeu'" :new-tab="true" />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>
          Each game project is unique. From increasing the time visitors spend
          on your site to selling in-game items, the range of possibilities is
          very wide.
        </p>
        <p>
          By listening to you, we will work together to develop the rules and
          objectives of the game you want to create.
        </p>
        <p>Contact me now so we can discuss it!</p>
      </template>
    </BasePageSpecialisee>
  </div>
</template>

<script>
import BasePageSpecialisee from "@/components/BasePageSpecialisee.vue";
import Button from "@/components/Button.vue";

export default {
  name: "SiteAvecJeu",
  components: {
    BasePageSpecialisee,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.siteJeu {
  &__button {
    @include flex(row, center, center);
  }
}
</style>
