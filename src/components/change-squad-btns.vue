<template >
  <div class="squad-btns" name="change-squad-btns">
    <button class="squad-btn1" v-on:click="show = !show">Основной состав</button>
    <button class="squad-btn2">Запасные игроки</button>
  </div>
</template>

<script>
export default {
  name: "change-squad-btns",
  props: {
    data: {
      show: true
    }
  }

}
</script>

<style scoped>

.squad-btns{
  display: flex;
  padding: 2rem 3rem 0px 3rem;
}

.squad-btn1 {
  font-size: 1rem;
  height: 2.25rem;
  width: 7.5rem;
  padding: 0.6rem 0.6rem 0.8rem 0.6rem;
  flex-grow: 1;
  margin-right: 1.75rem;
  border: 0;
  background-color: var(--secondary-color);
  color: var(--text-color);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btn1:hover{
  background-color: var(--secondary-color-light);
}

.squad-btn2 {
  font-size: 1rem;
  height: 2.25rem;
  width: 7.5rem;
  padding: 0.6rem 0.6rem 0.8rem 0.6rem;
  flex-grow: 1;
  margin-left: 1.75rem;
  border-style: solid;
  border-color: var(--placeholder-color);
  background-color: var(--surface-color);
  color: var(--placeholder-color);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btn2:hover{
  background-color: var(--placeholder-color);
  color: var(--surface-color);
}
</style>