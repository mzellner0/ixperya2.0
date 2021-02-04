import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Developpeur from '../views/Developpeur.vue'
import Contact from '../views/Contact.vue'
import SiteECommerce from '../views/SiteECommerce.vue'
import SiteInformatif from '../views/SiteInformatif.vue'
import SiteAvecJeu from '../views/SiteAvecJeu.vue'
import Projet from '../views/Projet.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import APropos from '../views/APropos.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/developpeur-web',
    name: 'Developpeur',
    component: Developpeur
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/site-informatif',
    name: 'SiteInformatif',
    component: SiteInformatif
  },
  {
    path: '/site-avec-jeu',
    name: 'SiteAvecJeu',
    component: SiteAvecJeu
  },
  {
    path: '/site-ecommerce',
    name: 'SiteECommerce',
    component: SiteECommerce
  },
  {
    path: '/projet',
    name: 'Projet',
    component: Projet
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage
  },
  {
    path: '/a-propos',
    name: 'APropos',
    component: APropos
  },
  {
    path: '/jeu',
    name: 'Jeu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Jeu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top: 0 };
  }
})

export default router
