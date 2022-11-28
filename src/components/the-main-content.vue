<template>
  <section>
    <div class="cont">
      <div class="squad-btns" >
        <router-link
            to="/team/"
            :class="[isActive? 'squad-btn2' : 'squad-btn1']"
            @click="isActive = false"
        >
          Основной состав
        </router-link>
        <router-link
            to="/team/reserve"
            :class="[isActive? 'squad-btn1' : 'squad-btn2']"
            @click="isActive = true"
        >
          Запасные игроки
        </router-link>
      </div>
        <router-view :key="$router.fullPath"></router-view>
    </div>
  </section>
</template>

<script>


export default {
  name: "main-content",
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>
.cont{
  min-width: 22.5rem;
  max-width: 50rem;
  min-height: 39rem;
  background-color: var(--surface-color);
  border-radius: 0.5rem;
  margin: 0 auto;
}


.squad-btns{
  display: flex;
  padding-top: 2rem;
  justify-content: space-around;
}

.squad-btn1 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 7.5rem;
  max-width: 12.5rem;
  height: 2rem;
  padding: 0.6rem;
  margin: 0 1rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 7.5rem;
  max-width: 12.5rem;
  height: 2rem;
  padding: 0.6rem;
  margin: 0 1rem;
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

@media (min-width: 576px) {
  .cont{
    width: 360px;
  }
  .squad-btn1{
    width: 7.5rem;
  }
  .squad-btn2{
    width:7.5rem;
  }
}

@media (min-width: 768px) {
  .cont{
    width: 450px;
  }
  .squad-btn1{
    width: 8.5rem;
  }
  .squad-btn2{
    width: 8.5rem;
  }
}

@media (min-width: 992px) {
  .cont{
    width: 600px
  }
  .squad-btn1{
    width: 10rem;
    font-size: 1rem;
  }
  .squad-btn2{
    width: 10rem;
    font-size: 1rem;
  }
}

@media (min-width: 1440px) {
  .cont{
    width: 800px;
  }
  .squad-btn1{
    width: 12.75rem;
  }
  .squad-btn2{
    width: 12.75rem;
  }
}
</style>