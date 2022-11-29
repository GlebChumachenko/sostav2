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
      />
      <coach-info/>
    </div>
  </div>
</template>

<script>
import playerInfo from "@/components/base-player-info";
import coachInfo from "@/components/base-coach-info";

export default {
  name: "the-reserve-info",
  components: {
    playerInfo,
    coachInfo
  },

  data() {
    return {
      players: [{
      id: 1,
      name: "Player10",
      role: "Striker",
      number: "10"
    }, {
      id: 2,
      name: "Player11",
      role: "Defender",
      number: "5"
    },{
      id: 3,
      name: "Player12",
      role: "Mildfielder",
      number: "8"
    },{
        id: 7,
        name: "Player13",
        role: "Striker",
        number: "99"
      },{
        id: 8,
        name: "Player14",
        role: "Striker",
        number: "9"
      },{
        id: 9,
        name: "Player15",
        role: "Mildfielder",
        number: "4"
      },{
        id: 7,
        name: "Player16",
        role: "Striker",
        number: "25"
      },{
        id: 8,
        name: "Player17",
        role: "Striker",
        number: "19"
      },{
        id: 9,
        name: "Player18",
        role: "Mildfielder",
        number: "18"
      }
    ]
    }
  }
}
</script>

<style scoped>
.players-info {
  padding: 1.25rem;
}
</style>