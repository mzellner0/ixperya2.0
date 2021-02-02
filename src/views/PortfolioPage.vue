<template>
  <div class="portfolio">
			<Portfolio :projets-list="projetsList" />
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio.vue"
import { mapActions } from 'vuex'

export default {
  name: "PortfolioPage",
  components: {
    Portfolio
  },
  data: () => {
    return {
      projetsList: [
        { 
          title: 'Hôtel de Paris Saint Tropez', 
          urlImage: 'hdp-portfolio-2.jpg',
          params: {
            title: 'Hôtel de Paris Saint Tropez'
          }
        },
        { 
          title: "Création d'avatar", 
          urlImage: 'avatar-portfolio.jpg',
          params: {
            title: "Création d'avatar"
          }
        }
      ]
    }
  },
  beforeRouteLeave(to, from, next) {
		this.updateLinkBackPortfolio(from.name);
		next();
	},
	methods: {
		...mapActions(['updateLinkBackPortfolio'])
	}
}
</script>

<style lang="scss" scoped>
  .portfolio {
    margin: 150px 0px;
  }
</style>