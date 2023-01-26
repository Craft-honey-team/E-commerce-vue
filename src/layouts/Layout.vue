<template>

<Header/>
<slot/>
<Footer/>

</template>

<script>
import Header from '../layouts/Header.vue';
import Footer from '../layouts/Footer.vue';
export default{
   components: {Header, Footer}
}


</script>
