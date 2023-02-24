<template>

<LayoutModal/>

<div class = "h-screen min-h-[700px] overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px]">
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

