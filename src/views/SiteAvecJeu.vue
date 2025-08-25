<template>
  <div class="siteJeu">
    <BasePageSpecialisee
      :title1="'Make your website interactive, and capture your visitors\' attention.'"
      :title2="'Using 3D, everything becomes possible!'"
      :title3="'Let\'s create your game!'"
      :paragraph1="'Wondering how it might look like?'"
    >
      <template v-slot:content>
        <div class="siteJeu__button">
          <Button
            :text="'Play the game'"
            :composant-name="'Jeu'"
            :new-tab="true"
          />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>
          Each game project is unique. From increasing the time each visitor
          spends on your site, to selling in-game items, the range of
          possibilities is very massive!
        </p>
        <p>
          We will work together to develop the rules and objectives of the game
          you want to create.
        </p>
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
