import Vue from 'vue'
import NegotiationTab from '@/components/NegotiationTab'

describe('NegotiationTab.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NegotiationTab)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
  })
})
