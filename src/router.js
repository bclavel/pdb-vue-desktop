import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Dispatch from '@/views/Dispatch'
import Calendar from '@/views/Calendar'
import Producers from '@/views/Producers'

const routes = [
    { path: '/', name: 'Dispatch', component: Dispatch },
    { path: '/calendrier', name: 'Calendrier', component: Calendar },
    { path: '/producteurs', name: 'Producteurs', component: Producers }
]

export default new Router({ routes })