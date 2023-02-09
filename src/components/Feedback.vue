<template>
   
      <div class="grid grid-rows-[min-content] gap-[20px] mx-[60px] mb-[60px] justify-self-center [&_input]:h-[60px]">
         <h2 class="text-3xl text-center mb-[40px] font-roboto">Свяжитесь с нами</h2>
         <input v-model="inputValueName" class="border-solid border-2 rounded-[4px] border-gray-400 text-center"
            type="text" placeholder="Ваше Имя">
         <div class="grid grid-cols-2 gap-[20px]">
            <input v-model="inputValueMail"
               class="border-solid border-2 rounded-[4px] border-gray-400 px-[10px]"
               type="text" placeholder="Email">
            <input v-model="inputValuePhone" class="border-solid border-2 rounded-[4px] border-gray-400 px-[10px]"
               type="text" placeholder="Телефон">
         </div>

         <textarea
            class="border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px] "
            placeholder="Сообщение" name="" id="" cols="30" rows="10"></textarea>
  
         <div class="grid grid-cols-2 gap-[20px] [&>*]:h-[50px]">
            <button
               class="border-none bg-[#25D366] text-white rounded-[5px]">Отправить</button>
            <button @click="clearInput"
               class="border-none bg-[#02020233] text-black rounded-[5px]">Сбросить</button>
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
