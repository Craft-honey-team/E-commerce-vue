<template>
	
      <div class="grid grid-flow-row gap-y-[20px] mb-[60px] [&_input]:h-[60px]">
		<div class="grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1">
			<button @click = "store.comp = 'Contacts'" class = "bg-[#EAAD02] rounded-[10px] px-2 text-white max-[550px]:text-2xl">{{ store.langProp.contacts }}</button>
			<span class = "justify-self-center max-[700px]:hidden">|</span>
			<span class = "bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center max-[550px]:text-2xl">{{ store.langProp.feedback }}</span>  
		</div>
         
         <div>
		     <input v-model="name" class="border-solid border-2 rounded-[4px] border-gray-400 text-center w-full"
		        type="text" :placeholder="store.langProp.yourname">
         </div>
         <div class="grid grid-cols-2 gap-[20px]">
            <input v-model="mail"
               class="border-solid border-2 rounded-[4px] border-gray-400 px-[10px]"
               type="text" placeholder="Email">
            <input @input="handleInput" v-model="phone" class="border-solid border-2 rounded-[4px] border-gray-400 px-[10px]"
                :placeholder="store.langProp.telephone">
         </div>

		 <div>
		     <textarea v-model="message"
		        class="border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px] w-full"
		        placeholder="Сообщение" name="" id=""></textarea>
         </div>
  
         <div class="grid grid-cols-2 gap-[20px] [&>*]:h-[50px]  ">
            <button @click="sendMail" 
            :disabled="name.length <= 2 || mail.length <= 5 || phone.length <= 7  || message.length <= 10"
               class="bg-[#EAAD02] text-white rounded-[5px] disabled:opacity-50">{{	store.langProp.send }}</button>
            <button @click="clearInput"
               class="bg-[#02020233] rounded-[5px]">{{	store.langProp.reset }}</button>
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
         name: '',
         mail: '',
         phone: '',
         message: '',
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
         this.name = '';
         this.phone = '';
         this.mail = '';
         this.message = '';
      },
      handleInput(){
         this.phone = this.phone.replace(/[^0-9+]/g, '')
      },
      sendMail() {
      
      	fetch(`/api/mail/?name=${this.name}&mail=${this.mail}&phone=${this.phone}&message=${this.message}`);
      
      }
   
   }

}

</script>
