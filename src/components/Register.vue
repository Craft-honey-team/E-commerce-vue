<template>

    <div class="grid grid-cols-2">
    
      <div class="flex flex-col">
        <div class="mb-[8px] text-[30px] h-[45px] flex justify-center ">
          <button @click = "store.comp = 'Login'" class = "bg-blue-500 rounded-[10px] px-2 text-white">Вход</button>  
          <span class = "mx-2">|</span>
          <span class = "bg-gray-300 rounded-[10px] px-2 text-black">Регистрация</span>
        </div>
        <button
          class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black h-[40px]">
          <img class="mr-[8px]" src="@/assets/Googlelogo.svg"> Вход через Google
        </button>
        <input v-model="name" class=" border-2 mb-[10px] rounded-[3px] h-[45px] border-gray-400 " type="text"
          placeholder="Имя пользователя">
        <input v-model="email" class="border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 " type="email"
          placeholder="Email или телефон" />
        <input v-model="password" class="bg border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 "
          type="password" placeholder="Пароль" />
        <input v-model="password2" class=" mb-[30px]  border-2 rounded-[3px] h-[45px] border-gray-400 "
          type="password"  placeholder="Подвердите пароль" /> 
        <button @click="register" :disabled=" name<=2 || password<=2 || email<=5 || password!==password2"
         class=" bg-blue-500 border-2 border-none rounded-[3px] text-white h-[40px] disabled:opacity-60 " >Войти
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
    async register () {
      let obj = {
        method: 'POST',
        header: {
          'Contetnt-Type':'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
      }
      if (this.password2 == this.password){
        
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, obj);
        const res = response.json();
        console.log(res);
        
      }
    }

  }
  
  }

//nikita.akulenko95@gmail.com
</script>
