<template>

<LayoutModal/>

<div class = "crutch overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px] max-[400px]:px-[4px]">
<Header />
<slot class = "" />
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

