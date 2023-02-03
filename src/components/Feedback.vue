<template>
   
   <div v-if="store.feedback" class = "fixed z-[12] inset-0 flex justify-center items-center">
   <div @click="store.feedback = false" class="absolute z-5 inset-0  bg-black bg-opacity-80"></div>

   <div
      class="bg-gray-100 px-[60px] absolute z-10 rounded-[10px] w-[1020px] h-[640px]">
      <div class="p-2  text-right">
         <button @click="store.feedback = false" class="w-10 h-10 p-2 mr-[-40px] focus:outline-none text-[29px]">
            <strong>X</strong> </button>
      </div>
      <div class="flex flex-col items-center ">
         <h2 class="w-[400px] h-[38px] text-3xl text-center mb-[80px] font-roboto">Свяжитесь с нами</h2>
         <input v-model="inputValueName" class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] w-[490px] h-[52px] text-center"
            type="text" placeholder="Ваше Имя">
         <div class="flex">
            <input v-model="inputValueMail"
               class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] mr-[20px] w-[235px] h-[52px] px-[10px]"
               type="text" placeholder="Email">
            <input v-model="inputValuePhone" class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] w-[235px] h-[52px] px-[10px]"
               type="text" placeholder="Телефон">
         </div>
         <textarea
            class="border-solid border-2 rounded-[4px] border-gray-400 mb-[20px] w-[492px] h-[139px] px-[10px] py-[10px] "
            placeholder="Сообщение" name="" id="" cols="30" rows="10"></textarea>
         <div class="flex ">
            <button
               class="border-none bg-green-500 text-white rounded-[5px] mb-5 px-2 w-[235px] h-[45px]">Отправить</button>
            <button @click="clearInput"
               class="ml-[20px] border-none bg-slate-400 text-black rounded-[5px] mb-5 px-2 w-[235px] h-[45px]">Сбросиь</button>
         </div>

      </div>
   </div>
   </div>

</template>

<script>
import { useStore } from '@/stores/test'

export default {
   props: {
      buttonName: String,
   },
   data: () => {
      return {
         feedback: false,
         inputValueName: '',
         inputValueMail: '',
         inputValuePhone: '',
         store: useStore()
      }
   },
   methods: {
      showFeedback() {
         this.feedback = true
      },
      closeModal() {
         this.feedback = false
      },
      cleanForm() {
         
      },
      clearInput() {
         this.inputValueName = '';
         this.inputValuePhone = '';
         this.inputValueMail = '';
      }

   
   }

}

</script>
