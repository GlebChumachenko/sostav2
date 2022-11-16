<template></template>

<script>
import colors from "@/assets/colors.css";
export default {
  assets:{
    colors
  },

  name: "v-score",
  props: {
    inthomescore:{
      type: Number,
      defaul(){
        return 0
      }
    },
    intawayscore:{
      type: Number,
      defaul(){
        return 0
      }
    },
    state_score:{
      type: Boolean,
      defaul(){
        return false
      }
    }
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>
</style>
