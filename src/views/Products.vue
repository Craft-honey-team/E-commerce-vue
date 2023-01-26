<template>

	<Layout>

    	<ProductList />        
    
    </Layout>
    
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
