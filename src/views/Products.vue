<template>

	<Layout>
	
		<div>
        	<div class = "my-[40px] max-[900px]:text-center"><p class = "text-[50px]">{{ store.langProp.catalogue }}</p></div>
        	
    		<div class="flex justify-center">
				<div class="border-b-black border-b-[3px] w-fit mb-20">
					<h2 class="text-[40px] max-[900px]:text-center">{{ store.langProp.retail }}</h2>
				</div>
			</div>

    		<ProductList :data = "store.data"/>     
    		
    		<div class="flex justify-center">
				<div class="border-b-black border-b-[3px] w-fit mb-20">
				    <h2 class="text-[40px] max-[900px]:text-center">{{ store.langProp.wholesale }}</h2>
				</div>
    		</div> 
	
			<ProductList :data = "store.dataOpt"/> 
		
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
