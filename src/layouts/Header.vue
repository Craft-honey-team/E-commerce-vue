<template>
	<header :class = "{'border-black border-b-[3px] pb-[20px]': !$route.path.includes('Home')}" class="bg-white flex justify-between mt-[10px] pb-[10px] max-[800px]:grid-cols-1">

		<div class="grid grid-flow-col gap-[40px] items-center">

			<div>
				<router-link class="flex max-w-fit" :to="`/${store.lang}/Home`">
					<img class="self-center w-[40px] inline" src="../assets/drawing.svg" />
					<img class="ml-[10px] self-center w-[120px] inline" src="../assets/CraftHoney1.svg" />
				</router-link>
			</div>

			<div v-if="!$route.path.includes('Home')" class="text-xl [&>a]:mr-[30px] max-[1300px]:hidden">
				<router-link class=" hover:text-amber-700 hover:underline underline-offset-4"
					:to="`products`">{{ store?.langProp?.catalogue }}</router-link>
				<router-link class=" hover:text-amber-700 hover:underline underline-offset-4"
					:to="`/${store.lang}/About`">{{ store.langProp.about }}</router-link>
				<router-link class=" hover:text-amber-700 hover:underline underline-offset-4" :to="`/${store.lang}/Blog`">{{
					store.langProp.blog }}</router-link>
				<button class=" hover:text-amber-700 hover:underline underline-offset-4"
					@click="store.modal = true, store.comp = 'Contacts', store.bg = 'bg-white'">{{ store.langProp.contacts
					}}</button>
			</div>

		</div>

		<div class="grid grid-flow-col gap-[20px] min-[1301px]:hidden">
			<div class = "self-center">
				<router-link :to="`/${store.lang}/Checkout`">
					<div class="relative">
						<img class="w-[22px]" src="@/assets/shopping_cart.svg" alt="">
						<div v-if="Object.keys(store.cart).length"
							class="absolute h-[18px] w-[18px] top-[-9px] left-[12px] rounded-full bg-red-600 flex justify-center align-center text-white ">
							<span class="text-[12px]">{{ Object.keys(store.cart).length }}</span>
						</div>
					</div>

				</router-link>
			</div>
			<div class = "self-center">
				<img @click="burgerMenu = true" class="justify-self-center self-center hover:cursor-pointer"
					src="../assets/menu.svg">
			</div>
		</div>

		<div class="grid grid-flow-col gap-[40px] items-center max-[1300px]:hidden">

			<div v-if="!store.loggedIn && !$route.path.includes('Personal')" class="flex items-center">
				<img class="mr-[10px] w-[24px]" src="@/assets/account_circle.svg">
				<button class="text-xl text-center  hover:text-amber-700 hover:underline underline-offset-4"
					@click="store.modal = true, store.comp = 'Login', store.bg = 'bg-bee'">{{ store.langProp.login }}</button>
			</div>

			<div v-if="store.loggedIn && !$route.path.includes('Personal')" class="flex items-center">
				<img class="mr-[10px] w-[24px]" src="@/assets/account_circle.svg">
				<router-link class="text-xl text-center hover:text-amber-700 hover:underline underline-offset-4"
					:to='`/${store.lang}/PersonalArea/${store.uid}`'>
					{{ store.langProp.personalarea }}
				</router-link>
			</div>

			<div>
				<router-link :to="`/${store.lang}/Checkout`">
					<div class="relative">
						<img class="w-[22px]" src="@/assets/shopping_cart.svg" alt="">
						<div v-if="Object.keys(store.cart).length"
							class="absolute h-[18px] w-[18px] top-[-9px] left-[12px] rounded-full bg-red-600 flex justify-center align-center text-white ">
							<span class="text-[12px]">{{ Object.keys(store.cart).length }}</span>
						</div>
					</div>

				</router-link>
			</div>
			<div>
				<p class="text-xl [&_*]:text-center">{{ store.langProp.lang }}:
					<select @change="$router.push(`/${store.lang}/${$route.path.slice(4, $route.path.length)}`)"
						class="ml-[8px] h-[32px] w-[70px] bg-[#ffcc00] rounded-xl hover:cursor-pointer hover:text-amber-700 hover:bg-amber-200 underline-offset-4"
						name="store.lang" id="" v-model="store.lang">
						<option selected disabled hidden>{{ store.lang.toUpperCase() }}</option>
						<option 
							value="ru">RU</option>
						<option 
							value="en">EN</option>
						<option
							value="kg">KG</option>
					</select>
				</p>
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
			<Burger @changeBurger="changeBurger" />
		</div>


	</header>
</template>

<script>

import Contacts from '@/components/Contacts.vue'
import Burger from '@/components/Burger.vue'
import { useStore } from '@/stores/test'

export default {

	beforeRouteEnter(to, from) {


	},

	data() {

		return {

			burgerMenu: false,
			products: "/${store.lang}/Products",
			store: useStore()

		}

	},

	methods: {

		changeBurger() {

			this.burgerMenu = false;

		}

	},

	components: {

		Contacts,
		Burger

	},

}

</script>
