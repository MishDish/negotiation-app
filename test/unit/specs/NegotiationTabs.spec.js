import Vue from 'vue'
import NegotiationTabs from '@/components/NegotiationTabs'

describe('NegotiationTabs.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NegotiationTabs)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
  })
})
