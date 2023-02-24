<template>

	<Layout>
	
		<div>
        	<div class = "pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black"><p class = "text-[50px]">{{ store.langProp.catalogue }}</p></div>
		
    		<ProductList />      
    	</div>  
    
    </Layout>

</template>


<script>
import ProductList from '@/components/ProductList.vue'
import { useStore } from '@/stores/test'
export default {
	data () {
    return {
    store: useStore()
    }
  },
    components: {
            ProductList,
    }


}
</script>
