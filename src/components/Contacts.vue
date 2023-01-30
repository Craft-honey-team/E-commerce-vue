<template>


	
	<div v-if="store.modal" class = "fixed inset-0 flex justify-center items-center">
	<div @click="store.modal = false"  v-if="store.modal" class="fixed z-[1] inset-0 flex justify-center bg-black bg-opacity-80"></div>   
	   <div class="bg-white z-[11] w-full w-[40%] rounded-[10px]">
	   
		     <div class="p-2  text-right">
		        <button @click="store.modal = false" class="w-10 h-10 p-2 focus:outline-none text-[29px]"> <strong>X</strong> </button>
		     </div>
		     <div class="pb-4 flex flex-col items-center">
		        <p>Телеграмм: +996779454233</p>
		        <p>Вотсап: +79146089174</p>
		        <p>Инстаграм: zhumataev.nursultan</p>
		        <p class="mb-10">Почта: zhumataev.nursultan22@gmail.com</p>
		        <p class="mb-1">Обратная связь</p>
		        <textarea class="border-black border-2 border-solid rounded-[5px] mb-1" name="" id="" cols="30" rows="10"></textarea>
		        <input class="border-black border-2 border-solid rounded-[5px] mb-1 px-2 "  type="text" placeholder="введите номер телефона">
		        <button class="border-black border-2 border-solid rounded-[5px] mb-5 px-2">Отправить сообщение</button>
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
