<template>
    <div class="players-info">
      <div class="all-players-info">
        <player-info v-for="item in 11" :key="item.id">
        </player-info>
        <coach-info/>
      </div>
    </div>
</template>

<script>
import playerInfo from "@/components/player-info";
import coachInfo from "@/components/coach-info";
export default {
  components: {
    playerInfo,
    coachInfo
  },
  name: "players-info"
}
</script>

<style scoped>

.players-info {
  padding: 1.25rem;
}
</style>