import Vue from 'vue'
import App from './App.vue'
import '../src/assets/index.css'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard'
import Create from "@/components/Create";
import TailablePagination from 'tailable-pagination';

Vue.use(TailablePagination);


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: Dashboard },
    { path: '/home', component: Dashboard },
    { path: '/create', component: Create }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
