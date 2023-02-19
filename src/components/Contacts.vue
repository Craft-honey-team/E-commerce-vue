<template>

	<div class="grid min-[1100px]:gap-[120px] overflow-scroll [&_*]:font-roboto">
		<div class="grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] h-[60px]">
			<span class = "bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black">Контакты</span>  
			<span class = "justify-self-center">|</span>
			<button @click = "store.comp = 'Feedback'" class = "bg-[#EAAD02] rounded-[10px] px-2 text-white">Обратная связь</button>
		</div>
		<div class = "grid grid-cols-2">
			<div>
				<p class="text-3xl mb-[5px] font-semibold font-roboto ">Адрес:</p>
				<p class="text-2xl font-roboto">770033, Кыргызстан</p>
				<p class="text-2xl mb-[20px] font-roboto">ул.Киевская 77</p>
			</div>
			<div>
				<p class="text-3xl mb-[5px]  font-roboto font-semibold ">Телефон:</p>
				<p class="text-2xl mb-[20px] font-roboto">+996779454233</p>
			</div>
			<div class = "grid auto-rows-min gap-[10px] [&_a]:mr-[10px]">
				<p class="text-3xl font-roboto font-semibold ">Соц. сети:</p>
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
