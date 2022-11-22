<template>
  <page-top/>

  <team-info/>
  <router-view :key="$router.fullPath"></router-view>

  <page-bottom/>
</template>

<script>
import pageTop from "@/components/the-page-top";
import pageBottom from "@/components/the-page-bottom";
import teamInfo from "@/components/info-navigation";
export default {
  components: {
    pageBottom,
    pageTop,
    teamInfo
  },

  name: "team-page"
}
</script>

<style scoped>

</style>