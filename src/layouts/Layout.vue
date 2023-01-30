<template>

<div class = "px-[5%] min-h-screen grid grid-rows-[min-content_auto_min-content] max-[800px]:px-[2%] absolute inset-0 overflow-hidden">
<Header />
<slot />
<Footer />
</div>

</template>

<script>
import Header from '../layouts/Header.vue';
import Footer from '../layouts/Footer.vue';
export default{
	
   components: {
   		Header, 
   		Footer
   },

}


</script>
