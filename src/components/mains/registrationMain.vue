<template>
      <form id="registration-form">
  <input v-model="username" type="text" id="username" placeholder="Имя пользователя" required>
  <input v-model="email" type="email" id="email" placeholder="Электронная почта" required>
  <input v-model="password" type="password" id="password" placeholder="Пароль" required>
  <button type="submit" @click="login()">Зарегистрироваться</button>
</form>
</template>

<script>
import { saveAs } from 'file-saver'; //Импорт функции saveAs из библиотеки FileSaver.js
export default { //Экспорт объекта компонента Vue.js по умолчанию
data(){
  return {
    username: "", // Поле для ввода имени пользователя
    email: "" , // Поле для ввода электронной почты
    password: "" // Поле для ввода пароля
  }
},
methods: {
  login(){
    const user = {username: this.username, email: this.email, password: this.password}
    const jsonData = JSON.stringify(user, null, 2); // Преобразование объекта пользователя в формат JSON
    const blob = new Blob([jsonData], { type: 'application/json' }); // Создание объекта Blob для хранения JSON-данных
    saveAs(blob, 'data.json'); // Сохранение файла с именем "data.json"
  }
}
}
</script>