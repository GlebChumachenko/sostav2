<template>
    <header class = "header">
      <div class="head">
        <h1 class = "h1">Logo</h1>
        <button class="btn" type="submit"> Войти </button>
      </div>
    </header>
    <section>
      <div class="cont">
        <div class="team-logo"/>
        <div class="change-btns">
          <button class="change-btn1">Обзор</button>
          <button class="change-btn2">Состав</button>
        </div>
      </div>
    </section>
  <section>
    <div class="cont2">
      <div class="squad-btns">
        <button class="squad-btn1">Основной состав</button>
        <button class="squad-btn2">Запасные игроки</button>
      </div>
      <div class="players-info">
        <div class="all-players-info">
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
          <div class="player-info">
            <button class="player-number">12</button>
            <div>
              <h2 class="player-name">ФИО</h2>
              <h3 class="player-role">Роль в команде</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <p class="v-score">{{ inthomescore }}  {{ intawayscore }}</p>
  <footer></footer>
</template>

<script>
export default {
  name: "v-score",
  props: {
    inthomescore:{
      type: Number,
      defaul(){
        return 0
      }
    },
    intawayscore:{
      type: Number,
      defaul(){
        return 0
      }
    },
    state_score:{
      type: Boolean,
      defaul(){
        return false
      }
    }
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>

header {
  background-color: rgb(49, 57, 102);
  padding: 0 32px;
  height: 72px;
  margin-bottom: 32px;
}

.head{
  display: flex;
}

.h1{
  margin-bottom: 17px;
  margin-top: 17px;
  font-weight: 900;
  height: 26px;
  width: 64px;
  font-family: 'Arial', sans-serif;
  color: white;
  flex-grow: 1;
}

.btn{
  margin-bottom: 17px;
  margin-top: 17px;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 0;
  height: 32px;
  width: 76px;
  border-radius: 10px;
  transition: all 0.2s ease;
}
.btn:hover{
  background-color: darkgray;
}

.cont {
  width: 800px;
  margin: 0 auto;
}

.cont2{
  margin: 0 auto;
  width: 800px;
  background-color: white;
  border-radius: 8px;
}

.team-logo {
  height: 118px;
  width: 128px;
  margin-bottom: 32px;
  background-size: 100%;
  background-image: url("../assets/image.png");
}

.change-btns {
  display: flex;
  margin-top: 10px;
  margin-bottom: 0;
}


.change-btn1{
  font-size: 15px;
  background-color: #e7e7e7;
  color: darkgrey;
  border: 0;
  margin: 0px 16px 0px 8px;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s ease;
}

.change-btn2{
  font-size: 15px;
  background-color:  rgb(49, 57, 102);
  color: white;
  border: 0;
  margin: 0px 8px 0px 16px;
  padding: 12px 20px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btns{
  display: flex;
  padding: 30px 49px 0px 49px;
}

.squad-btn1 {
  font-size: 15px;
  height: 36px;
  width: 120px;
  padding: 10px;
  flex-grow: 1;
  margin-right: 33px;
  border: 0;
  background-color: rgb(246, 168, 0);
  color: black;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btn1:hover{
  background-color: rgb(249, 218, 151);
}

.squad-btn2 {
  font-size: 15px;
  height: 36px;
  width: 120px;
  padding: 10px;
  flex-grow: 1;
  margin-left: 33px;
  border-style: solid;
  border-color: darkgray;
  background-color: white;
  color: darkgray;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btn2:hover{
  background-color: darkgray;
  color: white;
}

.player-info {
  display: flex;
  margin-bottom: 16px;
}

.players-info {
  padding: 20px;
}

.player-number {
  font-size: 20px;
  margin-right: 24px;
  width: 48px;
  height: 48px;
  background-color: rgb(49, 57, 102);
  color: white;
  border: 0;
  border-radius: 4px;
  padding: 15px;
}

.player-name {
  width: 30px;
  height: 12px;
  font-size: 16px;
  margin: 2px 20px 0px 13px;
}

.player-role {
  width: 136px;
  height: 13px;
  font-size: 16px;
  margin: 8px 20px 15px 13px;
  color: darkgrey;
}

footer {
  height: 204px;
  padding: 32px;
  background-color: rgb(49, 57, 102);
}

.v-score {
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
}

</style>
