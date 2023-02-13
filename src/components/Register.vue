<template>

  <div class="grid grid-cols-2">

    <div class="flex flex-col">
      <div class="mb-[40px] text-[30px] h-[45px] flex justify-center ">
        <button @click="store.comp = 'Login'"
          class="bg-blue-500 rounded-[10px] px-2 text-white  hover:text-amber-700">Вход</button>
        <span class="mx-2">|</span>
        <span class="bg-gray-300 rounded-[10px] px-2 text-black  hover:text-amber-700">Регистрация</span>
      </div>
      <button
        class="mb-[20px] font-roboto border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black h-[40px]  hover:text-amber-700">
        <img class="mr-[8px]" src="@/assets/Googlelogo.svg"> Вход через Google
      </button>
      <input v-model="name" class=" px-[8px] font-roboto border-2 mb-[10px] rounded-[3px] h-[45px] border-gray-400 "
        type="text" placeholder="Имя пользователя">
      <input v-model="email" class="px-[8px] font-roboto border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 "
        type="email" placeholder="Email или телефон" />
      <!-- <input v-model="password" class="px-[8px] font-roboto bg border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 "
          type="password" placeholder="Пароль" /> -->
      <div class="relative mb-[10px]">
        <input v-model="password"
          class=" w-[300px] px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400"
          required v-bind:type="showPassword ? 'text' : 'password'" placeholder="Пароль" />
        <button @click="showPassword = !showPassword" class="buttonPass absolute right-[30px] top-0 bottom-0"><img
            src="src/assets/visibility_off.svg" alt=""></button>

      </div>
      <!-- <input v-model="password2"
        class=" px-[8px] font-roboto mb-[30px]  border-2 rounded-[3px] h-[45px] border-gray-400 " type="password"
        placeholder="Подвердите пароль" /> -->

      <div class="relative mb-[10px]">
        <input v-model="password2"
          class=" w-[300px] px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400"
          required v-bind:type="showPassword ? 'text' : 'password'" placeholder="Подвердите пароль" />
        <button @click="showPassword = !showPassword" class="buttonPass absolute right-[30px] top-0 bottom-0"><img
            src="src/assets/visibility_off.svg" alt=""></button>

      </div>

      <button @click="register" :disabled="name <= 2 || password <= 2 || email <= 5 || password !== password2"
        class=" bg-blue-500 border-2 border-none rounded-[3px] text-white h-[40px] disabled:opacity-60 ">Войти
      </button>

    </div>
  </div>



</template>

<script>
import { useStore } from '@/stores/test'
export default {
  data() {
    return {
      showModal: false,
      name: '',
      password: '',
      password2: '',
      email: '',
      showPassword: false,
      store: useStore()

    }
  },
  mounted() {
    console.log(import.meta.env.VITE_FIREBASE_API_KEY)
  },
  methods: {
    async register() {
      let obj = {
        method: 'POST',
        header: {
          'Contetnt-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
      }
      if (this.password2 == this.password) {

        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, obj);
        const res = response.json();
        console.log(res);

      }
    }
  }
}


//nikita.akulenko95@gmail.com
</script>
