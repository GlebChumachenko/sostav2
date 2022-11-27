<template>
  <div class="main">
    <page-top/>

    <div class="content">
      <team-info/>
      <router-view :key="$router.fullPath"></router-view>
    </div>

    <page-bottom/>
  </div>
</template>

<script>
import pageTop from "@/components/the-page-top";
import pageBottom from "@/components/the-page-bottom";
import teamInfo from "@/components/info-navigation";
export default {
  name: "team-page",
  components: {
    pageBottom,
    pageTop,
    teamInfo
  }
}
</script>

<style scoped>

.main{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content{
  flex-grow: 1;
  margin-bottom: 1.5rem;
}







</style>