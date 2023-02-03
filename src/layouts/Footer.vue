<template>

   <footer class="bg-white flex justify-center my-[1vh] w-full">
      <div class="self-center">
      
      		<button @click = "store.feedback = true" class = "underline text-[20px]">Обратная связь</button>
      		<img class = "inline ml-2" src = "../assets/call.svg">

      </div>
   </footer>


</template>

<script>

import Feedback from '@/components/Feedback.vue'
import { useStore } from '@/stores/test'

export default {

	data() {

		return {
		
			store: useStore()
		
		}

	},

	components: {
	
		Feedback
	
	}
	

}

</script>
