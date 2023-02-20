<template>
	<header class="bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1">

		<div class="grid grid-flow-col gap-[100px] items-center max-[1300px]:gap-[40px] max-[400px]:grid-cols-[54%_auto]">

			<div>
				<router-link class="flex max-w-fit" to="/">
					<img class="self-center w-[60px] inline" src="../assets/drawing.svg" />
					<img class="ml-[10px] self-center w-[120px] inline" src="../assets/CraftHoney.svg" />
				</router-link>
			</div>

			<div v-if="$route.name != 'Home'" class="text-xl [&>a]:mr-[30px] max-[1050px]:hidden">
				<router-link to="/Products">{{ store.langProp[store.lang].catalogue }}</router-link>
				<router-link to="/about">{{ store.langProp[store.lang].about }}</router-link>
				<router-link to="/Blog">{{ store.langProp[store.lang].blog }}</router-link>
				<button @click="store.modal = true, store.comp = 'Contacts', store.bg = 'bg-white'">{{
					store.langProp[store.lang].contacts }}</button>
			</div>

		</div>

		<div class="grid min-[1051px]:hidden">
			<img @click="burgerMenu = true" class="justify-self-center self-center hover:cursor-pointer"
				src="../assets/menu.svg">
		</div>

		<div class="flex items-center justify-end max-[1050px]:hidden">

			<div class="flex items-center mr-[100px] max-[1300px]:mr-[40px]">
				<img class="mr-[10px] w-[24px]" src="@/assets/account_circle.svg">
				<button class="text-xl text-center"
					@click="store.modal = true, store.comp = 'Login', store.bg = 'bg-bee'">{{
						store.langProp[store.lang].entrance }}</button>
			</div>

			<div class="mr-[100px] max-[1300px]:mr-[40px]">
				<router-link to="/Checkout">
					<img class="w-[22px] max-[800px]:hidden" src="@/assets/shopping_cart.svg" alt="">
				</router-link>
			</div>

			<div class="grid grid-flow-col gap-[10px]">
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
		<div class="right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]"
			:class="burgerMenu ? 'w-[330px]' : 'w-[0px]'">
			<div class=" ">
				<div class="flex flex-col justify-center [&>*]:px-[10px]">
					<button @click="burgerMenu = false"
						class="self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right">
						<strong>X</strong>
					</button>
					<router-link to="/Products"
						class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999]">Каталог</router-link>
					<router-link to="/about"
						class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999]">О
						нас</router-link>
					<router-link to="/Blog"
						class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999]">Блог</router-link>
					<button @click="store.modal = true, burgerMenu = false, store.comp = 'Contacts', store.bg = 'bg-white'"
						class="w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999]">Контакты</button>
				</div>
				<div class="flex flex-col items-center  border-b-[1px] border-[#BCB9B9] ">
					<button @click="store.bg = 'bg-bee', store.modal = true, burgerMenu = false, store.comp = 'Register'"
						class="w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"><img
							class="w-[24px] h-24[px] mr-[10px] " src="@/assets/Register_1.svg" alt="">Регистрация</button>
					<button @click="store.modal = true, burgerMenu = false, store.bg = 'bg-bee', store.comp = 'Login'"
						class="border-[2px] border-solid border-black rounded-[8px]  w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]">
						<img class="w-[24px] h-[24px] mr-[10px]" src="@/assets/Enter_1.svg" alt="">Вход</button>
				</div>

				<div class="my-[20px] px-[10px]">
					<div class="grid grid-cols-2 gap-[80px]">
						<div class="flex items-center">
							<p class="font-inter text-[16px] text-black">+996779454233</p>
						</div>
						<div class="flex justify-around items-center">
							<a href="https://wa.me/79146089174" target="_blank">
								<img src="@/assets/WhatsApp.svg" alt="">
							</a>

							<a href="https://t.me/+996779454233" target="_blank">
								<img src="@/assets/Telegram.svg" alt="">
							</a>
						</div>

					</div>
					<p class="my-[10px]">Адрес: 770033,Кыргызстан <br>ул.Киевская,77</p>
					<a href="https://www.instagram.com/crafthoney.kg" target="_blank">
						<img src="@/assets/Instagram.svg" alt="">
					</a>
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
