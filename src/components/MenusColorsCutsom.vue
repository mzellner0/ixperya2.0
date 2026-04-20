<template>
  <div class="menus-colors">
    <MenuColorsCutsom
      v-for="(menu, index) in menus"
      :key="index"
      :title="menu.title"
      :colors="menu.colors"
      @change-color="getNewColor3D"
    />
  </div>
</template>

<script>
import MenuColorsCutsom from "@/components/MenuColorsCutsom.vue";

export default {
  name: "MenusColorsCutsom",
  components: {
    MenuColorsCutsom,
  },
  data: function () {
    return {
      menus: [
        {
          title: this.$t("ecommerce.case"),
          colors: [
            { id: 1, color: "#fbca61", color3D: 0xfcba47 },
            { id: 2, color: "#b1b1b1", color3D: 0xbdbdbd },
            { id: 3, color: "#cd764e", color3D: 0xeb7434 },
          ],
        },
        {
          title: this.$t("ecommerce.hands"),
          colors: [
            { id: 1, color: "#fbca61", color3D: 0xfcba47 },
            { id: 2, color: "#b1b1b1", color3D: 0xbdbdbd },
            { id: 3, color: "#cd764e", color3D: 0xeb7434 },
          ],
        },
        {
          title: this.$t("ecommerce.subdial_hands"),
          colors: [
            { id: 1, color: "#f85b00", color3D: 0xf85b00 },
            { id: 2, color: "#c90000", color3D: 0xc90000 },
            { id: 3, color: "#006eff", color3D: 0x006eff },
          ],
        },
        {
          title: this.$t("ecommerce.strap"),
          colors: [
            { id: 1, color: "#3d2c23", color3D: 0x120a06 },
            { id: 2, color: "#000000", color3D: 0x000000 },
            { id: 3, color: "#c9c9c9", color3D: 0xc9c9c9 },
          ],
        },
      ],
    };
  },
  methods: {
    getNewColor3D(payload) {
      this.$emit("changeColor", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.menus-colors {
  width: 400px;
  margin: auto;
  @include breakpoint(600) {
    width: auto;
    margin-top: -20px;
  }
}
</style>
