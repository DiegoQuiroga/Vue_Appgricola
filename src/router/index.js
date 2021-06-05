import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tablero from '../views/tablero.vue'
import Registro from '../views/Registro.vue'
import Inicio from '../views/Inicio.vue'
import Configuracion from '../views/Configuracion.vue'
import Dane from '../views/Api.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Dashboard',
    name: 'tablero',
    component: tablero
  },
  {
    path: '/signup',
    name: 'Registrarse',
    component: Registro
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Config',
    name: 'Configuracion',
    component: Configuracion
  },
  {
    path: '/Dane',
    name: 'Dane',
    component: Dane
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
