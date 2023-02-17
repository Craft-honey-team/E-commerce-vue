<template>
	<header class="bg-white grid grid-cols-[50%_auto] my-[1vh] max-[800px]:grid-cols-1">

		<div class="grid grid-cols-[auto_50%] items-center max-[400px]:grid-cols-[54%_auto]">

			<div class="flex">
				<router-link class="inline-block" to="/">
					<img class="self-center w-[60px] inline" src="../assets/med2.png" />
					<img class="ml-[10px] self-center w-[100px] inline" src="../assets/CraftHoney.svg" />
				</router-link>
			</div>
			<div v-if="$route.name == 'Home'" class="max-[800px]:grid max-[800px]:grid-cols-[80%_auto]">
				<input
					class="bg-[url('@/assets/search.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] border-2 w-[100%] h-[40px] rounded-[4px] px-4"
					type="text" placeholder="Поиск">
				<img @click="burgerMenu = true" class="justify-self-center self-center min-[801px]:hidden" src="../assets/menu.svg">
			</div>
			<div v-if="$route.name != 'Home'" class="[&>*]:mr-[40px]">
				<router-link to="/Products">Каталог</router-link>
				<router-link to="/about">О нас</router-link>
				<router-link to="/Blog">Блог</router-link>
				<button @click="store.modal = true, store.comp = 'Contacts', store.bg = 'bg-white'">Контакты</button>
			</div>

		</div>

		<div class="grid grid-cols-2 items-center max-[800px]:hidden">
			<div class="justify-self-end">
				<div class="flex">
					<img class="mr-4 justify-self-end self-center inline" src="@/assets/account_circle.svg">
					<button @click="store.modal = true, store.comp = 'Login', store.bg = 'bg-bee'" class="mr-4">Вход</button>
				</div>
			</div>

			<div class="grid grid-cols-2 max-[1200px]:flex max-[1200px]:justify-end">

				<div class="justify-self-end self-center">
					<img class="max-[1200px]:mr-[20px] max-[800px]:hidden" src="@/assets/shopping_cart.svg" alt="">
				</div>

				<div class="justify-self-end">
					<img class="max-[800px]:hidden inline mr-2" src="@/assets/WhatsApp.svg" alt="">

					<img class="max-[800px]:hidden inline mr-2" src="@/assets/Telegram.svg" alt="">

					<img class="max-[800px]:hidden inline" src="@/assets/insta.svg" alt="">
				</div>


			</div>
		</div>
		<div class="right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]" :class="burgerMenu ? 'w-[330px]' : 'w-[0px]'">
			<div class=" ">
				<div class="flex flex-col justify-center [&>*]:px-[10px]">
					<button @click="burgerMenu = false" class=" focus:outline-none mr-2 mt-2 text-[22px] text-right">
            			<strong>X</strong> 
            		</button>
					<router-link to="/Products"
						class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999]">Каталог</router-link>
					<router-link to="/about"
						class="flex items-center w-full h-[46px] border-b-[1px]  border-black font-inter font-[300] text-[22px] text-[#999999]">О
						нас</router-link>
					<router-link to="/Blog"
						class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999]">Блог</router-link>
					<button @click="store.modal = true,burgerMenu = false, store.comp = 'Contacts', store.bg = 'bg-white'"
						class="w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999]">Контакты</button>
				</div>
				<div class="flex flex-col items-center  border-b-[1px] border-[#BCB9B9] ">
					<button @click="store.bg = 'bg-bee', store.modal = true,burgerMenu = false, store.comp = 'Register'"
						class="w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"><img
							class="w-[24px] h-24[px] mr-[10px] " src="src/assets/Register_1.svg" alt="">Регистрация</button>
					<button @click="store.modal = true,burgerMenu = false, store.bg = 'bg-bee', store.comp = 'Login'"
						class="border-[2px] border-solid border-black rounded-[8px]  w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"><img
							class="w-[24px] h-[24px] mr-[10px]" src="src/assets/Enter_1.svg" alt="">Вход</button>
				</div>

				<div class="my-[20px] px-[10px]">
					<div class="grid grid-cols-2 gap-[80px]">
						<div class="flex items-center">
							<p class="font-inter text-[16px] text-black">+996779454233</p>
						</div>
						<div class="flex items-center">
							<img class="w-[20px] h-[20px] mr-[15px]" src="@/assets/WhatsApp.svg" alt="">
							<img class="w-[24px] h-[24px] mt-[3px]" src="@/assets/Telegram.svg" alt="">
						</div>
					</div>
					<p class="my-[10px]">Адрес: 770033,Кыргызстан <br>ул.Киевская,77</p>
					<img class=" " src="@/assets/Instagram.svg" alt="">

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
			burgerMenu: false,
			store: useStore()

		}

	},

	components: {

		Contacts

	}

}

</script>
