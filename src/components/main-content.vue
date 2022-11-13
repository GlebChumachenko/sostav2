<template>
  <section>
    <div class="cont2">
      <change-squad-btns/>
      <players-info/>
    </div>
  </section>
</template>

<script>
import changeSquadBtns from "@/components/change-squad-btns";
import playersInfo from "@/components/players-info";
export default {
  components: {
    changeSquadBtns,
    playersInfo
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
</style>