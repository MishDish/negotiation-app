import Vue from 'vue'
import Router from 'vue-router'
import NegotiationTabs from '@/components/NegotiationTabs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NegotiationTabs',
      component: NegotiationTabs
    }
  ]
})
