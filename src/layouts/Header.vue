<template>

   <header class="bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1">
    
    	<div class = "grid grid-flow-col gap-[100px] items-center max-[1300px]:gap-[40px] max-[400px]:grid-cols-[54%_auto]">
    	
	     <div>
		<router-link class = "flex max-w-fit" to="/">
		<img class = "self-center w-[60px] inline" src = "../assets/drawing.svg"/>
		<img class = "ml-[10px] self-center w-[120px] inline" src = "../assets/CraftHoney.svg"/>
		</router-link>
	     </div>
	     
	     <div v-if = "$route.name != 'Home'" class = "text-xl [&>a]:mr-[30px] max-[1050px]:hidden">
		<router-link to = "/Products">Каталог</router-link>
		<router-link to = "/about">О нас</router-link>
		<router-link to = "/Blog">Блог</router-link>
		<button @click = "store.modal = true, store.comp = 'Contacts', store.bg = 'bg-white'">Контакты</button>
	     </div>
		     
    	</div>

    	<div class = "grid min-[1051px]:hidden">
		<img class = "justify-self-center self-center " src = "../assets/menu.svg">
	</div>

    	<div class = "flex items-center justify-end max-[1050px]:hidden">
		
		<div class = "flex items-center mr-[100px] max-[1300px]:mr-[40px]">
			<img class = "mr-[10px] w-[24px]" src = "@/assets/account_circle.svg">
			<button class = "text-xl text-center" @click = "store.modal = true, store.comp = 'Login', store.bg = 'bg-bee'">Вход</button>
		</div>
	
		<div class = "mr-[100px] max-[1300px]:mr-[40px]">
			<router-link to = "/Checkout"> 
			<img class="w-[22px] max-[800px]:hidden" src="@/assets/shopping_cart.svg" alt="">
			</router-link>
		</div>
	
		<div class = "grid grid-flow-col gap-[10px]">
			<a href="https://wa.me/79146089174" target="_blank">
				<img src="@/assets/WhatsApp.svg" alt="">
			</a>

			<a href="https://t.me/+996779454233" target="_blank">
				<img src="@/assets/Telegram.svg" alt="">
			</a>

			<a href="https://www.instagram.com/crafthoney.kg" target="_blank">
				<img src="@/assets/Instagram.svg" alt="">
			</a>
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
