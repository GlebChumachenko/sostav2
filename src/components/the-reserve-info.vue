<template>
  <div class="players-info">
    <div class="all-players-info">
      <player-info  v-for="player in 3" :key="player.id">
      </player-info>
      <coach-info/>
    </div>
  </div>
</template>

<script>
import playerInfo from "@/components/base-player-info";
import coachInfo from "@/components/base-coach-info";

export default {
  components: {
    playerInfo,
    coachInfo
  },
  name: "the-reserve-info"
}
</script>

<style scoped>
.players-info {
  padding: 1.25rem;
}
</style>