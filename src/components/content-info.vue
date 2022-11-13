<template>
  <team-info/>
  <main-content/>
</template>

<script>
import mainContent from "@/components/main-content";
import teamInfo from "@/components/team-info";
export default {
  components: {
    mainContent,
    teamInfo
  },

  name: "content-info"
}
</script>

<style scoped>

</style>