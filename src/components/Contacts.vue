<template>

	<div class="grid min-[1100px]:gap-[120px] overflow-scroll [&_*]:font-roboto">
		<div class="">
			<div class="grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] h-[60px]">
				<span class = "bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black">Контакты</span>  
				<span class = "justify-self-center">|</span>
				<button @click = "store.comp = 'Login'" class = "bg-[#EAAD02] rounded-[10px] px-2 text-white">Обратная связь</button>
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
				<div>
					<p class="text-3xl mb-[5px]  font-roboto font-semibold ">Соц. сети:</p>
					<div class="flex items-center mb-[6px]">
						<img class="relative right-[2px] mr-[10px] font-roboto" src="@/assets/Telegram.svg" alt="">
						<p class="text-2xl font-roboto">+996779454233</p>
					</div>
					<div class="flex items-center mb-[10px]">
						<img class="mr-[15px] font-roboto" src="@/assets/WhatsApp.svg" alt="">
						<p class="text-2xl">+79146089174</p>
					</div>
					<div class="flex items-center mb-[10px]">
						<img class="mr-[15px] font-roboto" src="@/assets/Instagram.svg" alt="">
						<p class="text-2xl font-roboto">crafthoney.kg</p>
					</div>
				</div>
				<div>
					<p class="text-3xl mb-[5px]  font-roboto font-semibold">E-mail:</p>
					<p class="text-2xl font-roboto">crafthoneykg@gmail.com</p>
				</div>
			</div>

		</div>
		<div class="grid gap-[30px] hidden">
			<input class="border-solid border-2 rounded-[4px] border-gray-400 w-[490px] text-center"
				type="text" placeholder="Ваше Имя">
			<div class="flex">
				<input
					class="border-solid border-2 rounded-[4px] border-gray-400 mr-[20px] w-[235px] px-[10px]"
					type="text" placeholder="Email">
				<input class="border-solid border-2 rounded-[4px] border-gray-400 w-[235px] px-[10px]"
					type="text" placeholder="Телефон">
			</div>
			<textarea
				class="border-solid border-2 rounded-[4px] border-gray-400 w-[492px] px-[10px] py-[10px] "
				placeholder="Сообщение" name="" id="" cols="30" rows="10"></textarea>
			<button
				class="border-none bg-[#EAAD02] justify-self-center text-white rounded-[5px] px-2 w-[184px]">Отправить</button>
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
