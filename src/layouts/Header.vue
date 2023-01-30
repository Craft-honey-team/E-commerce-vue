<template>
   <header class="bg-white grid grid-cols-[50%_auto] my-[1vh]">
    
    	<div class = "grid grid-cols-[auto_50%] items-center">
    	
		     <div class = "flex">
		     	<router-link class = "inline-block" to="/">
		        <img class = "self-center w-[60px]" src = "../assets/med2.png"/>
		        </router-link>
		     </div>
		     <div v-if = "$route.name == 'Home'">
		        <input class="bg-[url('@/assets/search.png')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] border-2 w-[100%] h-[40px] rounded-[4px] px-4" type="text" placeholder="Поиск по сайту">
		     </div>
		     <div v-if = "$route.name != 'Home'">
		     	<router-link to = "/Products">Каталог</router-link>
		     	<router-link to = "/about">О нас</router-link>
		     	<router-link to = "/about">Блог</router-link>
				<button @click = "store.modal = true">Контакты</button>
		     </div>
		     
    	</div>
    	
    	<div class = "grid grid-cols-2 items-center">
    	      <div class = "justify-self-end">
    	      		<div class = "flex">
			  			<img class = "mr-4 justify-self-end self-center inline" src = "@/assets/account_circle.png">
			  			<span class = "justify-self-start">Личный кабинет</span>
			  		</div>
			  </div>
		   
			  <div class = "grid grid-cols-2">
			  		
			  		<div class = "justify-self-end self-center">
				    	<img class="max-[800px]:hidden" src="@/assets/shopping_cart.png" alt="">
			  		</div>
			  		
			  		<div class = "justify-self-end">
							<img class="max-[800px]:hidden inline mr-2" src="@/assets/WhatsApp.png" alt="">
							
							<img class="max-[800px]:hidden inline mr-2" src="@/assets/Telegram.png" alt="">
					   
							<img class="max-[800px]:hidden inline" src="@/assets/insta.svg" alt="">
			  		</div>


			  </div>
		</div>
   </header>
</template>

<script>

import Contacts from '@/components/Contacts.vue'
import { useStore } from '@/stores/test'
   
export default {

	data() {
	
		return {
		
			store: useStore()
		
		}
	
	},

	components: {
	
		Contacts
	
	}

}
   
</script>
