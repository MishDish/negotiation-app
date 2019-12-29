<template>
  <div class="page-container">
    <div class="bid-tabs">
      <ul class="bid-tabs__header">
          <li v-on:click="isEmployerTab = true" 
              v-bind:class="{ active: isEmployerTab }" ><a>Employer</a></li>
          <li v-on:click="isEmployerTab = false"  
              v-bind:class="{ active: !isEmployerTab }"><a>Employee</a></li>
      </ul>
      <div class="bid-tabs__body">
          <NegotiationTab  v-bind:placeholder="'Enter maximum offer'"
                           v-if="isEmployerTab"
                           @proposed-value="updateProposedValue">
          </NegotiationTab> 
          <NegotiationTab v-bind:placeholder="'Enter minimum salary'" 
                          v-if="!isEmployerTab"
                          @proposed-value="updateProposedValue">
          </NegotiationTab> 

          <div>
            <b-modal id="modal-1" title="Negotiation" 
                     ref="negitiation-modal"  @hide="resetNegotiation">
              <div v-if="employeeProposal <= this.employerProposal">
                <h3>Success !</h3> 
                <span>Maximum offer was: {{ employerProposal }}</span> <br>
                <span>Minimum expected salary was: {{ employeeProposal }} </span>
              </div>
              <div v-else>
                  <h3>Failure !</h3> 
              </div>
              <div class="weather">Current temperature in London is {{ currentTemp }} Celsius degree!</div>
            </b-modal>
         </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import { ModalPlugin } from 'bootstrap-vue'

import NegotiationTab from '@/components/NegotiationTab'
import  { isUndefinedOrZero, getCurrentLondonWeatherData }  from "@/shared/mixins";

export default {
  components:{
     NegotiationTab
  },
  name: 'NegotiationTabs',
  data () {
    return {
      isEmployerTab: true,
      employerProposal : 0,
      employeeProposal : 0,
      currentTemp: 0
    }
  },
  computed: {

  },
  methods:{

    resetNegotiation (){
      this.employerProposal = 0
      this.employeeProposal = 0
    },

    async updateProposedValue(value){
          this.employerProposal = this.isEmployerTab  ? value : this.employerProposal 
          this.employeeProposal = !this.isEmployerTab  ? value : this.employeeProposal 

         if(isUndefinedOrZero(this.employerProposal)|| isUndefinedOrZero(this.employeeProposal)){
            return
          }

          const weatherInfo = await getCurrentLondonWeatherData()
          if(weatherInfo && weatherInfo.main && weatherInfo.main.temp ) {
              this.currentTemp  = `${weatherInfo.main.temp} `
          }
          this.$refs['negitiation-modal'].show()
      }
    }
}

Vue.use(ModalPlugin)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.page-container {
   display: flex;
   justify-content: center;
}

.bid-tabs {
   display:flex;
   border: 1px solid grey;
   flex-direction: column;
   min-height: 500px;
   width: 500px;
 }

 .bid-tabs__body {
  align-items: center;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
 }

 .bid-tabs__header {
   align-items: center;
   border-bottom: 1px solid grey;
   display:flex;
   height: 30px;
   list-style: none; 
   justify-content: center;
   margin:0;
   padding: 0; 
 }

.bid-tabs__header > li {
   cursor: pointer;
   height: 100%;
   margin: 0;
   padding: 0;
   width:100%;
}

.bid-tabs__header > li:first-child {
  border-right: 1px solid grey;
}

.active {
   background-color : #808080	;
}

</style>
