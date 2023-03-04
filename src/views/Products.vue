<template>

	<Layout>
	
		<div>
        	<div class = "my-[40px] max-[900px]:text-center"><p class = "text-[50px]">{{ store.langProp.catalogue }}</p></div>
		
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
