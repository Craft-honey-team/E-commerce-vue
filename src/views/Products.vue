<template>
<div class = "relative mx-[20px]">
	<Layout>
          <div class="px-[2.5%]">
            <div><p class = "text-[40px]">Каталог</p></div>
            
          </div>
		
    	<ProductList />        
    
    </Layout>
</div>
</template>


<script>
import ProductList from '@/components/ProductList.vue'
import Layout from '@/layouts/Layout.vue'
export default {
    
    components: {
            ProductList,
            Layout
    }
    

}
</script>
