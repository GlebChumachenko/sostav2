<template>
  <section>
    <div class="cont2">
      <div class="squad-btns" >
        <router-link to="/team/" :class="[isActive? 'squad-btn2' : 'squad-btn1']" @click="isActive = false">Основной состав</router-link>
        <router-link to="/team/reserve" :class="[isActive? 'squad-btn1' : 'squad-btn2']" @click="isActive = true">Запасные игроки</router-link>
      </div>
        <router-view :key="$router.fullPath"></router-view>
    </div>
  </section>
</template>

<script>



export default {
  data() {
    return {
      isActive: false
    }
  },


  name: "main-content"
}
</script>

<style scoped>

.cont2{
  margin: 0 auto;
  width: 50rem;
  background-color: var(--surface-color);
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.squad-btns{
  display: flex;
  padding: 2rem 3rem 0px 3rem;
}

.squad-btn1 {
  text-align: center;
  font-size: 1rem;
  width: 7.5rem;
  padding: 0.6rem;
  flex-grow: 1;
  margin: 0 1.75rem;
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
  text-align: center;
  font-size: 1rem;
  width: 7.5rem;
  padding: 0.6rem;
  flex-grow: 1;
  margin: 0 1.75rem;
  border: 1px;
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