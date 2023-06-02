<template class="logMain">
      <form id="registration-form">
  <input v-model="username" type="text" id="username" placeholder="Имя пользователя" required>
  <input v-model="email" type="email" id="email" placeholder="Электронная почта" required>
  <input v-model="password" type="password" id="password" placeholder="Пароль" required>
  <button type="submit" @click="login()">Авторизироваться</button>
</form>
</template>

<script>
</script>