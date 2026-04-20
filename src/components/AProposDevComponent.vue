<template>
  <div class="a-propos">
    <img :src="require('@/assets/img/maud_square.jpg')" alt="maud zellner" />
    <LineTop />
    <div class="a-propos__texts">
      <h1>{{ $t("about.who") }}</h1>
      <p>
        {{ $t("about.text_4") }}
      </p>
      <p>
        {{ $t("about.text_5") }} <br />
        {{ $t("about.text_6") }} <br />
        {{ $t("about.text_7") }}
      </p>
      <p>
        {{ $t("about.text_8") }}
      </p>
      <ul>
        <li>{{ $t("about.text_9") }}</li>
        <li>{{ $t("about.text_10") }}</li>
        <li>{{ $t("about.text_11") }}</li>
      </ul>
      <p>
        {{ $t("about.text_12") }} <br />
        {{ $t("about.text_13") }}
      </p>
      <p>
        {{ $t("about.text_14") }}
      </p>
      <p>
        {{ $t("about.text_15") }}
      </p>
      <p>
        {{ $t("about.text_16") }}
      </p>
      <p>
        {{ $t("about.text_17") }}
      </p>
      <p>
        {{ $t("about.text_18") }}
      </p>
    </div>
    <LineBottom />
  </div>
</template>

<script>
import LineTop from "@/components/LineTop.vue";
import LineBottom from "@/components/LineBottom.vue";

export default {
  name: "AProposDevComponent",
  components: {
    LineTop,
    LineBottom,
  },
};
</script>

<style lang="scss" scoped>
.a-propos {
  width: 70%;
  margin: 20px auto;
  line-height: 25px;
  @include breakpoint(800) {
    width: 80%;
  }
  &__texts {
    margin-top: 20px;
    @include flex(column, flex-start, center);
    h1 {
      font-family: $police-logo;
      text-transform: uppercase;
      font-size: 25px;
    }
    p {
      font-family: $police-text;
      font-size: 16px;
    }
    ul {
      list-style: none;
      margin: 5px;
      font-family: $police-text;
      li {
        &::before {
          content: "\2022";
          color: $color-header-dark;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      }
    }
  }
  img {
    margin-top: 35px;
    max-height: 200px;
    border-radius: 250px;
    border: 3px solid $color-header-dark;
    margin-left: 2%;
  }
}
</style>
