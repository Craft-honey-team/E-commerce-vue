<template>


	<div class=" ">
		<div class="flex flex-col justify-center [&>*]:px-[10px]">
			<div class = "flex content-center justify-between mt-[8px]">
				<select @change="$router.push(`/${store.lang}/${$route.path.slice(4, $route.path.length)}`)"
						class="text-center h-[32px] w-[70px] bg-[#DAE2E2] border-[2px] border-black rounded-xl hover:cursor-pointer hover:text-amber-700 hover:bg-amber-200 underline-offset-4"
						name="store.lang" id="" v-model="store.lang">
						<option selected disabled hidden>{{ store.lang.toUpperCase() }}</option>
						<option 
							value="ru">RU</option>
						<option 
							value="en">EN</option>
						<option
							value="kg">KG</option>
					</select>
				<button @click="$emit('changeBurger')"
					class="w-fit focus:outline-none text-[24px] text-right hover:text-amber-700 ">
					<strong>X</strong>
				</button>
			</div>
			<router-link :to="`/${store.lang}/Products`" class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4">
				{{ store.langProp.catalogue }}
			</router-link>
			<router-link :to="`/${store.lang}/About`" class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4">
				{{ store.langProp.aboutus }}	
			</router-link>
			<router-link :to="`/${store.lang}/Blog`" class="flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4">
				{{ store.langProp.blog }}
			</router-link>
			<button @click="store.modal = true, $emit('changeBurger'), store.comp = 'Contacts', store.bg = 'bg-white'" class="w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px]  border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4">
				{{ store.langProp.contacts }}
			</button>
		</div>

		<div v-if="!store.loggedIn" class="flex flex-col items-center  border-b-[1px] border-[#BCB9B9] ">
			<button @click="store.bg = 'bg-bee', store.modal = true, $emit('changeBurger'), store.comp = 'Register'"
				class="w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]">
				<img class="w-[24px] h-24[px] mr-[10px] " src="@/assets/Register_1.svg" alt="">{{ store.langProp.registration }}</button>
			<button @click="store.modal = true, $emit('changeBurger'), store.bg = 'bg-bee', store.comp = 'Login'"
				class="border-[2px] border-solid border-black rounded-[8px]  w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]">
				<img class="w-[24px] h-[24px] mr-[10px]" src="@/assets/Enter_1.svg" alt="">{{ store.langProp.login }}</button>
		</div>

		<div v-if="store.loggedIn && !$route.path.includes('Personal')" class="flex justify-center border-b-[1px] border-[#BCB9B9] ">
			<router-link :to='`/${lang}/PersonalArea/${store.uid}`' class="border-[2px] border-solid border-black rounded-[8px] my-4 w-[218px] h-[47px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]">
				<img class="w-[24px] h-[24px] mr-[10px]" src="@/assets/Enter_1.svg" alt="">{{ store.langProp.personalarea }}
			</router-link>
		</div>

		<div class="my-[20px] px-[10px]">
			<div class="grid grid-cols-2 gap-[80px]">						
				<div class="flex items-center">
					<p class="font-inter text-[16px] text-black">+996779454233</p>
				</div>
				<div class="flex justify-around items-center">
					<a href="https://www.instagram.com/crafthoney.kg" target="_blank">
						<img src="@/assets/Instagram.svg" alt="">
					</a>
					<a href="https://wa.me/79146089174" target="_blank">
						<img src="@/assets/WhatsApp.svg" alt="">
					</a>

					<a href="https://t.me/+996779454233" target="_blank">
						<img src="@/assets/Telegram.svg" alt="">
					</a>
				</div>

			</div>
			<p class="my-[10px]">{{ store.langProp.address + ' 770033 ' + store.langProp.kyrgyzstan + ',' }}</p>
			<p class="my-[10px]">{{ store.langProp.street }}</p>
		</div>

	</div>

</template>

<script>

import { useStore } from '@/stores/test'

export default {

	data() {

		return {

			store: useStore(),
			lang: useStore().lang

		}

	},

}

</script>
