<template>

	<div v-if="store.modal" class = "fixed z-[12] inset-0 flex justify-center items-center">
		
		<div @click="store.modal = false"  v-if="store.modal" class="fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"></div>  

			<div :class = "store.bg" class="overflow-y-scroll scrollClass max-h-screen bg-cover bg-no-repeat grid rounded-[10px] z-[11]">
    			<div class="p-2 text-right">
         			<button @click="store.modal = false" class="w-10 h-10 focus:outline-none text-[29px]">
            			<strong>X</strong> 
            		</button>
     			 </div>
				<component class = "mx-20 mb-10 max-[450px]:mx-[10px]" :is="store.comp"/>
				
			</div>

	</div>

</template>

<script>

import Contacts from '@/components/Contacts.vue'
import Feedback from '@/components/Feedback.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import FogotPassword from '@/components/FogotPassword.vue'
import SetPrice from '@/components/SetPrice.vue'
import { useStore } from '@/stores/test'

export default {

	data() {
	
		return {
	
			store: useStore(),
	
		}
	
	},
	
	components: {
	
		Contacts,
		Feedback,
		Login,
		Register,
		FogotPassword,
		SetPrice,

	
	},

}

</script>
