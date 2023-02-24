<template>

	<div class="grid overflow-scroll [&_*]:font-roboto">
		<div class="grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] max-[700px]:grid-cols-1">
			<span class = "bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center">{{	store.langProp.contacts }}</span>  
			<span class = "justify-self-center max-[700px]:hidden">|</span>
			<button @click = "store.comp = 'Feedback'" class = "bg-[#EAAD02] rounded-[10px] px-2 text-white">{{	store.langProp.feedback }}</button>
		</div>
		<div class = "grid grid-cols-2">
			<div>
				<p class="text-3xl mb-[5px] font-semibold font-roboto ">{{	store.langProp.address }}</p>
				<p class="text-2xl font-roboto">770033, {{ store.langProp.kyrgyzstan }}</p>
				<p class="text-2xl mb-[20px] font-roboto">{{ store.langProp.street }}</p>
			</div>
			<div>
				<p class="text-3xl mb-[5px]  font-roboto font-semibold ">{{ store.langProp.telephone }}</p>
				<p class="text-2xl mb-[20px] font-roboto">+996779454233</p>
			</div>
			<div class = "grid auto-rows-min gap-[10px] [&_a]:mr-[10px]">
				<p class="text-3xl font-roboto font-semibold ">{{ store.langProp.socialnetworks }}</p>
				<div class="flex items-center">
					<a href="https://t.me/+996779454233" target="_blank">
						<img class="inline" src="@/assets/Telegram.svg" alt="">
					</a>
					<p class="text-2xl font-roboto">+996779454233</p>
				</div>
				<div class="flex items-center">
					<a href="https://wa.me/79146089174" target="_blank">
						<img class="inline" src="@/assets/WhatsApp.svg" alt="">
					</a>
					<p class="text-2xl">+79146089174</p>
				</div>
				<div class="flex items-center">
					<a href="https://www.instagram.com/crafthoney.kg" target="_blank">
						<img class="inline" src="@/assets/Instagram.svg" alt="">
					</a>
					<p class="text-2xl font-roboto">crafthoney.kg</p>
				</div>
			</div>
			<div>
				<p class="text-3xl mb-[5px]  font-roboto font-semibold">E-mail:</p>
				<p class="text-2xl font-roboto">crafthoneykg@gmail.com</p>
			</div>
		</div>
	</div>


</template>

<script>

import { useStore } from '@/stores/test'

export default {
   props: {
      buttonName: String
   },
   data: () => {
      return {
         contact: false,
         store: useStore()
      }
   },
   methods: {
      showContacts() {
         this.contact = true
      },
      closeModal() {
         this.contact = false
      }
   },
}

</script>
