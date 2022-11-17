<template>
  <page-top/>

  <team-info/>
  <main-content/>

  <page-bottom/>
</template>

<script>
import pageTop from "@/components/the-page-top";
import pageBottom from "@/components/the-page-bottom";
import mainContent from "@/components/the-main-content";
import teamInfo from "@/components/the-info-navigation";
export default {
  components: {
    pageBottom,
    pageTop,
    mainContent,
    teamInfo
  },

  name: "team-page"
}
</script>

<style scoped>

</style>