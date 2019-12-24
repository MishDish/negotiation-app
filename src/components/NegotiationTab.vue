<template>
    <form action="negotiation">
        <input 
            type="text" 
            v-bind="$attrs"
            v-bind:value="inputValue" 
            :placeholder="[[ placeholder ]]"
            ref="salary"
            v-on:input="$emit('input', $event.target.value)"
          >
          <button type="button" v-on:click="submitInput()">Submit</button>
    </form>
</template>

<script>
console.log('THIS is NegotiationTab')
export default {
  name: 'NegotiationTab',
  data () {
    return {
     
    }
  },
  props:{
      inputValue : Number,
      placeholder: String
  },
  computed: {
    
  },
  methods: {
      submitInput (){
          console.log(this.$refs.salary.value,'submitInput')
          this.$emit('proposed-value', this.$refs.salary.value)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
