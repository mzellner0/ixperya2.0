<template>
  <div class="a-propos">
    <img :src="require('@/assets/img/maud.jpg')" alt="maud zellner">
    <LineTop />
    <div class="a-propos__texts">
      <h1>A propos</h1>
      <p>
        Vous cherchez un développeur pour agrandir le potentiel de création de votre entreprise et ainsi pouvoir livrer à vos clients des sites web toujours plus performants.
      </p>
      <p>
        Des tonnes de développeurs s’offrent à vous. <br>
        Tous semblent intéressants et talentueux. <br>
        Mais comment choisir LA bon personne ? Comment être sûr que quelques semaines plus tard, cette nouvelle recrue ne livre pas vos projets en retard et ne soit pas à la hauteur de vos attentes ?
      </p>
      <p>
        Le développeur parfait n’existe pas mais celui qui tend à l’être, oui !
      </p>
      <p>
        Si une personne se remet en question chaque jour, si elle est curieuse et ne demande qu’à développer ses compétences, alors elle saura s’intégrer dans votre compagnie pour :
      </p>
        <ul>
          <li>travailler avec les mêmes outils que votre équipe</li>
          <li>proposer ses idées pour créer des sites web encore plus innovants</li>
          <li>explorer les nouvelles technologies, les apprendre et les utiliser pour travailler le plus efficacement possible.</li>
        </ul>
      <p>
        Je me présente, je m’appelle Maud et je suis développeuse web full stack avec une grande préférence pour le front-end. <br>
        Anciennement infographiste 3D, j’apprécie réellement marier le code et le design pour créer des applications web qui soient à la fois fluides, rapides et élégantes. 
      </p>
      <p>
        Il y a quelques temps, j’ai voulu découvrir le monde du web et je me suis formée en HTML, CSS et Javascript.
      </p>
      <p>
        Trouvant ce monde fascinant et passionnant j’ai décidé d’arrêter l'infographie pour faire du développement web mon métier.
      </p>
      <p>
        J’ai ainsi appris les concepts du back-end (node.js/express.js, mysql) ainsi que pluiseurs frameworks front-end : Angular (ngrx, rxjs), React et Vue.js. Je travaille actuellement principalement sur Vue.
      </p>
      <p> 
        Intéressée par l’union de la 3D et du web, j’ai également découvert Three.js qui m’a permis d’intégrer des objets 3D dans une page internet. 
      </p>
      <p>
        Au cours de cet apprentissage, j’ai compris une chose essentielle. 
      </p>
      <p>
        J’ai réalisé qu’en comprenant les concepts (en n’ayant pas peur de découvrir de nouvelles librairies, de nouveaux frameworks, de nouveaux langages), je m’adapte et apprends chaque jour un peu plus. <br>
        Je veux en permanence rechercher les meilleurs façons de travailler pour être la plus efficace, la plus productive et la plus créative possible.
      </p>
      <p>
        Riche de mes expériences, je ne demande qu’à aider votre entreprise à se réaliser en continuant à me former.
      </p>
      <p>    
        Pour qu’ensemble nous fusionnons nos connaissances. <br>
        Pour qu’ensemble nous partagions notre passion. <br>
        Pour qu’ensemble nous réalisions des projets incroyables. <br>
      </p>
    </div>
    <LineBottom />
  </div>
</template>

<script>
import LineTop from "@/components/LineTop.vue";
import LineBottom from "@/components/LineBottom.vue";

export default {
  name: "AProposComponent",
  components: {
    LineTop,
    LineBottom
	}
}
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