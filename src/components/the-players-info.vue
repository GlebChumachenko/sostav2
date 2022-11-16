<template>
    <div class="players-info">
      <div class="all-players-info">
        <player-info :players="players" v-for="players in 11" :key="players.id">
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
  name: "players-info",
  data() {
    return {
      players: [playerInfo, playerInfo, playerInfo]
    }
  }
}
</script>

<style scoped>

.players-info {
  padding: 1.25rem;
}
</style>