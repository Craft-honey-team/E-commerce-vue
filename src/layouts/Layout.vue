<template>

<LayoutModal/>
<div :class = "$route.name == 'Home' ? 'absolute inset-0 overflow-hidden' : 'min-h-screen'" class = "px-[5%] grid grid-rows-[min-content_auto_min-content] max-w-screen max-[800px]:px-[20px]">
<Header />
<slot />
</div>

</template>

<script>
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';
import LayoutModal from '@/layouts/LayoutModal.vue';
export default{
	
   components: {
   		Header, 
   		Footer,
   		LayoutModal,
   },

}


</script>

