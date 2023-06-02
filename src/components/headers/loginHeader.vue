<template>
  <section class="mainHeader">
    <button type="button" class="menuButton">
      <img src="./assets/menu.svg" alt="Иконка" class="menuImg">
    </button>
  <router-link to="/">
    <img src="./assets/logo.svg" alt="Иконка">
  </router-link>
    <article class="searchStr">
    </article>
    <p class="authorization">
      <router-link to="/registration/" style="text-decoration: none; color: black">Регистрация</router-link>/
      <router-link to="/login/" style="color: blue">Авторизация</router-link>
    </p>
  </section>
</template>


<script>
</script>

<style>
.mainHeader {
  border-bottom: 2px solid;
}

.menuButton {
  margin-right: 5%;
  border-left: none;
  border-top: none;
  border-bottom: 0.01px solid;
  border-right: 2px solid;
}

.authorization{
  position: absolute;
  margin-left: 80.5%;
  margin-top: -3.15%;
  font-size: 30px;
}
</style>