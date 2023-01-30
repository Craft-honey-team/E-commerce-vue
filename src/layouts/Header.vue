<template>
   <header class="bg-white grid grid-cols-[50%_auto] my-[1vh] max-[800px]:grid-cols-1">
    
    	<div class = "grid grid-cols-[auto_50%] items-center max-[400px]:grid-cols-[54%_auto]">
    	
		     <div class = "flex">
		     	<router-link class = "inline-block" to="/">
		        <img class = "self-center w-[60px] inline" src = "../assets/med2.png"/>
		        <img class = "ml-[10px] self-center w-[100px] inline" src = "../assets/CraftHoney.svg"/>
		        </router-link>
		     </div>
		     <div v-if = "$route.name == 'Home'" class = "max-[800px]:grid max-[800px]:grid-cols-[80%_auto]">
		        <input class="bg-[url('@/assets/search.png')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] border-2 w-[100%] h-[40px] rounded-[4px] px-4" type="text" placeholder="Поиск">
		        <img class = "justify-self-center self-center min-[801px]:hidden" src = "../assets/menu.svg">
		     </div>
		     <div v-if = "$route.name != 'Home'" class = "[&>*]:mr-[40px]">
		     	<router-link to = "/Products">Каталог</router-link>
		     	<router-link to = "/about">О нас</router-link>
		     	<router-link to = "/about">Блог</router-link>
				<button @click = "store.modal = true">Контакты</button>
		     </div>
		     
    	</div>
    	
    	<div class = "grid grid-cols-2 items-center max-[800px]:hidden">
    	      <div class = "justify-self-end">
    	      		<div class = "flex">
			  			<img class = "mr-4 justify-self-end self-center inline" src = "@/assets/account_circle.png">
			  			<span class = "justify-self-start">Личный кабинет</span>
			  		</div>
			  </div>
		   
			  <div class = "grid grid-cols-2 max-[1200px]:flex max-[1200px]:justify-end">
			  		
			  		<div class = "justify-self-end self-center">
				    	<img class="max-[1200px]:mr-[20px] max-[800px]:hidden" src="@/assets/shopping_cart.png" alt="">
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
