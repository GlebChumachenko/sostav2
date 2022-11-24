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

  data() {
    return {
      players: [{
      id: 1,
      name: "Player4",
      role: "Striker",
      number: "10"
    }, {
      id: 2,
      name: "Player5",
      role: "Defender",
      number: "5"
    },{
      id: 3,
      name: "Player6",
      role: "Mildfielder",
      number: "8"
    }]
    }
  },
  name: "the-reserve-info"
}
</script>

<style scoped>
.players-info {
  padding: 1.25rem;
}
</style>