<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <team-page/>
</template>

<script>
//import HelloWorld from './components/v-score.vue'
import teamPage from "@/components/team-page";
import colors from "@/assets/colors.css";
export default {
  name: 'App',
  components: {
    teamPage
  },

  assets: {
    colors
  }

}
</script>

<style>
#app {
  font-family: Nunito, sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
