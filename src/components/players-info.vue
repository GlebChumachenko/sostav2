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

      </div>
      <coach-info/>
    </div>
</template>

<script>
import playerInfo from "@/components/base-player-info";
import coachInfo from "@/components/base-coach-info";
export default {
  name: "players-info",
  components: {
    playerInfo,
    coachInfo
  },
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
      },{
        id: 4,
        name: "Player4",
        role: "Defender",
        number: "2"
      },{
        id: 5,
        name: "Player5",
        role: "Defender",
        number: "12"
      },{
        id: 6,
        name: "Player6",
        role: "Mildfielder",
        number: "35"
      },{
        id: 7,
        name: "Player7",
        role: "Striker",
        number: "17"
      },{
        id: 8,
        name: "Player8",
        role: "Striker",
        number: "7"
      },{
        id: 9,
        name: "Player9",
        role: "Mildfielder",
        number: "47"
      }
      ]
    }
  }
}
</script>

<style scoped>

.players-info {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
}


</style>