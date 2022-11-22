<template>
    <div class="players-info">
      <div class="all-players-info">
        <player-info :players="players"
                     v-for="player in players"
                     :key="player.id"
                     :number="number"
                     :role="role"
                     :name="playername"
        >
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
      players: [playerInfo, playerInfo, playerInfo, playerInfo, playerInfo, playerInfo, playerInfo, playerInfo, playerInfo,playerInfo, playerInfo],
      playername: 'ФИО',
      number: '12',
      role: 'Роль в команде'
    }
  }
}
</script>

<style scoped>

.players-info {
  padding: 1.25rem;
}
</style>