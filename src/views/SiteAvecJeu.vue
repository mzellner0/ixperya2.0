<template>
  <div class="siteJeu">
    <BasePageSpecialisee
      :title1="$t('game.page.title')"
      :title2="$t('game.page.text_3')"
      :title3="$t('game.page.text_4')"
      :paragraph1="$t('game.page.text_5')"
    >
      <template v-slot:content>
        <div class="siteJeu__button">
          <Button
            :text="$t('game.page.button')"
            :composant-name="'Jeu'"
            :new-tab="true"
          />
        </div>
      </template>
      <template v-slot:paragraph2>
        <p>
          {{ $t("game.page.text_1") }} 
        </p>
        <p>
          {{ $t("game.page.text_2") }} 
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
