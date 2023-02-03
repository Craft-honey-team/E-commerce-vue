<template>

<Feedback/>
<div :class = "$route.name == 'Home' ? 'absolute inset-0 overflow-hidden' : 'min-h-screen'" class = "px-[5%] grid grid-rows-[min-content_auto_min-content] max-w-screen max-[800px]:px-[2%]">
<Header />
<slot />
<Footer />
</div>

</template>

<script>
import Header from '../layouts/Header.vue';
import Footer from '../layouts/Footer.vue';
import Feedback from '@/components/Feedback.vue'
export default{
	
   components: {
   		Header, 
   		Footer,
   		Feedback
   },

}


</script>

