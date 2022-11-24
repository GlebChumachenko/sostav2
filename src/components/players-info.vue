<template>
    <div class="players-info">
      <div class="all-players-info">
        <player-info
            :players="players"
            v-for="player in players"
            :key="player.id"
            :number="player.number"
            :role="player.role"
            :name="player.name"
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

      players: [{
        id: 1,
        name: "Player1",
        role: "Striker",
        number: "9"
      }, {
        id: 2,
        name: "Player2",
        role: "Defender",
        number: "3"
      },{
        id: 3,
        name: "Player3",
        role: "Mildfielder",
        number: "6"
      }]
    }
  }
}
</script>

<style scoped>

.players-info {
  padding: 1.25rem;
}
</style>