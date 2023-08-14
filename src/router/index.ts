import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */
import Jeu from "@/views/Jeu.vue";
import Acceuil from "@/views/Acceuil.vue";
import Inscription from "@/views/Inscription.vue";
import Connection from "@/views/Connection.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  /*   {
      path: '/',
      name: 'home',
      component: HomeView
    }, */
    {
      path:'/jeu',
      component :Jeu
    },
    {
      path:'/acceuil',
      component :Acceuil
    }, {
      path:'/inscription',
      component :Inscription
    }, 
    {
      path:'/connection',
      component :Connection
    }
  ]
})

export default router
