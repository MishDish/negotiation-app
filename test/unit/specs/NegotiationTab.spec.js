import Vue from 'vue'
import NegotiationTab from '@/components/NegotiationTab'
import { mount } from "@vue/test-utils"

describe('NegotiationTab.vue', () => {
  it('should render correct contents', () => {
    // 1. Arrange
    const textContent = 'Submit'
    const Constructor = Vue.extend(NegotiationTab)
    // 2. Act
    const vm = new Constructor({propsData: { isInputShown: true }}).$mount()
    
    // 3. Assert
    expect(vm.$el.querySelector('.entry-form button').textContent)
      .to.equal(textContent)
  })

  it('should render execute submit properly', () => {
    // 1. Arrange
    const wrapper = mount(NegotiationTab)
    const expectedVal = 12 
    wrapper.vm.$refs = {
      proposal : {
        value : expectedVal // only numerical
      }
    }
    // 2. Act
    wrapper.vm.submitInput();
    // 3. Assert
    expect(wrapper.emitted()['proposed-value'][0][0]).to.equal(expectedVal)
  })
})
