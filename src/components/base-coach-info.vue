<template>
  <div class="coach-info">
    <p class="coach-title">Тренер:</p>
    <p class="coach-name">ФИО</p>
  </div>
</template>

<script>
export default {
  name: "coach-info"
}
</script>

<style scoped>

.coach-info{
  width: 20rem;
  height: 2rem;
  margin: 1.25rem 0;
  display: flex;
  flex-grow: 1;
}

.coach-title {
  font-size: 0.75rem;
  margin: 0.6rem 2rem 0.6rem 0;
  font-weight: 700;
}
.coach-name {
  font-size: 0.75rem;
  margin: 0.6rem 0 0.6rem 2rem;
  font-weight: 700;
}
</style>