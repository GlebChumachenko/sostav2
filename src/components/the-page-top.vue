<template>
  <header class = "header">
    <div class="head">
      <h1 class = "title">Logo</h1>
      <button class="enter-btn" type="submit"> Войти </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "page-top"
}
</script>

<style scoped>
header {
  background-color: var(--primary-color);
  padding: 0 2rem;
  height: 4.5rem;
  margin-bottom: 2rem;
}

.head{
  display: flex;
}

.title{
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: 900;
  height: 1.5rem;
  width: 4rem;
  font-family: 'Arial', sans-serif;
  color: var(--surface-color);
  flex-grow: 1;
}

.enter-btn{
  margin-bottom: 1rem;
  margin-top: 1rem;
  background-color: var(--surface-color);
  color: var(--text-color);
  cursor: pointer;
  border: 0;
  height: 2rem;
  width: 4.75rem;
  border-radius: 0.75rem;
  transition: all 0.2s ease;
}
.enter-btn:hover{
  background-color:var(--placeholder-color);
}
</style>