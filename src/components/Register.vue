<template>

    <div class="grid grid-cols-2 [&_*]:font-roboto [&_input]:mb-[20px] [&_input]:pl-[8px]">
    
      <div class="flex flex-col">
        <div class="mb-[20px] text-[30px] h-[45px] flex justify-center ">
          <button @click = "store.comp = 'Login'" class = "bg-blue-500 rounded-[10px] px-2 text-white">Вход</button>  
          <span class = "mx-2">|</span>
          <span class = "bg-gray-300 rounded-[10px] px-2 text-black">Регистрация</span>
        </div>
        <button
          class="mb-[20px] border-2 flex items-center justify-center  rounded-[3px] border-none bg-[#E3EDFE] text-black h-[40px]">
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
          class=" bg-blue-500 border-2 border-none rounded-[3px] text-white h-[40px] ">Войти
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
		await fetch('http://35.79.227.198/api/accounts/register/', {
		
			method: 'POST',
			body: data,
			
		});
		
		console.log(response.json());
    }
  }
}
//nikita.akulenko95@gmail.com
</script>
