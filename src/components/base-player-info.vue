<template>
  <div class="player-info">
    <button class="player-number">12</button>
    <div>
      <h2 class="player-name">ФИО</h2>
      <h3 class="player-role">Роль в команде</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "player-info",
  props: {
    players: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.player-info {
  display: flex;
  margin-bottom: 1rem;
}

.player-number {
  font-size: 1rem;
  margin-right: 1.5rem;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-color);
  color: var(--surface-color);
  border: 0;
  border-radius: 0.25rem;
  padding: 1rem;
}

.player-name {
  width: 2rem;
  height: 0.75rem;
  font-size: 1rem;
  margin: 0.25rem 1.25rem 0 0.75rem;
}

.player-role {
  width: 8.5rem;
  height: 0.75rem;
  font-size: 1rem;
  margin: 0.5rem 1.25rem 1rem 0.75rem;
  color: var(--placeholder-color);
}
</style>