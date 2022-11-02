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
        <p class="team-info">Team title</p>
        <p class="team-info">Team city</p>
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
  </section>
    <p class="v-score">{{ inthomescore }}  {{ intawayscore }}</p>
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
  background-color: #2c3e50;
  padding: 0 14px;
  height: 60px;
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
  width: 700px;
  margin: 0 auto;
}

.cont2{
  margin: 0 auto;
  width: 670px;
  background-color: white;
}

.team-logo {
  margin-top: 100px;
  height: 200px;
  width: 200px;
  background-size: 100%;
  background-image: url("../assets/image.png");
}

.team-info{
  margin-left: 50px;
  margin-top: 0;
  margin-bottom: 5px;
}

.change-btns {
  display: flex;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 0;
}


.change-btn2{
  font-size: 20px;
  background-color: white;
  color: black;
  border: 0;
  margin-left: 10px;
  margin-bottom: 0 ;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  transition: all 0.2s ease;
}

.change-btn1{
  font-size: 20px;
  background-color: #2c3e50;
  color: white;
  border: 0;
  margin-bottom: 0;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btns{
  display: flex;
  padding: 30px 50px;
}

.squad-btn1 {
  height: 30px;
  width: 170px;
  flex-grow: 1;
  margin-right: 40px;
  border: 0;
  border-color: darkgray;
  background-color: darkorange;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btn1:hover{
  background-color: chocolate;
}

.squad-btn2 {
  height: 30px;
  width: 170px;
  flex-grow: 1;
  margin-left: 40px;
  border-style: solid;
  border-color: darkgray;
  background-color: white;
  color: darkgray;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.squad-btn2:hover{
  background-color: darkgray;
  color: white;
}

.player-info {
  display: flex;
  margin: 20px 50px;
}
.player-number {
  border-radius: 5px;
  width: 50px;
  height: 50px;

  background-color: #2c3e50;
  color: white;
  border: 0;
}

.player-name {
  font-size: 20px;
  margin: 0px 20px 0px 30px;
}

.player-role {
  font-size: 15px;
  margin: 0px 20px 20px 30px;
  color: darkgrey;
}

.v-score {
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
}

</style>
