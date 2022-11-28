<template>
  <div class="player-info">
    <a class="player-number">{{ number }}</a>
    <div>
      <h2 class="player-name">{{ name }}</h2>
      <h3 class="player-role">{{ role }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "player-info",
  props: {
    number: {
      type: String,
      defaul() {
        return ""
      }
    },
    name: {
      type: String,
      defaul() {
        return ""
      }
    },
    role: {
      type: String,
      defaul() {
        return ""
      }
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 1.5rem;
  width: 2rem;
  height: 2rem;
  background-color: var(--primary-color);
  color: var(--surface-color);
  border: 0;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.player-name {
  width: 2rem;
  height: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.25rem 1.25rem 0 0.75rem;
}

.player-role {
  width: 8.5rem;
  height: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 1.25rem 1rem 0.75rem;
  color: var(--placeholder-color);
}
</style>