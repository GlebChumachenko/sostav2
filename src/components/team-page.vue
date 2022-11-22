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
  components: {
    pageBottom,
    pageTop,
    teamInfo
  },

  name: "team-page"
}
</script>

<style scoped>

.main{
  display: flex;
  flex-direction: column;

}

.content{
  flex-grow: 1;
  margin-bottom: 1.5rem;
}







</style>