import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Developpeur from '../views/Developpeur.vue'
import Contact from '../views/Contact.vue'
import SiteECommerce from '../views/SiteECommerce.vue'
import SiteInformatif from '../views/SiteInformatif.vue'
import SiteAvecJeu from '../views/SiteAvecJeu.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import APropos from '../views/APropos.vue'
import Project from '../views/Project.vue'

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
    path: '/projet',
    name: 'Project',
    component: Project
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
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 };
  }
})

export default router
