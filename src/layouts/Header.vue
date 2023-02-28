<template>
	<header class="bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1">

		<div class="grid grid-flow-col gap-[40px] items-center">

			<div>
				<router-link class="flex max-w-fit" :to="`/${store.lang}/Home`">
					<img class="self-center w-[60px] inline" src="../assets/drawing.svg" />
					<img class="ml-[10px] self-center w-[120px] inline" src="../assets/CraftHoney.svg" />
				</router-link>
			</div>

			<div v-if="!$route.path.includes('Home')" class="text-xl [&>a]:mr-[30px] max-[1200px]:hidden">
				<router-link class=" hover:text-amber-700 hover:underline underline-offset-4" :to="`/${store.lang}/Products`">{{ store?.langProp?.catalogue }}</router-link>
				<router-link class=" hover:text-amber-700 hover:underline underline-offset-4" :to="`/${store.lang}/About`">{{ store.langProp.about }}</router-link>
				<router-link class=" hover:text-amber-700 hover:underline underline-offset-4" :to="`/${store.lang}/Blog`">{{ store.langProp.blog }}</router-link>
				<button class=" hover:text-amber-700 hover:underline underline-offset-4" @click="store.modal = true, store.comp = 'Contacts', store.bg = 'bg-white'">{{ store.langProp.contacts }}</button>
			</div>

		</div>

		<div class="grid min-[1201px]:hidden">
			<img @click="burgerMenu = true" class="justify-self-center self-center hover:cursor-pointer"
				src="../assets/menu.svg">
		</div>

		<div class="grid grid-flow-col gap-[40px] items-center max-[1200px]:hidden">

			<div v-if="!store.loggedIn && !$route.path.includes('Personal')" class="flex items-center">
				<img class="mr-[10px] w-[24px]" src="@/assets/account_circle.svg">
				<button class="text-xl text-center  hover:text-amber-700 hover:underline underline-offset-4"
					@click="store.modal = true, store.comp = 'Login', store.bg = 'bg-bee'">{{
						store.langProp.login }}</button>
			</div>

			<div v-if="store.loggedIn && !$route.path.includes('Personal')" class="flex items-center">
				<img class="mr-[10px] w-[24px]" src="@/assets/account_circle.svg">
				<router-link class="text-xl text-center hover:text-amber-700 hover:underline underline-offset-4" :to='`/${store.lang}/PersonalArea/${store.uid}`'>
					{{ store.langProp.profile }}
				</router-link>
			</div>

			<div class="">
				<router-link :to="`/${store.lang}/Checkout`">
					<img class="w-[22px] max-[800px]:hidden " src="@/assets/shopping_cart.svg" alt="">
				</router-link>
			</div>
			<div>
				<p class="text-xl">{{ store.langProp.lang }}: 
					<select class="ml-[8px] h-[32px] w-[56px] bg-[#ffcc00] rounded-xl hover:cursor-pointer px-2 hover:text-amber-700 hover:bg-amber-200 underline-offset-4" name="store.lang" id="">
						<option  selected disabled hidden>{{ store.lang.toUpperCase() }}</option>
						<option  @click="store.lang = 'ru', $router.push(`/ru/${$route.path.slice(4, $route.path.length)}`)" value="">RU</option>
						<option  @click="store.lang = 'en', $router.push(`/en/${$route.path.slice(4, $route.path.length)}`)" value="">EN</option>
						<option  @click="store.lang = 'kg', $router.push(`/kg/${$route.path.slice(4, $route.path.length)}`)" value="">KG</option>
					</select>
				</p>
			</div>
			<div class="grid grid-flow-col gap-[10px] ">
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
			<Burger @changeBurger="changeBurger"/>
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
	
	mounted() {
	
		console.log(this.$route)
		console.log(this.$pinia.state._value.store.uid)
	
	}

}

</script>
