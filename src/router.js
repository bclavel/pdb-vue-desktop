import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dispatch from './views/Dispatch'
import Calendar from './views/Calendar'
import Producers from './views/Producers'

const routes = [
    { path: '/dispatch', component: Dispatch },
    { path: '/calendrier', component: Calendar },
    { path: '/producteurs', component: Producers }
]

export default new VueRouter({ routes })