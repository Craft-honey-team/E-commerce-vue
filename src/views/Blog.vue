<template>


    <Layout>
        <div class="">
        
       		<h1 class="text-[45px]">{{ store.langProp[store.lang].blog }}</h1>
  
        </div>

    <div class=" ">
        <div class="flex justify-between mb-[10%]  max-[950px]:flex-col-reverse">
            <div class="w-[40%] max-[950px]:w-[100%] max-[950px]:py-[100px]">
                <h2 class="text-[30px]">{{ store.langProp[store.lang].blogP1 }}</h2>
                <p class="text-[20px]">{{ store.langProp[store.lang].blogP2 }}</p>
            </div>
            <div class="max-[1000px]:w-[400px] max-[950px]:w-[100%]">
                <img class="max-[950px]:w-[100%] max-[570px]:h-[300px]" src="/src/assets/Rectangle2.png">
            </div>
        </div>


        <div class="flex justify-between max-[950px]:flex-col-reverse">
            <div class="w-[40%] max-[950px]:w-[100%] max-[950px]:py-[100px]">
                <h2 class="text-[35px]">{{ store.langProp[store.lang].blogP3 }}</h2>
                <p class="text-[20px]">{{ store.langProp[store.lang].blogP4 }} </p>
            </div>
            <div class="max-[1000px]:w-[400px] max-[950px]:w-[100%]">
                <img class="max-[950px]:w-[100%] max-[570px]:h-[300px]" src="/src/assets/Rectangle3.png">
            </div>
        </div>
    </div>
</Layout>
</template>
<script>
import { useStore } from '@/stores/test'

export default {
  data () {
    return {
    store: useStore()
    }
  },
}
</script>
