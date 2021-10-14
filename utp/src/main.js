import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'

import Home from "./components/home";
import Form from "./components/form";
import Servicio from './components/servicio'
import Noticias from "./components/noticias";
import Programadores from "./components/programadores";


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/form', component: Form },
  { path: '/servicio', component: Servicio },
  { path: '/noticias', component: Noticias },
  { path: '/programadores', component: Programadores }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
