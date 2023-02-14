<template>

    <div class="grid grid-cols-2 [&_*]:font-roboto [&_input]:mb-[20px] [&_input]:pl-[8px]">
    
      <div class="flex flex-col">
        <div class="mb-[20px] text-[30px] h-[45px] flex justify-center ">
          <button @click = "store.comp = 'Login'" class = "bg-[#EAAD02] rounded-[10px] px-2 text-white">Вход</button>  
          <span class = "mx-2">|</span>
          <span class = "bg-gray-200 rounded-[10px] px-2 text-black">Регистрация</span>
        </div>
        <button
          class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-gray-100 text-black h-[40px]">
          <!--bg-[#E3EDFE]-->
          <img src="@/assets/Googlelogo.svg">
        	<p class="ml-2">Вход через Google</p>
        </button>
        <input v-model="name" class=" border-2 rounded-[3px] h-[45px] border-gray-400 " type="text"
          placeholder="Имя пользователя">
        <input v-model="email" class="border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 " type="email"
          placeholder="Email или телефон" />
        <input v-model="password" class="bg border-2 rounded-[3px] mb-[10px] h-[45px] border-gray-400 "
          type="password" placeholder="Пароль" />
        <input v-model="password2" class="mb-[30px] border-2 rounded-[3px] h-[45px] border-gray-400 "
          type="password" placeholder="Подвердите пароль" />
        <button @click="sendData"
          class=" bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[40px] ">Войти
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
      store: useStore()
    }
  },
  methods: {
    async sendData() {
    	let data = JSON.stringify({ 
			
				"username": this.name,
				"password": this.password,
				"password2": this.password2,
				"email": this.email
			
			});
		console.log(data);
		await fetch('http://18.176.59.117/api/accounts/register/', {
		
			method: 'POST',
			body: data,
			headers: {
			
				'Content-Type': 'application/json'
			
			}
			
		});
		
		console.log(response.json());
    },
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
        this.loading = false;
      }
    }
  }
}
//nikita.akulenko95@gmail.com
</script>
