<template>
  <div class="a-propos">
    <img :src="require('@/assets/img/maud_square.jpg')" alt="maud zellner" />
    <LineTop />
    <div class="a-propos__texts">
      <h1>Qui suis-je ?</h1>
      <p>
        Vous cherchez un développeur pour offrir à vos clients des sites web à
        la hauteur de leurs exigences.
      </p>
      <p>
        Des tonnes de candidats s’offrent à vous. <br />
        Tous semblent intéressants et talentueux. <br />
        Mais comment choisir la bonne personne ?
      </p>
      <p>
        La clé réside dans ceux qui se remettent en question chaque jour, qui
        sont curieux et constamment en quête d’amélioration. Ces profils sauront
        s’intégrer dans votre société pour :
      </p>
      <ul>
        <li>apprendre et travailler avec les mêmes outils que votre équipe</li>
        <li>produire un code propre et maintenable pour garantir la pérennité des
          projets
        </li>
        <li>explorer de nouvelles technologies et apprendre à les utiliser, pour
          être le plus efficace possible.
        </li>
      </ul>
      <p>
        Je m’appelle Maud et je suis développeuse web front-end, spécialisée en
        three.js. <br />
        Ancienne infographiste 3D spécialisée en texture, shading, grooming et
        rendu, j’ai travaillé sur de la publicité ou des effets spéciaux pour
        des entreprises telles qu'I-Réel ou encore Digital Golem.
      </p>
      <p>
        Maintenant développeuse web, l’alliance du code et du design est au cœur
        de mon approche, ce qui me permet de concevoir des applications web
        fluides, rapides et élégantes.
      </p>
      <p>
        J'ai commencé mon apprentissage du WebGL en lisant "Real-Time 3D
        Graphics with WebGl 2". J'ai ensuite pu explorer la documentation de
        Three.js en profondeur en travaillant sur de nombreux projets comme
        "l'avatar creator" sur le site de The Sandbox, qui permet de
        personnaliser son avatar en ligne. A travers cette expérience, j'ai pu,
        par exemple, approfondir mes connaissances sur les shaders, en en créant
        un entièrement. Il permettait de mixer deux textures ensemble et ainsi,
        permettait à l'utilisateur un meilleur contrôle sur la couleur de son
        avatar.
      </p>
      <p>
        Aujourd'hui à Stereograph, j'explore plus en profondeur l'optimisation
        liée à la géométrie en travaillant avec du batching et de l'instancing.
      </p>
      <p>
        Au cours de mon parcours, j’ai compris une chose essentielle : un
        problème donné a toujours une solution. En maîtrisant les concepts
        fondamentaux de la programmation, j’ai appris à m'adapter rapidement et
        à évoluer en fonction des besoins. Je suis en permanente remise en
        question afin d'être la plus productive, la plus efficace et la plus
        créative possible.
      </p>
      <p>
        Après avoir maintenant travaillé sur de nombreux projets 3D, je serai
        ravie de vous aider à concevoir des expériences numériques fluides,
        immersives et innovantes.
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
