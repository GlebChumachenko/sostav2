<template>
  <section>
    <div class="cont2">
      <div class="team-logo"/>
      <div class="change-btns">
        <router-link
            to="/"
            :class="[isActive? 'change-btn2' : 'change-btn1']"
            @click="isActive=true"
        >
            Обзор
        </router-link>
        <router-link
            to="/team"
            :class="[isActive? 'change-btn1' : 'change-btn2']"
            @click="isActive=false"
        >
            Состав
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "team-info",
  data() {
    return {
      isActive: true,
    }
  }
}
</script>

<style scoped>
.cont2 {
  min-width: 22rem;
  max-width: 50rem;
  margin: 0 auto;
}

.team-logo {
  height: 7.25rem;
  width: 8rem;
  margin-bottom: 2rem;
  background-size: 100%;
  background-image: url("../assets/image.png");
}

.change-btns {
  display: flex;
  margin-top: 2.25rem;
  margin-bottom: 0;
}


.change-btn1 {
  font-size: 1rem;
  background-color: var(--bg-color);
  color: var(--placeholder-color);
  border: 0;
  margin: 0rem 1rem 0rem 1rem;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  border-radius: 0.5rem 0.5rem 0 0;
  transition: all 0.2s ease;
}

.change-btn2 {
  font-size: 1rem;
  background-color: var(--primary-color);
  color: var(--surface-color);
  border: 0;
  margin: 0rem 1rem 0rem 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
  transition: all 0.2s ease;
}
@media (min-width: 576px) {
  .cont2 {
    width: 360px;
  }
}

@media (min-width: 768px) {
  .cont2 {
    width: 450px;
  }
}

@media (min-width: 992px) {
  .cont2 {
    width: 600px
  }
}

@media (min-width: 1440px) {
  .cont2 {
    width: 800px;
  }
}
</style>