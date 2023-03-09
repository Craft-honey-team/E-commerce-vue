<template>


    <Layout>
        <div class="my-[40px]">
        
       		<h1 class="text-[50px]">{{ store.langProp.blog }}</h1>
  
        </div>


    <div class="grid grid-flow-row gap-[100px] mb-[40px] mx-[40px]">

        <div class="grid grid-cols-2 max-[950px]:flex-col-reverse" v-for="item in store.blog">
            <div class="max-[950px]:w-[100%] max-[950px]:py-[100px]">
                <h2 class="text-[30px]">{{ item.title[store.lang] }}</h2>
                <p class="text-[20px]">{{ item.content[store.lang] }}</p>
            </div>
            <div class="justify-self-end max-[1000px]:w-[400px] max-[950px]:w-[100%]">
                <img class="max-[950px]:w-[100%] max-[570px]:h-[300px]" :src="item.image">
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
	store: useStore(),
	image: 're'
    }
  },
    methods: {

        submit() {

            console.log(document.querySelector("#image").value);

        },

    }
}
</script>
