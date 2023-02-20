<template>
	
      <div class="grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]">
	<div class="grid grid-cols-[max-content_auto_max-content] text-[40px] h-[60px]">
		<button @click = "store.comp = 'Contacts'" class = "bg-[#EAAD02] rounded-[10px] px-2 text-white">{{	store.langProp[store.lang].contacts }}</button>
		<span class = "justify-self-center">|</span>
		<span class = "bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black">{{	store.langProp[store.lang].feedback }}</span>  
	</div>
         <h2 class="text-3xl justify-self-center font-roboto">{{	store.langProp[store.lang].contactUs }}</h2>
         <input v-model="inputValueName" class="border-solid border-2 rounded-[4px] border-gray-400 text-center"
            type="text" :placeholder="store.langProp[store.lang].yourName">
         <div class="grid grid-cols-2 gap-[20px]">
            <input v-model="inputValueMail"
               class="border-solid border-2 rounded-[4px] border-gray-400 px-[10px]"
               type="text" placeholder="Email">
            <input v-model="inputValuePhone" class="border-solid border-2 rounded-[4px] border-gray-400 px-[10px]"
               type="text" :placeholder="store.langProp[store.lang].telephone_1">
         </div>

         <textarea
            class="border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px] "
            placeholder="Сообщение" name="" id=""></textarea>
  
         <div class="grid grid-cols-2 gap-[20px] [&>*]:h-[50px]">
            <button
               class="bg-[#EAAD02] text-white rounded-[5px]">{{	store.langProp[store.lang].send }}</button>
            <button @click="clearInput"
               class="bg-[#02020233] rounded-[5px]">{{	store.langProp[store.lang].reset }}</button>
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
