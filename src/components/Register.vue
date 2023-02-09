<template>

  <div class="grid grid-cols-2">

    <div class="flex flex-col">
      <div class="mb-[8px] text-[30px] h-[45px] ">
        <h1 class="font-roboto">Регистрация</h1>
      </div>
      <button
        class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black h-[40px]">
        <img class="mr-[8px]" src="@/assets/Googlelogo.svg">
        <p class="font-roboto ml-2">Вход через Google</p>
      </button>
      <input v-model="name" class=" font-roboto border-2 mb-[10px] rounded-[3px] h-[45px] border-gray-400 " type="text"
        placeholder="  Имя пользователя">
      <input v-model="email" class=" font-roboto border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 " type="text"
        placeholder="  Email или телефон*" />
      <input v-model="password" class="font-roboto bg border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 "
        type="password" placeholder=" Пароль*" />
      <input v-model="password2" class="font-roboto mb-[30px] border-2 rounded-[3px] h-[45px] border-gray-400 "
        type="password" placeholder="  Подвердите пароль*" />
      <button @click="sendData"
        class=" font-roboto mb-[8%] bg-blue-500 border-2 border-none rounded-[3px] text-white h-[40px] ">Войти
      </button>
      <p class="font-roboto">У вас уже есть аккаунт?<router-link to="/"
          class="text-blue-500 underline underline-offset-4 ml-[10px] font-roboto">Войти</router-link></p>

    </div>
  </div>



</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      name: '',
      password: '',
      password2: '',
      email: ''
    }
  },
  methods: {
    sendData() {
      fetch('http://35.79.227.198/api/accounts/register/', {
        method: 'POST',
        body: JSON.stringify({ data: { 'name': this.name, 'password': this.password, 'password2': this.password2 } }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>
