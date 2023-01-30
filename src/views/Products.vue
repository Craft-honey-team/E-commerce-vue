<template>

<Contacts buttonName = "Контакты"/>

	<Layout>
	
		<div>
        	<div class = "pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black"><p class = "text-[50px]">Каталог</p></div>
		
    		<ProductList />      
    	</div>  
    
    </Layout>

</template>


<script>
import ProductList from '@/components/ProductList.vue'
import Layout from '@/layouts/Layout.vue'
import Contacts from '@/components/Contacts.vue'
export default {

    components: {
            ProductList,
            Layout,
            Contacts
    }


}
</script>
