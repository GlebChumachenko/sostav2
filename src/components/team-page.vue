<template>
  <page-top/>
  <content-info/>
  <page-bottom/>
</template>

<script>
import pageTop from "@/components/page-top";
import pageBottom from "@/components/page-bottom";
import contentInfo from "@/components/content-info";
export default {
  components: {
    pageBottom,
    pageTop,
    contentInfo
  },

  name: "team-page"
}
</script>

<style scoped>

</style>