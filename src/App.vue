<template>
    <team-page/>
</template>

<script>

import teamPage from "@/components/team-page";
import colors from "@/assets/colors.css";
import common from "@/assets/common.css";
export default {
  name: 'App',
  components: {
    teamPage
  },

  assets: {
    colors,
    common
  }

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
