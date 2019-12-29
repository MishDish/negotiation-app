import Vue from 'vue'
import NegotiationTabs from '@/components/NegotiationTabs.vue'
import  { isUndefinedOrZero, getCurrentLondonWeatherData }  from "@/shared/mixins";

describe('NegotiationTabs.vue', () => {
  
  it('sets the correct default data', () => {
    const defaultData = NegotiationTabs.data()
    expect(defaultData.isEmployerTab).to.equal(true)
    expect(defaultData.employerProposal).to.equal(0)
    expect(defaultData.employeeProposal).to.equal(0)
    expect(defaultData.currentTemp).to.equal(0)
  })

  it('verifies that updateProposedValue properly updates proposed value on employers tab', () => {
    // 1. Arrange
    const givenVal = 5;
    const Constructor = Vue.extend(NegotiationTabs)
    const vm = new Constructor().$mount()
    vm.isEmployerTab = true
   // 2. Act

    vm.updateProposedValue(givenVal)
   // 3. Assert
    expect(vm.employerProposal).to.equal(givenVal)
    expect(vm.employeeProposal).to.equal(0)
  })

  it('verifies that updateProposedValue properly updates proposed value on employee tab', () => {
    // 1. Arrange
    const givenVal = 5;
    const Constructor = Vue.extend(NegotiationTabs)
    const vm = new Constructor().$mount()
    vm.isEmployerTab = false
   // 2. Act
    vm.updateProposedValue(givenVal)
   // 3. Assert
    expect(vm.employerProposal).to.equal(0)
    expect(vm.employeeProposal).to.equal(givenVal)
  })

  it('verifies that resetNegotiation properly resets the proposed values', () => {
    // 1. Arrange
    const Constructor = Vue.extend(NegotiationTabs)
    const vm = new Constructor().$mount()

    vm.employerProposal = 12
    vm.employeeProposal = 5
   // 2. Act
    vm.resetNegotiation()
   // 3. Assert
    expect(vm.employerProposal).to.equal(0)
    expect(vm.employeeProposal).to.equal(0)
  })

  // TO DO: Test the modal ( show ) and the current weather call
})
