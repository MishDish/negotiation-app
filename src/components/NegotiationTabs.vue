<template>
  <div class="page-container">
    <div class="bid-tabs">
      <ul class="bid-tabs__header">
          <li v-on:click="isEmployerTab = true"><a>Employer</a></li>
          <li v-on:click="isEmployerTab = false"><a>Employee</a></li>
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
      </div>
    </div>

  </div>
</template>

<script>

import NegotiationTab from '@/components/NegotiationTab'
import  { isUndefinedOrZero }  from "@/shared/mixins";

export default {
  components:{
     NegotiationTab
  },
  name: 'NegotiationTabs',
  data () {
    return {
      isEmployerTab: true,
      employerProposal : 0,
      employeeProposal : 0
    }
  },
  computed: {
    
  },
  methods:{
    updateProposedValue(value){
      this.employerProposal = this.isEmployerTab  ? value : this.employerProposal 
      this.employeeProposal = !this.isEmployerTab  ? value : this.employeeProposal 
      
      if(isUndefinedOrZero(this.employerProposal)
       || isUndefinedOrZero(this.employeeProposal)){
         return
      }

      if(this.employeeProposal <= this.employerProposal ){
        alert('SUCCESS!')
        return;
      }
      alert('FAILURE!');
    }
  }

}
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

 .bid-tabs__header {
   align-items: center;
   display:flex;
   height: 30px;
   justify-content: center;
   border-bottom: 1px solid grey;
 }

.bid-tabs__header > li {
   cursor: pointer;
   height: 100%;
   width:100%;
}

.bid-tabs__header > li:first-child {
  border-right: 1px solid grey;
}

</style>
