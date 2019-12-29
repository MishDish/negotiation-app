<template>
    <form class="entry-form" action="negotiation"> 
        <input
            type="number" 
            v-bind="$attrs"
            v-bind:value="inputValue" 
            :placeholder="[[ placeholder ]]"
            ref="proposal"
            v-on:input="$emit('input', $event.target.value)"
          >
          <button class="form-button" type="button" v-on:click="submitInput()">Submit</button>
    </form>
</template>

<script>
export default {
  name: 'NegotiationTab',
  data () {
    return {

    }
  },
  props:{
      inputValue : Number,
      placeholder: String,
  },
  computed: {
    
  },
  methods: {
      submitInput (){
        this.$emit('proposed-value', this.$refs.proposal.value)
      }
  }
}
/** TO DO :
 *  2. Hide the input after sumbit
 */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.entry-form {
   display: flex;
   height: 100px;
   flex-direction: column;
   justify-content: space-around;
}

.form-button {
  align-self: flex-end;
  width: 65px;
}

</style>
