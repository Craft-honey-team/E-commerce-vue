<template>


    <Layout>
        <div class="pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black">
        
       		<h1 class="text-[50px]">{{ store.langProp.blog }}</h1>
  
        </div>

    <div class=" ">
        <div class="flex justify-between mb-[10%]  max-[950px]:flex-col-reverse">
            <div class="w-[40%] max-[950px]:w-[100%] max-[950px]:py-[100px]">
                <h2 class="text-[30px]">{{ store.langProp.blogp1 }}</h2>
                <p class="text-[20px]">{{ store.langProp.blogp2 }}</p>
            </div>
            <div class="max-[1000px]:w-[400px] max-[950px]:w-[100%]">
                <img class="max-[950px]:w-[100%] max-[570px]:h-[300px]" src="/src/assets/Rectangle2.png">
            </div>
        </div>


        <div class="flex justify-between max-[950px]:flex-col-reverse">
            <div class="w-[40%] max-[950px]:w-[100%] max-[950px]:py-[100px]">
                <h2 class="text-[35px]">{{ store.langProp.blogp3 }}</h2>
                <p class="text-[20px]">{{ store.langProp.blogp4 }} </p>
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
